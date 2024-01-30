import { YoutubeTranscript } from "youtube-transcript";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";




// Global variables
let chain;
let chatHistory = [];

const initializeChain = async (initialPrompt, transcript) => {
  try {
    const model = new ChatOpenAI({
      temperature: 0.8,
      modelName: "gpt-3.5-turbo",
    });

    // HNSWLib
    const vectorStore = await HNSWLib.fromDocuments(
      [{ pageContent: transcript }],
      new OpenAIEmbeddings()
    );

    // const directory = ""
    // await vectorStore.save(directory)

    // const loadVectorStore = await HNSWLib.load(
    //   directory,
    //   new OpenAIEmbeddings()
    // )

    chain = ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(),
      { verbose: true }
    );

    const response = await chain.call({
      question: initialPrompt,
      chat_history: chatHistory,
    });

    chatHistory.push({
      role: "assistant",
      content: response.text,
    });

    console.log({ chatHistory });
    return response;
  } catch (error) {
    console.error(error);
  }
};





export async function POST(request) {

  const {prompt, firstMsg } = await request.json();
  
  if(firstMsg) {
    try {
      const initialPrompt = `Give me a summary of the transcript: ${prompt}`

      chatHistory.push({
        role: "user",
        content: initialPrompt
      })


      // Youtube transcript api
      const transcriptResponse = await YoutubeTranscript.fetchTranscript(prompt)

      if(!transcriptResponse) {

        return Response.json({error: "Failed to get transcript"}, {status: 400})
      }
      console.log(transcriptResponse)

      let transcript  = ""
      transcriptResponse.forEach((line)=> {
        transcript += ""
      })

      // Pass the arguments
      const response = await initializeChain(initialPrompt, transcript)

      // Get back response
      return Response.json({output: response, chatHistory}, {status: 200})


    } catch (error) {
      console.error(error);

      return Response.json({error: ""});
    }


  }else {
    // if not first message
    try{
      console.log("received question")
      chatHistory.push({
        role: "user",
        content: prompt
      })

      const response = await chain.call({
        question: prompt,
        chat_history: chatHistory,
      });

      chatHistory.push({
        role: "assistant",
        content: response.text,
      });

      return Response.json({output: response, chatHistory}, {status: 200})

    } catch(error) {
      console.log(error)

      Response.json({error: "An error occurred"}, {status: 500})
    }
  }
}
