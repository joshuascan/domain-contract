const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  const domainContract = await domainContractFactory.deploy("dum");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  let txn = await domainContract.register("jscan", {
    value: hre.ethers.utils.parseEther("0.01"),
  });
  await txn.wait();
  console.log("Minted domain jscan.dum");

  txn = await domainContract.setRecord("jscan", "First official dum holder");
  await txn.wait();
  console.log("Set record for jscan.dum");

  const address = await domainContract.getAddress("jscan");
  console.log("Owner of domain jscan:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
