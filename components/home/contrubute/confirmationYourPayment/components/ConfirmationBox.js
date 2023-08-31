import { Input, Button } from '@catena-network/catena-ui-module';
import Link from 'next/link';

import styles from '../css/ConfirmationBox.module.css';

const ConfirmationBox = () => {
  return (
    <div className={`${styles.container} container`}>
      <Link href={`/overview/contribute`}>
        <div className={styles.btn}>
          <img src='/images/Frame.png' />
          <h1>Back</h1>
        </div>
      </Link>
      <h1 className='ttl font-90'>Confirmation Your Payment</h1>
      <div className={styles.ttl}>
        <p>Your Order no. 4a74314464566d7674485261666b31385043324b78413d3d has been placed successfully.</p>
        <p>
          14071.65 USDT to the address below. The token balance will appear in your account only after transaction gets
          10 confirmation and approved by our team.
        </p>
      </div>
      <div className={styles.box}>
        <div className={`${styles.left} container_bordered-child `}>
          <img className={styles.img} src='/images/contribute/qr/qr1.png' />
        </div>
        <div className={styles.right}>
          <h1 className='ttl'>Payment to the following Tether Wallet Address</h1>
          <div className={styles.maneRight}>
            <div className={styles.boxTtl}>
              <p>Transaction Fee:</p>
              <p>2 USDT</p>
            </div>
            <div className={styles.boxTtl}>
              <p>Send Amount:</p>
              <p>14843.84</p>
            </div>
            <div className={`${styles.inp} `}>
              <Input
                className={styles.llll}
                type={'default'}
                icon={false}
                label={''}
                subLabel={''}
                placeholder={'KMeKssrW285WoPZptbHVEPjx5b5g1ALK1q'}
                name='email'
                value={''}
                onChange={''}
                // customStyles={{ width: '500px' }}
              />
            </div>
            <div>
              <h1 className='ttl'>
                You can choose any of following payment method to make your payment. The token balance will appear in
                your account after successful payment.
              </h1>
              <div className={styles.inpOne}>
                <Input
                  className={styles.llll}
                  type={'default'}
                  icon={false}
                  label={'* Insert Your Payment Address'}
                  subLabel={''}
                  placeholder={''}
                  name='email'
                  value={''}
                  onChange={''}
                  // customStyles={{ width: '500px' }}
                />
              </div>
              <div className={`${styles.buttone}`}>
                <div>
                  <Button
                    label={'Cancel Order'}
                    size={'btn-lg'}
                    type={'btn-primary'}
                    element={'button'}
                    onClick={() => setToggle(prevState => !prevState)}
                    className={styles.btnCancel}
                  />
                </div>
                <div>
                  <Button
                    label={'Confirm Payment'}
                    size={'btn-lg'}
                    type={'btn-primary'}
                    element={'button'}
                    onClick={() => setToggle(prevState => !prevState)}
                    className={styles.btnConfirm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.border}></div>
        <div className={styles.bottomBox}>
          <img className={styles.bottomimg} src='/images/contribute/infocircle2.png' />
          <h1>
            Do not make payment through exchange (Kraken, Bitfinex). You can use MyEtherWallet, MetaMask, Mist wallets
            etc.
          </h1>
        </div>
        <h1 className={styles.bottomTtl}>
          In case you send a different amount, number of CMCX token will update accordingly.
        </h1>
      </div>
    </div>
  );
};

export default ConfirmationBox;
