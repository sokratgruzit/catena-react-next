import { useState } from "react";
import useConnect from '../../../hooks/use-connect';
import Button from '../../UI/button/Button';
import Image from 'next/image';
import styles from './ConnectWallet.module.css'

const ConnectWallet = () => {
  const { handleWalletModal } = useConnect();
  const [connectBtnColor, setConnectBtnColor] = useState('blue');
  
  return (
    <div className={styles.mainContent}>
      <div>
          <div className={styles.star}>
            <Image objectFit={"contain"} layout='fill' src={"/images/win/pawawuna.png"} alt="star" />
          </div>
          <div className={styles.starSmal}>
            <Image objectFit={"contain"} layout='fill' src={"/images/win/starSmal.png"} alt="star" />
          </div>  
          <div className={styles.ConnectWalletBg}>
            <Image objectFit={"cover"} layout='fill' src={"/images/win/background/ConnectWalletBg.png"} alt="ConnectWalletBg" />
          </div> 
          <div className={styles.tickets}>
            <Image objectFit={"contain"} layout='fill' src={"/images/win/tickets.png"} alt="ticket" />
          </div>
          <div className={styles.ticket}>
            <Image objectFit={"contain"} layout='fill' src={"/images/win/ticket.png"} alt="ticket" />
          </div>
      </div>
      <div className={styles.text}>
          <p>Connect your wallet</p>
          <p> to check if you{`${"'"}`}ve won!</p>
      </div>
      <div className={styles.connectWallet}>   
        <Button
            title={'Connect Wallet'}
            type={`${connectBtnColor}`}
            onClick={() => {
            handleWalletModal(true);
            }}
            customStyles={{
                padding: '10px 20px',
                border: 'none',
            }}
        />
      </div>
    </div>
  )
}

export default ConnectWallet;
