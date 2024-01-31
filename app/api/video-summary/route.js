// /pages/api/transcript.js
import { YoutubeTranscript } from "youtube-transcript";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
// import { OpenAI } from "langchain";
import { BufferMemory } from "langchain/memory";


// Global variables
let chain;
let chatHistory = [];




const initializeChain = async (initialPrompt, transcript) => {
  console.log("Initializing the CHain")

  try {
    const model = new ChatOpenAI({
      temperature: 0.8,
      modelName: "gpt-3.5-turbo",
    });

    const splitter = new RecursiveCharacterTextSplitter({
      separator: " ",
      chunkSize: 1000,
      chunkOverlap: 3,
    });

    const docs = await splitter.createDocuments([transcript]);
    // console.log(`Loading data ${docs[0]}`);
     
    // Vector Store
    const vectorStore = await MemoryVectorStore.fromDocuments(
      docs,
      new OpenAIEmbeddings()
    );
    console.log("Vector STore", vectorStore)
    

    //await vectorStore.save(directory);
    
    // retrieve the vector as a file
    // const directory = "../../../data";
    // await vectorStore.save(directory)

    // const loadVectorStore = await HNSWLib.load(
    //   directory,
    //   new OpenAIEmbeddings()
    // )

    chain = ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(),
      {
      memory: new BufferMemory({
        memoryKey: "chat_history", // Must be set to "chat_history"
      }),
    }
    );

    const response = await chain.call({
      question: initialPrompt,
    });
    console.log("AI Response", response)

    chatHistory.push({
      role: "assistant",
      content: response.text,
    });


    return response;

  } catch (error) {
    console.error(error);
  }
};



export async function POST(req) {
  console.log("in the back end")
  const { prompt, firstMsg } = await req.json();


  if (firstMsg) {
    try {
      const initialPrompt = `Give me a summary of the transcript: ${prompt}`;

      chatHistory.push({
        role: "user",
        content: initialPrompt,
      });

      // Youtube Transcript Api
      const transcriptResponse = await YoutubeTranscript.fetchTranscript(
        prompt
      );

      if (!transcriptResponse) {
        return res.status(400).json({ error: "Failed to get transcript" });
      }
      console.log( transcriptResponse[1] );

      // Getting only the text from the object
      let transcript = "";

      transcriptResponse.forEach((line) => {
        transcript += line.text;
      });
      console.log("new transcript",transcript)

      const response = await initializeChain(initialPrompt, transcript);
      // let response =  'Hello'
      return Response.json({output: response, chatHistory}, {status: 200})

    } catch (err) {
      console.error(err);
      
      return Response.json(
        { error: "An error occurred while fetching transcript" },
        { status: 400 }
      );

    }

    
  } else {
    // If it's not the first message, we can chat with the bot
      console.log("Not first Msg");
    
    try {

      chatHistory.push({
        role: "user",
        content: prompt,
      });

      const response = await chain.call({
        question: prompt,
      });

      chatHistory.push({
        role: "assistant",
        content: response.text,
      });

      return Response.json({ output: response, chatHistory }, { status: 200 });

    } catch (error) {
      // Generic error handling
      console.error(error);

        return Response.json(
          { error: "An error occurred during the conversation" },
          { status: 500 }
        );
    }
  }
 
}
