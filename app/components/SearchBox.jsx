'use client'

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";










const SearchBox = ({messages, loading}) => {
  // const messagesContainerRef = useRef();
  

  // useEffect(() => {
  //   if (messagesContainerRef.current) {
  //     messagesContainerRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [messages]);


  return (
    <>
    
      <form
        // ref={messagesContainerRef}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.83)" }}
        className="font-poppins text-[16px]  w-[35vw] h-[70vh]  flex flex-col gap-5  items-end rounded-2xl  shadow-inner shadow-gray-900 text-black  overflow-clip py-1"
      >
        <div className="relative h-full w-full overflow-y-scroll">
          <div
            className={`p-[1rem] h-full  w-full flex gap-5 flex-col pb-24 justify-end `}
          >
            {messages &&
              messages.map((message, index) => {
                {
                  /* const isLastMessage = index === history.length - 1; */
                }

                return message.type === "bot" ? (
                  <div key={index} className=" flex gap-3">
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
                  </div>
                ) : (
                  <div className="w-full flex justify-end ">
                    <div
                      className="bg-white p-3 rounded-b-xl rounded-tl-xl w-[70%]"
                      key={index}
                    >
                      <p className="text-sm font-medium text-violet-500 mb-2">
                        You
                      </p>
                      <p>{message.text}</p>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Loading */}
          {/* { loading && 
          <div ref={messagesContainerRef} className="flex gap-2">
            <Image
            alt=""
              src="images/assistant-avatar.png"
              className="h-12 w-12 rounded-full"
            />
            <div className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tr-xl text-black p-6 shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]">
              <p className="text-sm font-medium text-violet-500 mb-4">
                AI assistant
              </p>
             <loading />
            </div>
          </div>    
        } */}

          {/* Prompt search */}
          <div className="p-[1rem] sticky bottom-0 w-full h-auto flex justify-items-end items-center ">
            <input
              className="p-6 w-full h-8 rounded-[20px] border-2 border-[#CCC1C1] shadow-md shadow-black text-black "
              placeholder="Send A Message"
            />
            <Image
              width={20}
              height={10}
              alt=""
              src="/assets/send vector.png"
              className="absolute top-[33%] right-8"
            ></Image>
          </div>
        </div>
      </form>
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
