require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million push grid merry fog swim'; 
let testAccounts = [
"0x91304f34ee0959ab9eae3ab4807d9244615cbb31324fcc62db197f0076bac7b2",
"0xe6cfc032ae9a9f08f26326887cba998dc84e992da1c63da3da4cc22ea84045b4",
"0x51360ca6c534dc3c4988e54ddd36082bf4686d5b7fc56126b7e94cd2d4f88255",
"0xda8aeec7556e5a79e8d0dc1310035d2b3e1aa8bc9eff8e2360b426b1bd95c38d",
"0x5a30f95e79ed2ae662de25e7d4cbd1db72f55defbd3035566e0277dbc312d135",
"0xa53a4b6e9d9564e7cdad6acc4f30fa11397103c8ebd880d03a905ee44b70e246",
"0xf1701161181fcef2a1e0405290305c85e61dc1f9b4bbf8e450e2a7aad4e78a93",
"0xd490aef129187c7e574da7de914df339d4c049767ff574fb1ccf71e508820c11",
"0x7c69ec3b52053109ae8dbc43b9155b22a85caf157b18842e4defd9c5872a9e03",
"0x4ba6d7fe3cbdd5ee339d5a19f1a62e672153379f9494dd840e58f7087e06d861"
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
