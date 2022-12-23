import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [56, 2122], // Pass multiple chain id like - [1,3,4,56,80001]
});

const RPC_URL = "https://bsc-dataseed.binance.org"; // rpc url of following chain
export const walletConnect = new WalletConnectConnector({
  rpc: { 56: RPC_URL }, // pass multiple rpc for chain like {chainid1 :chainRPCUrl_1, chainid2:chainRpcUrl2}
  drcode: true,
  chainId: 56,
});
