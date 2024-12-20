// Original idea was to use financial data taken from yahoo finance API and use it as RAG information to perform a
// back test of an assert to try and determine future price movement.
//
// Historic price data was downloaded and the stochastic technical analysis indicator was applied to generate a buy or
// sell signal recommencements on a daily timeframe.
// This was the source of the, now unused, stochastic files in the data directory.
// Ref my project (https://github.com/RookiePJ/SimpleTechnicalAnalysis) that downloads and then applies this
//technical analysis.

// This proved to be too ambitious a project and I abandoned this idea due to lack of time and domain (AI) knowledge.

// It appears that there are already pretrained models that do the job better without any use of our RAG data.
// Example financial models:
//     1) instruction-pretrain/finance-llama3-8B
//     2) quantFactory/llama-3-8B-instuct-finance-RAG-GGUF
// Both models were able to determine historic profits (or losses) of option trades, given dates and strike prices.
// They also understood various financial instruments (ie Credit Default Swaps).
// So my conclusion was how are we going to create a better program than that!

// TODO this would still be a potentially good learning exercise

import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';

import { JSONLoader } from "langchain/document_loaders/fs/json";
import { RunnableSequence } from '@langchain/core/runnables'
import { formatDocumentsAsString } from 'langchain/util/document';
import { CharacterTextSplitter } from 'langchain/text_splitter';

const loader = new JSONLoader(
    "src/data/asserts.json",
    ["/name", "/ticker", "/type", "/nickname", "/current_price", "/start_price", "/start_date", "/summary", "/whitepaper"],
);

export const dynamic = 'force-dynamic'

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const TEMPLATE = `Answer the user's questions based only on the following context:
==============================
Context: {context}
==============================
Current conversation: {chat_history}

user: {question}
assistant:`;


export async function POST(req: Request) {
    try {
        // Extract the `messages` from the body of the request
        const { messages } = await req.json();
        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
        const currentMessageContent = messages[messages.length - 1].content;
        const docs = await loader.load();
        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-3.5-turbo',
            temperature: 0,
            streaming: true,
            verbose: true,
        });

        /**
       * Chat models stream message chunks rather than bytes, so this
       * output parser handles serialization and encoding.
       */
        const parser = new HttpResponseOutputParser();
        const chain = RunnableSequence.from([
            {
                question: (input) => input.question,
                chat_history: (input) => input.chat_history,
                context: () => formatDocumentsAsString(docs),
            },
            prompt,
            model,
            parser,
        ]);

        // Convert the response into a friendly text-stream
        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            question: currentMessageContent,
        });

        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e: any) {
        return Response.json({ error: e.message }, { status: e.status ?? 500 });
    }
}