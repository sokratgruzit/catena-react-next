import React from 'react';
import ButtonWallet from './ButtonWallet';
import styles from './ConnectWallet.module.css'

const ConnectWallet = () => {
  return (
    <div className={styles.mainContent}>
        <div>
            <img  className={styles.star}  src={"../images/win/pawawuna.png"} alt="" />
            <img className={styles.starSmal} src={"../images/win/starSmal.png"} alt="" />
            <img className={styles.ConnectWalletBg} src={"../images/win/background/ConnectWalletBg.png"} alt="" />
            <img className={styles.tickets} src={"../images/win/tickets.png"} alt="" />
            <img className={styles.ticket} src={"../images/win/ticket.png"} alt="" />
        </div>
        <div className={styles.text}>
            <p>Connect your wallet</p>
            <p> to check if you've won!</p>
        </div>
        <div>
            <ButtonWallet />
        </div>
    </div>
  )
}

export default ConnectWallet;
