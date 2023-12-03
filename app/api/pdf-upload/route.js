import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { writeFile } from "fs/promises";
import { join } from "path";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";






export async function POST(req) {
  console.log("In the Backend");

  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      return Response.json({ message: "No file Selected" });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), "data/document_loaders", file.name);
    await writeFile(path, buffer);

    // Load the file in a pdf loader
    const loader = new PDFLoader(path);

    // 231 docs before chunking
    const docs = await loader.load();

    console.log("docs:", docs);

    if (docs.length === 0) {
      console.log("No docs found");

      return;
    } 

    // chunk the file size
    const splitter = new CharacterTextSplitter({
      separator: " ",
      chunkSize: 250,
      chunkOverlap: 10,
    });

    const splitDocs = await splitter.splitDocuments(docs);

    // reduce metadata size
    const reduceDocs = splitDocs.map((doc) => {
      const reducedMetadata = { ...docs.metadata };

      // delete the metadata pdf filed
      delete reducedMetadata.pdf;

      return new Document({
        pageContent: doc.pageContent,
        metadata: reducedMetadata,
      });
    });

    // console.log(docs[100]);
    // console.log(splitDocs[100].metadata);
    console.log("reducedDocs:", reduceDocs[10]);



    /**
     * Upload reduced docs to pinecone database
     * 
     */

    // import { Pinecone } from "@pinecone-database/pinecone";

    // const pinecone = new Pinecone();
    // await pinecone.init({
    //   environment: "us-west4-gcp-free",
    //   apiKey: "********-****-****-****-************",
    // });
    // const index = pinecone.Index("my-school-buddy");


    // const client = new Pinecone({
    //   apiKey: process.env.PINECONE_API_KEY,
    //   environment: process.env.PINECONE_ENVIRONMENT,
    // });

    // await client.init({
      
    // });

    // const pineconeIndex = client.index(process.env.PINECONE_INDEX);

    // // upload documents
    // await PineconeStore.fromDocuments(reduceDocs, new OpenAIEmbeddings(), {
    //   pineconeIndex,
    // });

    // console.log("Successfully uploaded to database");

    // Return the response to the frontend
    return Response.json({ message: "File Uploaded Successfully" });


  } catch (error) {
    console.error("Error:", error.message);

    return Response.json({ message: "Error uploading file" });
  }
}
