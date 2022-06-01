 //const HDWalletProvider = require('truffle-hdwallet-provider');
 const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
 const mnemonic = "...secret...";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: function() { 
      return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/cb1b980e93cf42569561540e481d13a4");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  },
  }
};