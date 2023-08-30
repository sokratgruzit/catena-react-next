import { Input, Button, HelpText, HelpCard } from '@catena-network/catena-ui-module';

import styles from './Finished.module.css';

const Finished = () => {
  return (
    <>
      <div className={`${styles.blur}`}>
        <img className={styles.img} src='/images/win/background/background.png' />
        <div className={styles.mainContent}>
          <h3 className={styles.ttl}>Finished Competition</h3>
          <div className={styles.content}>
            <Button
              label={'Connect Wallet'}
              size={'btn-lg'}
              type={'btn-primary'}
              element={'button'}
              disabled={false}
              onClick={() => setChng(true)}
              className={styles.btnBlu}
              customStyles={{ marginTop: '30px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Finished;
