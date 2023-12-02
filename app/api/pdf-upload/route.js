import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { writeFile } from "fs/promises";
import { join } from "path";





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

    console.log(docs);

    if (docs.length === 0) {
      console.log("No docs found");

      return;
    }

    return Response.json({ message: "File Uploaded Successfully" });
  } catch (error) {
    console.error("Error:", error.message);

    return Response.json({ message: "Error uploading file" });
  }
}
