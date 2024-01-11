"use client";

import { configureChains , chain} from "wagmi";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, sepolia, polygon, polygonMumbai, areon } from "viem/chains";
import { infuraProvider } from "@wagmi/core/providers/infura";









const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [infuraProvider({ apiKey: "dd12e526120e419d82e3e54baec3a0c3" })]
);

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "0a882ec7cc413a9547c3f58a16fef7ac";



const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 2. Create wagmiConfig
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  publicClient,
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


