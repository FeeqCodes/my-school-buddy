// "use client";

// import { configureChains , chain} from "wagmi";
// import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

// import { WagmiConfig } from "wagmi";
// import {
//   arbitrum,
//   mainnet,
//   sepolia,
//   polygon,
//   polygonMumbai,
  
// } from "viem/chains";
// import { defineChain } from "viem";
// import { Chain } from "@wagmi/core";
// import { infuraProvider } from "@wagmi/core/providers/infura";
// import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";

// import { publicProvider } from "@wagmi/core/providers/public";






// const { chains, publicClient } = configureChains(
//   [sepolia],
//   [infuraProvider({ apiKey: "dd12e526120e419d82e3e54baec3a0c3" })],
//   // jsonRpcProvider({
//   //   rpc: () => ({
//   //     http: `https://testnet-rpc3.areon.network`,
//   //   }),
//   // })
// );

// // 1. Get projectId at https://cloud.walletconnect.com
// const projectId = "0a882ec7cc413a9547c3f58a16fef7ac";



// const metadata = {
//   name: "Web3Modal",
//   description: "Web3Modal Example",
//   url: "https://web3modal.com",
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };

// // 2. Create wagmiConfig
// const wagmiConfig = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
//   publicClient,
// });



// // 3. Create modal
// createWeb3Modal({ wagmiConfig, projectId, chains });


// export function Web3Modal({ children }) {

//   return (
//     <WagmiConfig config={wagmiConfig}>
//       {children}  
//     </WagmiConfig>
//   )
   
// }






/**
 * Implement Aron Network with connectkit
 */
"use client";

import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";
import { areon } from "../utils/customChains";



const WALLETCONNECT_PROJECT_ID = process.env.PROJECTID;
const ALCHEMY_ID = process.env.ALCHEMY_ID;


const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: ALCHEMY_ID, // or infuraId
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "My-school-buddy",
    chains: [areon],
  })
);


export function Web3Modal({ children }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
}
