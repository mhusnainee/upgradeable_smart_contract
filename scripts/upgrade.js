const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

async function main() {
  const BoxUpgraded = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading contract to BoxV2...");
                                                /*Contract address to upgrade*/
  const boxv2 = await upgrades.upgradeProxy("0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6", BoxUpgraded);
  console.log("Box Upgraded");

  console.log("Interacting with upgraded Contract");
  await boxv2.increment();
  const value = await boxv2.retrieve();
  console.log(`Value is ${value}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
