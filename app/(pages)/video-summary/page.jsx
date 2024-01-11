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
import { useAccount } from "wagmi";
import Sidebar from "../../components/SIdebar";









function PdfSearch() {
  // check is wallet is connected
  const router = useRouter();
  const { isConnected } = useAccount();

  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);

  const [messages, setMessages] = useState([
    {
      text: "Hi! Upload a pdf and ask me any question from it ",
      type: "bot",
    },
  ]);

  const [firstMsg, setFirstMsg] = useState(true);

  // selecting file
  const [selectedFile, setSelectedFile] = useState();

  /**
   * whenever the promptBox value changes
   */
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  /**
   * when we select a file
   */
  const fileInputRef = useRef(null);

  // The input
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setSelectedFile(file);

    // handleBackendLogic()
  };

  // HAndle The Logic
  const handleBackendLogic = async () => {
    toast("Uploading File", {
      position: toast.POSITION.TOP_LEFT,
      className: "foo-bar",
    });

    try {
      const data = new FormData();
      data.set("file", selectedFile);

      const response = await fetch("api/pdf-upload", {
        method: "POST",
        body: data,
      });

      fileInputRef.current && (fileInputRef.current.value = "");

      console.log(selectedFile);

      // Get response from the backend
      const uploadRes = await response.json();
      console.log(uploadRes);

      setError("");

      if (uploadRes) {
        toast.success("Uploaded Successfully!", {
          position: toast.POSITION.TOP_LEFT,
          className: "foo-bar",
        });

        setMessages([
          {
            text: "Now you can ask your Questions ",
            type: "bot",
          },
        ]);
      }
    } catch (e) {
      console.log(e);
      if (e) {
        toast.error("Uploading Failed! Please upload another Pdf", {
          position: toast.POSITION.TOP_LEFT,
          className: "foo-bar",
        });
      }
    }

    setSelectedFile(null);
    console.log(selectedFile);
  };

  // Get the latest data
  useEffect(() => {
    // Call handleBackendLogic only if selectedFile is defined
    if (selectedFile) {
      handleBackendLogic();
    }
  }, [selectedFile]);

  // Trigger a click on the hidden file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
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
      const response = await fetch("api/pdf-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      // Resetting the prompt  after response has been received
      setPrompt("");

      // Getting the response from thr back end
      const searchRes = await response.json();

      // Update the messages array with the received response

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: searchRes.output.text,
          type: "bot",
        },
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
    if (!isConnected) {
      router.push("./");
    }
  }, [isConnected]);

  

  return  (
    <>
      <ToastContainer />

      <TwoColumnLayout
        alignment="alignment"
        leftChildren={
          <>
            <Sidebar />
            <Hero
              title="PDF SEARCH"
              paragraph="Embark on a transformative academic journey with our decentralized AI platform, crafted exclusively for students. Revolutionize your learning experience as cutting-edge AI tools converge in a decentralized space "
              buttonText="Upload"
              display="block"
              handleFileChange={handleFileChange}
              handleButtonClick={handleButtonClick}
              fileInputRef={fileInputRef}
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
                selectedFile={selectedFile}
                // isLoading={isLoading}
              />
            </div>
          </>
        }
      />
    </>
  );
}

export default PdfSearch;


