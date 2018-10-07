import {
  ContractWrappers,
  Web3ProviderEngine,
  RPCSubprovider,
} from '0x.js';
import { SignerSubprovider } from '@0xproject/subproviders';

import {web3} from './web3util.js';
import BigNumber from 'bignumber.js';

const weiToEth = Math.pow(10, 18);
const KOVAN_NETWORK_ID = 42;
const KOVAN_RPC = 'https://kovan.infura.io';
const WETH9 = "0xd0a1e359811322d97991e03f863a0c30c2cf029c";

const providerEngine = new Web3ProviderEngine({ pollingInterval: 10000 });
// All signing based requests are handled by the SignerSubprovider
providerEngine.addProvider(new SignerSubprovider(web3.currentProvider));
// All other requests will fall through to the next subprovider, such as data requests
providerEngine.addProvider(new RPCSubprovider(KOVAN_RPC));
providerEngine.start();

const wrappers = new ContractWrappers(providerEngine, {
  networkId: KOVAN_NETWORK_ID,
	erc20ProxyContractAddress: "0x5bc0de240e1c1b211538ca077a82bb39f4179087",
	erc721ProxyContractAddress: "0x6b17ec0b94810e58eac961e501dba27ff35da0fb",
	exchangeContractAddress: "0xb65619b82c4d385de0c5b4005452c2fdee0f86d1",
});
const etherTokenWrapper = wrappers.etherToken;
const erc20TokenWrapper = wrappers.erc20Token;

async function getWethBalance(address) {
  return await erc20TokenWrapper.getBalanceAsync(WETH9, address);
}

async function wrap(address, weth) {
  return await etherTokenWrapper.depositAsync(WETH9, new BigNumber(weth * weiToEth), address);
}

export { wrap, getWethBalance };
