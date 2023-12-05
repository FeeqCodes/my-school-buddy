"use client";

import Hero from "../../components/Hero";
import SearchBox from "../../components/SearchBox";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import Sidebar from "../../components/SIdebar";






const ChatBuddy = () => {
  // check is wallet is connected
  const router = useRouter()
  const { isConnected } = useAccount()

  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);

  const [messages, setMessages] = useState([
    {
      text: "Hi What will you like to search for today",
      type: "bot",
    },
    
    
    
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
      setIsLoading(true)

      // sending the prompt to the backend and initializing the response
      const response = await fetch("api/chat-buddy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: prompt, firstMsg: firstMsg }),
        // cache:'no-store'
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      // Resetting the prompt and firstMsg after response has been received
      
      setFirstMsg(false);
      setIsLoading(false)

      // Getting the response from thr back end
      const searchRes = await response.json();

      // Update the messages array with the received response

      setMessages( (prevMessages) => [
        ...prevMessages, {text: searchRes.output.response, type: "bot"}
      ])

      console.log({searchRes})

      // clear old Errors
      setError("")

    } catch(err) {
      console.log(err)
      setError(err);
    }
  };



  useEffect(() => {
    if (!isConnected) {
      router.push("./");
    }
  }, [isConnected]);



  return (
    <>
    {
     

      <TwoColumnLayout
        leftChildren={
          <>
            <Sidebar />
            <Hero
              title="ASK BUDDY"
              paragraph="Embark on a transformative academic journey with our decentralized AI platform, crafted exclusively for students. Revolutionize your learning experience as cutting-edge AI tools converge in a decentralized space, putting knowledge at your fingertips. Explore the future of education, where individualized assistance meets the power of decentralization "
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
              />
            </div>
          </>
        }
      />
    }
     
    </>
  );
};

export default ChatBuddy;
