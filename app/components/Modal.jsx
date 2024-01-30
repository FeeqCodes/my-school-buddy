"use client";
import React from "react";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { motion, AnimatePresence } from "framer-motion";

const Modal = () => {
  const { chain } = useNetwork();
  const { chains, switchNetwork, isLoading, pendingChainId } =
    useSwitchNetwork();
    // console.log(chain) chain i am currently on
    // console.log(chains) provider chainId


    
  const style =
    "rounded-[10px] backdrop-filter backdrop-blur-lg bg-opacity-20  border-gray-200 sticky top-[20px] bg-gray-500 shadow-sm py-4 px-6 z-[99] shadow-inner shadow-red-600  ";

  return (
    <>
      <AnimatePresence>
        {chains.map((x) => (
          <div
            className={` ${
              x.id === chain?.id ? "hidden" : "block"
            } absolute top-[7rem]  z-[99] h-[10rem]`}
            key={x.id}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ ease: "linear" , duration: 1.5 }}

              className={` ${style} hover:bg-gray-600`}
              disabled={!switchNetwork || x.id === chain?.id}
              onClick={() => switchNetwork?.(x.id)}
            >
              Please switch to {x.name}
              {isLoading && pendingChainId === x.id && " (switching)"}
            </motion.button>
          </div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default Modal;
