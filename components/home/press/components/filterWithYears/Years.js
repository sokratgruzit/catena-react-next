import styles from '../../Press.module.css';

const Years = ({ handleYearClick, activeYear }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infContTitle}>
        <h2 className='ttl font-40'>Publics by years</h2>
      </div>
      <div className={`${styles.yearsStats}`}>
        <div
          className={activeYear === '2023' ? styles.activeCont : styles.pasCont}
          onClick={() => handleYearClick('2023')}
        >
          2023
        </div>
        <div
          className={activeYear === '2020' ? styles.activeCont : styles.pasCont}
          onClick={() => handleYearClick('2020')}
        >
          2022
        </div>
        <div
          className={activeYear === '2019' ? styles.activeCont : styles.pasCont}
          onClick={() => handleYearClick('2019')}
        >
          2021
        </div>
        <div
          className={activeYear === '2018' ? styles.activeCont : styles.pasCont}
          onClick={() => handleYearClick('2018')}
        >
          2020
        </div>
      </div>
    </div>
  );
};

export default Years;
