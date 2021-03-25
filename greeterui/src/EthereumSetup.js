import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let greeterABI = [{"constant":false,"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xfaf27bca"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xcfae3217"}];
let greeterAddress = '0x2eb61eBe81E938B5a3A24a3f713C2190f592A662';
const greeterContract = new web3.eth.Contract(greeterABI,greeterAddress);
export {greeterContract};
