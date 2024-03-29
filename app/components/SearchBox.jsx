"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState }
from "react";
import LoadingDots from "./LoadingDots"
import { motion, AnimatePresence } from "framer-motion";

const SearchBox = ({
  messages,
  prompt,
  handlePromptChange,
  handlePromptSubmit,
  error,
  isLoading,
  placeHolderText,
}) => {
  const messagesContainerRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handlePromptSubmit();
    }
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      const element = messagesContainerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  const maxMsgToScroll = 3;

  // console.log(messages.length);

  return (
    <>
      <form
        style={{ backgroundColor: "rgba(255, 255, 255, 0.83)" }}
        className="font-poppins text-[16px] w-[35vw] max-w-[35vw] h-[70vh]  flex flex-col gap-1  items-end rounded-2xl  shadow-inner shadow-gray-900 text-black  overflow-clip py-1"
      >
        <div
          ref={messagesContainerRef}
          className="relative h-full w-full overflow-auto "
        >
          <div
            className={`p-[1rem]  h-full w-full flex gap-5 flex-col pb-10   ${
              messages.length <= maxMsgToScroll && "justify-end h-auto"
            }`}
          >
            {messages &&
              messages.map((message, index) => {
                return message.type === "bot" ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10 }}
                      transition={{ ease: "easeInOut" }}
                      key={index}
                      className=" flex gap-3"
                    >
                      <Image
                        alt=""
                        width={100}
                        height={100}
                        src="/assets/brain.png"
                        className="w-[40px] h-[40px] rounded-full"
                      />
                      <div className="bg-white p-3  rounded-b-xl rounded-tr-xl  w-[70%] h-full">
                        <p className="text-sm font-medium text-violet-500 mb-2">
                          AI Buddy
                        </p>
                        <p>{message.text}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      initial={{ y: 10 , opacity: 0}}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10 }}
                      transition={{ ease: "easeInOut" }}
                      className="w-full flex justify-end "
                      key={index}
                    >
                      <div className="bg-white p-3 rounded-b-xl rounded-tl-xl w-[70%]">
                        <p className="text-sm font-medium text-violet-500 mb-2">
                          You
                        </p>
                        <p>{message.text}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              })}

            {/* Loading State */}
            {isLoading && (
              <div className=" flex gap-3">
                <Image
                  alt=""
                  width={100}
                  height={100}
                  src="/assets/brain.png"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="bg-white p-3  rounded-b-xl rounded-tr-xl  w-[70%] h-full">
                  <p className="text-sm font-medium text-violet-500 mb-2">
                    AI Buddy
                  </p>
                  <LoadingDots />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Prompt search */}
        <div className="sticky bottom-0 w-full  flex justify-end items-end ">
          <div className="w-full p-[1rem]">
            <input
              value={prompt}
              onChange={handlePromptChange}
              onKeyDown={handleKeyDown}
              className="py-6 pl-6 pr-16 w-full h-8 rounded-[20px] border-2 border-[#CCC1C1] shadow-md shadow-[#333] text-black outline-none"
              placeholder={placeHolderText || "Send A Message"}
            />
          </div>
          <div className=" h-full  absolute flex items-center mr-[3vw]">
            <Image
              onClick={handlePromptSubmit}
              width={20}
              height={10}
              alt=""
              src="/assets/send vector.png"
              className=" hover:cursor-pointer"
            ></Image>
          </div>
        </div>
      </form>

      {/* Display Error gotten */}
      <p className={`mt-4 text-red-500 ${error ? "block" : "hidden"}`}> {}</p>
    </>
  );
};

// {
//   messages &&
//     messages.map((message, index) => {
//       {
//         /* <MessageItem
//               key={index}
//               message={message}

//               /> */
//       }
//       <div>
//         <div>
//           <div>
//             {message.type === "user" ? (
//               <Image alt="" src="/assets/green-square.png" />
//             ) : (
//               <Image alt="" src="/assets/bot" />
//             )}
//           </div>

//           <p>{message.text}</p>
//         </div>
//       </div>;
//     });
// }

export default SearchBox;
