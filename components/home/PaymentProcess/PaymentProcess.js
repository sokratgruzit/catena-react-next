import Component from './components/Component';
import InformationBox from '../../../components/home/informationBox/InformationBox';

import styles from './css/PaymentProcess.module.css';
const PaymentProcess = () => {
  return (
    <div className={styles.PaymentProcessBox}>
      <Component />
      <InformationBox />
    </div>
  );
};

export default PaymentProcess;
