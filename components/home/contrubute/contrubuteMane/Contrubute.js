import Header from './components/Header';
import Bottom from './components/Bottom';
import InformationBox from '../../informationBox/InformationBox';

import styles from './css/Contribute.module.css';
const Contribute = () => {
  return (
    <div className={styles.ContributeBox}>
      <div>
        <Header />
        <Bottom />
      </div>
      <InformationBox />
    </div>
  );
};

export default Contribute;
