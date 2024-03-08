const { ethers, upgrades } = require("hardhat");
//const BigNumber = require('bignumber.js');

async function FactoryDeploy() {
    const WOORT = await ethers.getContractFactory("WOORT");
    const wrapped = await WOORT.deploy();

    console.log('WOORT deployed at:', wrapped.address);
    console.log('Transaction hash:', wrapped.deployTransaction.hash);
}

FactoryDeploy()
    .then
    (function () {
        process.exit(0);
    })