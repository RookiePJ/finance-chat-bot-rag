# Blockchain Glossary Chat Bot with RAG 
Note and disclaimer - this project is based on the original code forked from 'Build a RAG Application' by David Grey
(https://github.com/gitdagray/nextjs-rag-langchain)

### Description
A simple AI chatbot which will use retrieval augmented generation to 
answer user questions containing blockchain related terms in order to provide descriptions of those terms.  

### Simple Use Case
#### Overview: As a user I want to be able to find the definition of a blockchain term.

- When I enter a term that is used in the blockchain/web3/cryptocurrency content I want to be provided with its basic definition.
- If the term is found within the loaded RAG document then that definition will be provided to the model in order to give the user an answer
- If the term is not found within the RAG document then the answer will be provided by the model 
- Any other unrelated will be answered by the model. 

### ⚙ Usage and setup
#### Setup and configuration
- Clone the repository  
- Provide your own .env.local file with an OpenAI API key (OPENAI_API_KEY=<YOUR API KEY>)
- Install dependencies using the command: npm install

#### To run the web applicaion locally
- Run the application using the command: run: npm run dev
- Open a web browser at the following address:  http://localhost:3000

### To Do
- [X] Install and run locally
- [X] Run with OpenAI
- [X] Create RAG crypto glossary document
- [X] Crate new route to receive an answer from the model using the RAG document
- [X] Amend the text on various web pages 
- [X] Do basic End to End testing (no idea how to write unit or integration tests!)
- [X] Document the new code (old school, old habits die hard!)
- [X] Create/Amend project documentation (this document)
- [ ] TODO Amend to work locally with the text-generation-webui api 
- [ ] TODO Add the ability to process PDF documents, turn them into a langchain vector

### Technologies used 
- Next.js
- OpenAI with RAG
- Langchain
- SeleniumIDE

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