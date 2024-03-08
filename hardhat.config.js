require("@nomiclabs/hardhat-waffle")
//require("@nomiclabs/hardhat-etherscan")
//require('@openzeppelin/hardhat-upgrades')
require("dotenv").config()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.4.18',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    oort: {
      url: process.env.CCNBETA_URL,
      allowUnlimitedContractSize: true,
      accounts: [
        process.env.CCNBETA_PRIVATE_KEY,
      ]
    },
  },
};
