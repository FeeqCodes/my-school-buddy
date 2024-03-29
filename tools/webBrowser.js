import { SerpAPI } from "langchain/tools";

// USES BING
const SerpAPITool = () => {
  const serpAPI = new SerpAPI(process.env.SERPAPI_API_KEY, {
    baseUrl: "http://localhost:3000/agents",
    location: "Vancouver,British Columbia, Canada",
    hl: "en",
    gl: "us",
  });

  // Grab the most recent result
  serpAPI.returnDirect = true;

  return serpAPI;
};

export default SerpAPITool;
