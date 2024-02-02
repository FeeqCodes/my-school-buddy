'use client'

import React from 'react'
// import { usePrepareContractWrite, useContractWrite, useContractRead } from "wagmi";
// import { abi } from "../../../artifacts/contracts/RandomNumber.sol/RandomNumber.json";
import TwoColumnLayout from '../../components/TwoColumnLayout';
import {
  useContractWrite,
  useContractRead,
  usePrepareContractWrite,
  
} from "wagmi";


const abiMethod = [
    {
      "inputs": [],
      "name": "getNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const GameBuddy = () => {

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: [
    {
      "inputs": [],
      "name": "getNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
    functionName: "setNumber",
  
  });


  const { data: hash, isLoading: loading, write } = useContractWrite(config);
 

  // Call the getBalance function of the smart contract
  const { data: readData, isLoading: number } = useContractRead({
    address: contractAddress,
    abi: [
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
    ],
    functionName: "getNumber",
  });

  if (number) return <p>Loading...</p>;

  return (
    <TwoColumnLayout
      leftChildren={
        <div className="h-[100vh]">
          <button
            disabled={number}
            className="bg-black  rounded-md p-4 text-white"
            onClick={() => write()}
          >
            {loading ? "loading" : " Generate Random Number"}
          </button>
          {readData && <p className="font-bold text-white">{readData}</p>}
        </div>
      }
    />
  );
}

export default  GameBuddy