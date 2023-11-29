import { OpenAI } from "langchain/llms/openai"
import { BufferMemory } from "langchain/memory"
import { ConversationChain } from "langchain/chains"
import { NextRequest, NextResponse } from "next/server";






// Initialize
let model;
let memory;
let chain;


export async function POST(req) {
  
  const { input, firstMsg } = await req.json()


  if(!input) {
    throw new Error('No Input')
  }

  // 
  if(firstMsg) {
    console.log("Instantiating chain")

    model = new OpenAI({modelName: "gpt-3.5-turbo"})
    memory= new BufferMemory();

    // Pass model and memory to chain
    chain = new ConversationChain({ llm:model, memory: memory})
  }

  console.log({input})

  const response = await chain.call({ input })

  console.log(response)


  return Response.json({output: response});
}




// export function GET(res, req) {
//   // const body = await req.json()
//   console.log("moi")

//   return NextResponse.json({hello: "world"})
// }

// export async function POST(req) {
//     const body = await req.json() 
//      console.log(body)

//     return Response.json("hello")
// }