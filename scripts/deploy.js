const { ethers, upgrades } = require("hardhat");
//const BigNumber = require('bignumber.js');

async function WoortDeploy() {
    const WOORT = await ethers.getContractFactory("WOORT");
    const wrapped = await WOORT.deploy();

    console.log('WOORT deployed at:', wrapped.address);
    console.log('Transaction hash:', wrapped.deployTransaction.hash);
}

WoortDeploy()
    .then
    (function () {
        process.exit(0);
    })