import React from "react";
import Marquee from "../UI/marquee/Marquee";
import Tickets from "./components/Tickets";
import ConnectWallet from "./components/ConnectWallet";
import FinishedRounds from "./components/FinishedRounds";
import HowToPay from "./components/HowToPay";
import WinningCriteria from "./components/WinningCriteria";
import PrizeFunds from "./components/PrizeFunds";
import LotteryPrizes from "./components/LotteryPrizes";

const Lottery = () => {

  return (
    <>
      <LotteryPrizes />
      {/* <Marquee label="lottery" direction={"forward"} />
      <Marquee label="lottery" direction={"reverce"} /> */}
      <Tickets /> 
      <ConnectWallet />
      <FinishedRounds />
      <HowToPay />
      <WinningCriteria />
      <PrizeFunds />
    </>
);
};

export default Lottery;
