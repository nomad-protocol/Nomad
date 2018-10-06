import { bytecode, abi } from './Nomad.json';
import { web3 } from './web3util.js';

const Ballot = new web3.eth.Contract(abi);
const address = "0x87e0A011d1adc0B1d53B9f16eC4810c9Cc3aCd86";
// TODO: Configure this address

const vote = (supports, quantity, from) => {
  Ballot.options.address = address;
  return Ballot.methods.vote(0, supports, quantity).send({ from })
}

export default vote;
