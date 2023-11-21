
'use client'


import Hero from "../../components/Hero"
import SearchBox from "../../components/SearchBox";
import Sidebar from "../../components/Sidebar";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import React, { useState } from "react";

import Image from "next/image";





const ChatBuddy = () => {
  // const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi there! What will you like to search for today",
      type: "bot",
    },
    
   
    
  ]);

  // setMessages()

// console.log(messages.text)

  return (
    <>
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
            <div className="relative">
              <Image
                width={400}
                height={0}
                alt=""
                src="/assets/pngegg 2.svg"
                className="absolute top-0 blur"
              />

              <SearchBox messages={messages} />
            </div>
          </>
        }
      />
      <div></div>
    </>
  );
};

export default ChatBuddy;
