import { Web3 } from "web3";
const web3 = new Web3("http://127.0.0.1:7545");

const getAccounts = async () => {
  let accounts = await web3.eth.getAccounts();
  console.log(accounts);
};

console.log(
  await web3.eth.getBalance("0x917e892F11dc8C4C74D030Fa3e40276736DD999c")
);

getAccounts();

const stendTransaction = async () => {
  let accounts = await web3.eth.getAccounts();
  let balance0 = await web3.eth.getBalance(accounts[0]);
  let balance1 = await web3.eth.getBalance(accounts[1]);

  await web3.eth.sendTransaction({
    from: accounts[0],
    to: accounts[1],
    // value: 1000000000000000000,
    value: web3.utils.toWei("1", "ether"),
  });
};

stendTransaction();
