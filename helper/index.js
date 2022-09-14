
import ABI from "../components/abi/TOKEN_ABI.json";
import config from "../components/abi/config.json";


import Web3 from "web3";
import axios from "axios";

export async function CMCX_BSC_PRICE() {
    return 0.1;
    const web3 = new Web3(config.BNB.CMCX.RPC_URL);

    var exchangeAddress = "0x86Ad4de1E240Be7892b02D0d2aD0586A38Ff0a8D";

    const token1 = new web3.eth.Contract(ABI, '0xb2343143f814639c9b1f42961C698247171dF34a');
    const result1 = await token1.methods.balanceOf(exchangeAddress).call();
    const token1Decimal = await token1.methods.decimals().call();
    const token1_balance = result1 / 10 ** token1Decimal;

    const token2 = new web3.eth.Contract(ABI, '0x55d398326f99059fF775485246999027B3197955');
    const result2 = await token2.methods.balanceOf(exchangeAddress).call();
    const token2Decimal = await token2.methods.decimals().call();
    const token2_balance = result2 / 10 ** token2Decimal;

    var price = token2_balance / token1_balance;

    return price;
}

export async function CMCX_ETH_PRICE() {
    return 0.1;
    var tokenInfo = await axios({
        method: "GET",
        url: encodeURI(`https://api.coingecko.com/api/v3/coins/ethereum/contract/0x5B685863494C33F344081F75e5430C260c224A32`)
    })

    var price = tokenInfo?.data?.market_data?.current_price?.usd;

    return price;
}
