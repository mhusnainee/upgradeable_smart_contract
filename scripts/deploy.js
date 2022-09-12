const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying contract...");
  const boxv1 = await upgrades.deployProxy(Box, [434], { initializer : "store"});
  await boxv1.deployed();
  console.log("Box deployed to :", boxv1.address);

  console.log("Interacting with Contract");
  const value = await boxv1.retrieve();
  console.log(`Value is ${value}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
