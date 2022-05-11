require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const projectID = process.env.ALCHEMY_PRIVATE_KEY;
const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${projectID}`,
      accounts: [privateKey],
    },
  },
};
