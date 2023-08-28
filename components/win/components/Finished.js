import { Input, Button, HelpText, HelpCard } from '@catena-network/catena-ui-module';

import styles from './Finished.module.css';

const Finished = () => {
  return (
    <>
      <div className={`${styles.blur}`}>
        <div className={styles.mainContent}>
          <h3>Finished!</h3>
          <div className={styles.content}>
            {/* <div className={styles.wallet}>
              <a href='#'>Connect Wallet</a>
            </div> */}
            <Button
              label={'Connect Wallet'}
              size={'btn-lg'}
              type={'btn-primary'}
              // arrow={'arrow-right'}
              element={'button'}
              disabled={false}
              onClick={() => setChng(true)}
              className={styles.btnBlu}
              customStyles={{ marginTop: '30px' }}
            />
          </div>
        </div>
        <p>ttl ttl ttl ttl tt ltt ltlt lttl tlt llt lltltl ltl tlt </p>
      </div>
    </>
  );
};

export default Finished;
