import SetAmount from './components/setAmount/SetAmount';
import SelectPayment from './components/selectPayment/SelectPayment';
import Information from './components/information/Information';

import styles from './Contribute.module.css';
const Contribute = () => {
  return (
    <div className={styles.ContributeBox}>
      <div>
        <SelectPayment />
        <SetAmount />
      </div>
      <Information />
    </div>
  );
};

export default Contribute;
