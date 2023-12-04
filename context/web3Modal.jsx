"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "viem/chains";


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "0a882ec7cc413a9547c3f58a16fef7ac";



// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};


const chains = [ polygon ];
const wagmiConfig = defaultWagmiConfig({
   chains, 
   projectId, 
   metadata 
});


// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });


export function Web3Modal({ children }) {

  return (
    <WagmiConfig config={wagmiConfig}>
      {children}  
    </WagmiConfig>
  )
   
}


