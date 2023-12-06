require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const MUMBAI_PRIVATE_KEY =
  "b157c7ec2e2f76d64d9f022bee976aa0af442c20d424486ef8a4db0335d7f802";
const INFURA_API_KEY = process.env.INFURA_API_KEY;


module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/dd12e526120e419d82e3e54baec3a0c3`,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
};