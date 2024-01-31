"use client";

import React, { useEffect, useRef, useState } from "react";

import SearchBox from "../../components/SearchBox";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import Hero from "../../components/Hero";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "next/error";
import { withToast } from "../../../utils/toast";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/SIdebar";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";









function PdfSearch() {
  // check is wallet is connected
  const router = useRouter();
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { chains } = useSwitchNetwork()

  



const [isLoading, setIsLoading] = useState(false);
const [prompt, setPrompt] = useState("");
const [error, setError] = useState(null);

const [messages, setMessages] = useState([
  {
    text: "Hi What will you like to search for today",
    type: "bot",
  },
  // {
  //   text: "Hi What will you like to search for today",
  //   type: "user",
  // },
  // {
  //   text: "consider options like rental properties or house flipping. However, real estate investment requires significant capital and involves its own set of risks. 9. Passive income streams: Explore potential passive income streams such as rental properties, stock dividends, royalties from books or music, or creating digital products that can generate income without continuous effort or time investment. Remember, making money is not an overnight process. It requires hard work, persistence, and adaptability. Continuously educate yourself, stay updated with market trends, and be open to new opportunities.",
  //   type: "bot",
  // },
  // {
  //   text: "consider options like rental properties or house flipping. However, real estate investment requires significant capital and involves its own set of risks. 9. Passive income streams: Explore potential passive income streams such as rental properties, stock dividends, royalties from books or music, or creating digital products that can generate income without continuous effort or time investment. Remember, making money is not an overnight process. It requires hard work, persistence, and adaptability. Continuously educate yourself, stay updated with market trends, and be open to new opportunities.",
  //   type: "user",
  // },
]);

const [firstMsg, setFirstMsg] = useState(true);

/**
 * whenever the promptBox value changes
 */
const handlePromptChange = (e) => {
  setPrompt(e.target.value);
};

/**
 * Whenever we submit the prompt
 */
const handlePromptSubmit = async () => {
  console.log("Sending", prompt);

  try {
    // update the user message`
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: prompt, type: "user" },
    ]);

    setPrompt("");
    setIsLoading(true);

    // sending the prompt to the backend and initializing the response
    const response = await fetch("api/video-summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: prompt, firstMsg: firstMsg }),
      // cache:'no-store'
    });

    
    
    if (!response.ok) {
      
      // set the a custom message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "An error occurred, please paste a valid youtube link and try agin", type: "bot" },
      ]);
      
      setFirstMsg(true);
      setIsLoading(false);
      
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    
    // Resetting the Loading state after response has been received
    setFirstMsg(false);
    setIsLoading(false);

    // Getting the response from thr back end
    const searchRes = await response.json();

    // Update the messages array with the received response

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: searchRes.output?.text, type: "bot" },
    ]);

    console.log({ searchRes });

    // clear old Errors
    setError("");
  } catch (err) {
    console.log(err);
    setError(err);
  }
};

useEffect(() => {
  if (!isConnected || chain.id !== chains[0].id) {
    router.push("./");
  }
}, [isConnected, chain, chains, router]);
  

  return (
    <>
      <ToastContainer />

      <TwoColumnLayout
        alignment="alignment"
        leftChildren={
          <>
            <Sidebar />
            <Hero
              title="VIDEO SUMMARIZER"
              paragraph="Embark on a transformative academic journey with our decentralized AI platform, crafted exclusively for students. Revolutionize your learning experience as cutting-edge AI tools converge in a decentralized space "
              buttonText="Upload"
              display="hidden"
              
            />
          </>
        }
        rightChildren={
          <>
            <div className="relative flex justify-center items-center w-full">
              <Image
                width={400}
                height={0}
                alt=""
                src="/assets/pngegg 2.svg"
                className="absolute top-0 blur"
              />

              <SearchBox
                messages={messages}
                prompt={prompt}
                handlePromptChange={handlePromptChange}
                handlePromptSubmit={handlePromptSubmit}
                error={error}
                isLoading={isLoading}
                placeHolderText={
                  messages.length === 1
                    ? "Enter a youtube url, e.g., https://www.youtube.com/watch?v=O_9JoimRj8w"
                    : "Ask a follow up question"
                }
              />
            </div>
          </>
        }
      />
    </>
  );
}

export default PdfSearch;


