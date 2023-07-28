// import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import createAxiosInstance from '../../../pages/api/axios';

import styles from './Press.module.css';
import Years from './components/filterWithYears/Years';

const Press = () => {
  const [activeYear, setActiveYear] = useState('');
  const axios = useMemo(() => createAxiosInstance(), []);
  const [allPress, setAllPress] = useState([]);
  const [filterData, setfilterData] = useState();
  const activeLang = useSelector(state => state.settings.activeLang);

  const handleYearClick = (year) => {
    setActiveYear(year);
    const data = allPress.filter(item => {
      const itemYear = item.createdAt.substring(0, 4);
      console.log(itemYear);
      return itemYear === year;
    });
    setfilterData(data);
  };
  
  useEffect(() => {
    axios.get(`http://localhost:4003/press/get-all-press`)
    .then(res => {
      setAllPress(res?.data);
      // console.log(allPress, "esaaa");
    })
    .catch(err => {
      console.log(err?.response);
    });
  }, []);

  useEffect(() => {
      handleYearClick("2023");
  }, [allPress]);

  // console.log(filterData, "hi");

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
        <Years handleYearClick={handleYearClick} activeYear={activeYear}/>
      <div className={styles.statisticContainer}>
        {filterData ? filterData.map((item, index) => {
          return (
            <div key={index} className={styles.icCont}>
              <img src={`http://localhost:4003/uploads/press/${item?.logo_image}`} className={styles.icon}/>
              <p>{item.title[activeLang]["press.title"]}</p>
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
