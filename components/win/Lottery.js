import React from 'react'

import ConnectWallet from './components/ConnectWallet'
import FinishedRounds from './components/FinishedRounds'
import HowToPay from './components/HowToPay'
import LotteryPrizes from './components/LotteryPrizes'
import PrizeFunds from './components/PrizeFunds'
import Tickets from './components/Tickets'
import WinningCriteria from './components/WinningCriteria'

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
  )
}

export default Lottery
