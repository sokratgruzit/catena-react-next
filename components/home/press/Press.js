// import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import createAxiosInstance from '../../../pages/api/axios';

import styles from './Press.module.css';
import Years from './components/filterWithYears/Years';
import PublicByYears from './components/publicByYears/PublicByYears';
import PressLogo from './components/pressLogoContainer/PressLogo';

const Press = () => {
  const [activeYear, setActiveYear] = useState('');
  const axios = useMemo(() => createAxiosInstance(), []);
  const [allPress, setAllPress] = useState([]);
  const [filterData, setfilterData] = useState();
  const activeLang = useSelector(state => state.settings.activeLang);

  const handleYearClick = year => {
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
        {allPress.map(item => (
          <Card key={item.slug} item={item} />
        ))}
      </div>
      <div className={`${styles.sourcesContainer} `}>
        <div className={styles.sourcesTitle}>
          <h1 className='ttl font-40'>Sources</h1>
        </div>
          <PressLogo/>
      </div>
        <Years handleYearClick={handleYearClick} activeYear={activeYear}/>
        <PublicByYears  filterData={filterData} activeLang={activeLang} />
    </div>
  );
};
export default Press;
