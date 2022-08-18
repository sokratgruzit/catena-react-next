import Image from 'next/image';
import ButtonWallet from './ButtonWallet';
import styles from './ConnectWallet.module.css'

const ConnectWallet = () => {
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
        <div>
            <ButtonWallet />
        </div>
    </div>
  )
}

export default ConnectWallet;
