'use client'

import React, { useState } from "react";
import SearchBox from "../../components/SearchBox";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import Sidebar from "../../components/Sidebar";
import Hero from "../../components/Hero";
import Image from "next/image";

function PdfSearch() {

    const [prompt, setPrompt] = useState("");
    const [error, setError] = useState(null);

    const [messages, setMessages] = useState([
      {
        text: "Hi! Upload a pdf and ask me any question from it ",
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

        // sending the prompt to the backend and initializing the response
        const response = await fetch("api/chat-buddy", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: prompt, firstMsg: firstMsg }),
        });

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // Resetting the prompt and firstMsg after response has been received
        setPrompt("");
        setFirstMsg(false);

        // Getting the response from thr back end
        const searchRes = await response.json();

        // Update the messages array with the received response

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: searchRes.output.response, type: "bot" },
        ]);

        console.log({ searchRes });

        // clear old Errors
        setError("");
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };


  return (
    <>
      <TwoColumnLayout
        alignment="alignment"
        leftChildren={
          <>
            <Sidebar />
            <Hero
              title="PDF SEARCH"
              paragraph="Embark on a transformative academic journey with our decentralized AI platform, crafted exclusively for students. Revolutionize your learning experience as cutting-edge AI tools converge in a decentralized space
              "
              buttonText="Upload"
              display="block"
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
                handleSubmit={handlePromptSubmit}
                error={error}
              />
            </div>
          </>
        }
      />
    </>
  );
}

export default PdfSearch;
