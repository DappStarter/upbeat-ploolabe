require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift return random unknown hockey arch off gas'; 
let testAccounts = [
"0xdef95a87de3424e0c43343c4ffea53173693f84d212cdfbff7f3b09493afc878",
"0x6e752f3fbb58f61c726e7fbe692d098ecb873a38ab596950fdbc850e061b5011",
"0x7d58198ce147cd40d987cbd8ed4c44b7c871dec59aa1c99120d5c117f0358115",
"0x3e6b31fa39b882202af312bb76cdc52ce28c0ef31fccf0c4ca3b602278cc6aed",
"0x11fc3f085aa1aa4c0e26cc83877868dd091d0c186f4fb1fe902d1b03f31e179a",
"0xd9c550f6019383661106ff497a346db9d385e5d9e2196ff13fed5384b6bc4f10",
"0xe27c4d1a0e56804c0435b4aa0ccf8e8b7b7769ab5e2f0b4cb24cb70d70d66d5b",
"0x52bdd619b622877e08ec9ed2d0acbd05b060448647e25562a1d42c1f8be93264",
"0x6b8e8419e6680dcff33a608edeb63d875d4daf2abc303b7245eef1c15a8df47a",
"0x1bb42cf9d61ef33c6551fe60f262c0dff3952cdda130d9e08dc3ea921e7148da"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
