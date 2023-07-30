// import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import styles from './Press.module.css';
import { useState, useMemo, useEffect } from 'react';
import createAxiosInstance from '../../../pages/api/axios';

const Press = () => {
  const [activeYear, setActiveYear] = useState('2021');
  const axios = useMemo(() => createAxiosInstance(), []);
  const [allPress, setAllPress] = useState([]);
  const [filterData, setfilterData] = useState();

  const handleYearClick = (year) => {
    setActiveYear(year);
    const data = allPress.filter(item => item.year === year);
    setfilterData(data);
  };

  useEffect(() => {
    axios.get(`http://localhost:4003/press/get-all-press`)
    .then(res => {
      setAllPress(res?.data);
      console.log(allPress);
    })
    .catch(err => {
      console.log(err?.response);
    });
    handleYearClick(activeYear);
  }, []);

  return (
    <div className={`${styles.mainContainer} container`}>
      <div className={`${styles.titleContainer}`}>
        <p className={styles.titlePartyOne}>Catena</p>
        <p className={styles.titlePartyTwo}>Press</p>
      </div>
      <div className={styles.bodyContainer}>
        <Card dataArr={allPress} />
      </div>
      <div className={`${styles.sourcesContainer} `}>
        <div className={styles.sourcesTitle}>
          <h1 className='ttl font-40'>Sources</h1>
        </div>
        <div className={`${styles.logoContainer} `}>
          <div className={styles.logoLine}>
            <div className={styles.logCon}>
              <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/CBNC.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/bloombergLogo.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/CBNC.png' alt='sources' className={styles.logo} />
            </div>
          </div>
          <div className={`${styles.logoLine}`}>
            <div className={`${styles.logCon}`}>
              <img src='/images/press/Company.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/Frame1.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/CBNC.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/Frame 2.png' alt='sources' className={styles.logo} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infContTitle}>
          <h2 className='ttl font-40'>Publics by years</h2>
        </div>
        <div className={`${styles.yearsStats}`}>
          <div
            className={activeYear === '2021' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2021')}
          >
            2021
          </div>
          <div
            className={activeYear === '2020' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2020')}
          >
            2020
          </div>
          <div
            className={activeYear === '2019' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2019')}
          >
            2019
          </div>
          <div
            className={activeYear === '2018' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2018')}
          >
            2018
          </div>
        </div>

      </div>
      <div className={styles.statisticContainer}>
        {filterData ? filterData.map((item, index) => {
          return (
            <div key={index} className={styles.icCont}>
              <img src={item.imgPart} />
              <p>{item.title}</p>
            </div>
          )
        }) : (
          <div className={styles.erLoadContainer}>Loading</div>
        )}
        < div className={styles.pagCont} >
          <div className={styles.pagination}>pagination</div>
        </div>
      </div>
    </div >
  );
};
export default Press;
