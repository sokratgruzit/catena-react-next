import Image from 'next/image';
import React from 'react';

import Button from '../../UI/button/Button';

import styles from './ConnectWallet.module.css';

const ConnectWallet = () => {
  return (
    <div className={styles.mainContent}>
      <div>
        <div className={styles.star}>
          <Image layout='fill' src={'/images/win/pawawuna.png'} alt='' objectFit={'contain'} />
        </div>
        <div className={styles.starSmal}>
          <Image layout='fill' src={'/images/win/starSmal.png'} alt='' objectFit={'contain'} />
        </div>
        {/* <div className={styles.ConnectWalletBg}>
          <Image
            layout='fill'
            src={'/images/win/background/ConnectWalletBg.png'}
            alt=''
            objectFit={'contain'}
          />
        </div> */}
        <picture>
          <img className={styles.ConnectWalletBg} src={'../images/win/background/ConnectWalletBg.png'} alt='' />
        </picture>
        <div className={styles.tickets}>
          <Image layout='fill' src={'/images/win/tickets.png'} alt='' objectFit={'contain'} />
        </div>
        <div className={styles.ticket}>
          <Image layout='fill' src={'/images/win/ticket.png'} alt='' objectFit={'contain'} />
        </div>
      </div>
      <div className={styles.text}>
        <p>Connect your wallet</p>
        <p> to check if you&apos;ve won!</p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          title={'Connect Wallet'}
          type={'blue'}
          customStyles={{
            width: '100%',
            padding: '9px 28px',
            fontSize: '16px',
            lineHeight: '22px',
            marginTop: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default ConnectWallet;
