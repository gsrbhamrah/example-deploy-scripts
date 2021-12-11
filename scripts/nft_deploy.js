// Example deploy script for NFT contract. Deploys and calls minting function from contract.
const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyNFTCollection')
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    let txn = await nftContract.makeAnNFT()
    await txn.wait()
    console.log("Minted NFT")
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }   catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();