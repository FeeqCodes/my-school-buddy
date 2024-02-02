import React, { createContext, useContext } from "react";

// import { ethers } from "ethers";
import { ethers } from "ethers";





const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const ABI = [
  {
    inputs: [],
    name: "getNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];


export function getContract() {

  const Contract = new ethers.Contract(contractAddress, ABI);

  return Contract
};