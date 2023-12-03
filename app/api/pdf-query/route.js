import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { VectorDBQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";



export async function POST(req) {
  console.log("In the Query Backend");

  try {
    const { input } = await req.json();

    if (!input) {
      throw new Error("No input");
    }

    console.log("input received:", input);

    // Initialize pinecone

    const client = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENVIRONMENT,
    });

    const pineconeIndex = client.index(process.env.PINECONE_INDEX);

    // Search Database
    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings(),
      { pineconeIndex }
    );

    // Instantiate the model
    const model = new OpenAI();

    // query the stored pinecone vector
    const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
      k: 1,
      returnSourceDocuments: true,
    });

    const response = await chain.call({
      query: input,
    });

    console.log(response)

    // Return the response to the frontend

    return Response.json({ output: response });


  } catch(error) {
    console.error(error)

    return Response.json({ message: "Error Querying file" });
  }
}
