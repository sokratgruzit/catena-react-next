import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectV2Connector } from "../helper/walletconnectV2Connector";

export const injected = new InjectedConnector({
  supportedChainIds: [97],
});

export const walletConnect = new WalletConnectV2Connector({
  projectId: "6b63a429a76c4699c8e90bd36a1c93b0",
  showQrModal: true,
  chains: [97],
  rpcMap: {
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
});
