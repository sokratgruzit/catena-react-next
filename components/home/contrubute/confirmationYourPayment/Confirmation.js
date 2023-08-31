import ConfirmationBox from '../ConfirmationYourPayment/components/ConfirmationBox';
import InformationBox from '../../informationBox/InformationBox';

import styles from './css/Confirmation.module.css';

const Confirmation = () => {
  return (
    <div className={styles.ConfirmationBox}>
      <ConfirmationBox />
      <InformationBox />
    </div>
  );
};

export default Confirmation;
