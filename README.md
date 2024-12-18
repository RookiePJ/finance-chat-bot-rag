# Blockchain Glossary Chat Bot with RAG 
Note and disclaimer - this project is based on the original code forked from 'Build a RAG Application' by David Grey
(https://github.com/gitdagray/nextjs-rag-langchain)

### Description
A simple AI chatbot which will use retrieval augmented generation to 
answer user question based around blockchain terms.  

### Simple Use Case
#### Overview: As a user I want to be able to find the definition of various blockchain terms.

- When I enter a term that is used in the blockchain/web3/cryptocurrency content I want to be provided with its basic definition.
- If the term is found within the loaded RAG document then that definition will be provided to the model in order to give the user an answer
- If the term is not found within the RAG document then the answer will be provided by the model 
- Any other unrelated will be answered by the model. 

### ⚙ Usage

- Provide your own .env.local file with an OpenAI API key (OPENAI_API_KEY=<YOUR API KEY>)
- npm install
- npm run dev

### To Do
- [X] Install and run locally
- [X] Run with OpenAI
- [X] Create RAG crypto glossary document.
- [ ] Do basic End to End testing (no idea how to write unit or integration tests!)
- [X] Document
- [ ] Amend to work locally with the text-generation-webui api 
- [ ] Add the ability to process PDF documents, turn them into a langchain vector

### Using LangChain & Next.js

### David Greys Author Links

📺 [YouTube Video](https://youtu.be/YLagvzoWCL0) for the original base repository.
✅ [Check out my YouTube Channel with hundreds of tutorials](https://www.youtube.com/DaveGrayTeachesCode).

### 🎓 Academic Honesty
Original base code was forked from David Grey's repository. 
Code changes have (and will be) made to suit another use case.

### References

- 🔗 [LangChain JS/TS Docs](https://js.langchain.com/docs/get_started/introduction)
- 🔗 [Next.js](https://nextjs.org/)
- 🔗 [Vercel AI SDK](https://sdk.vercel.ai/docs)
- 🔗 [OpenAI](https://openai.com/)
- 🔗 [shadcn/ui](https://ui.shadcn.com/)
- 🔗 [Next.js Light & Dark Modes](https://www.davegray.codes/posts/light-dark-mode-nextjs-app-router-tailwind)