
const hre = require("hardhat");



// Deploy SMart contract 
const main = async ()=> {
  const randomNumber = await hre.ethers.deployContract('RandomNumber');

  await randomNumber.waitForDeployment();

  console.log(`deployed to ${randomNumber.target}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});





// async function main() {
  
//   const aiBuddy = await hre.ethers.deployContract("AiBuddy");

//   await aiBuddy.waitForDeployment();

//   console.log(`deployed to ${aiBuddy.target}`);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

