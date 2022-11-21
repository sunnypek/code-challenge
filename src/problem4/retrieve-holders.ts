import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org")

const address = {
    first: "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    second: "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    third: "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
}

const abi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",
  
    // Get the account balance
    "function balanceOf(address) view returns (uint)",
  
    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",
  
    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
  ];

const contract: ethers.Contract = new ethers.Contract("0xc0ecb8499d8da2771abcbf4091db7f65158f1468", abi, provider);

Object.values(address).forEach((address) => {
    Promise.resolve(contract.balanceOf(address)).then(
        bal => console.log(`${address}: ${bal}`)
    )
})
