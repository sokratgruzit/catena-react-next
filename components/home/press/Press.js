// import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Press.module.css';
import Years from './components/filterWithYears/Years';
import PublicByYears from './components/publicByYears/PublicByYears';
import PressLogo from './components/pressLogoContainer/PressLogo';

const Press = ({ press }) => {
  const [activeYear, setActiveYear] = useState('');
  const [filterData, setfilterData] = useState();
  const activeLang = useSelector(state => state.settings.activeLang);

  const fileAdress = `${process.env.NEXT_PUBLIC_URL}/uploads/press/`;
  const title = "press.title";
  const description = "press.description";

  const handleYearClick = (year) => {
    setActiveYear(year);
    const data = press.filter(item => {
      const itemYear = item.createdAt.substring(0, 4);
      return itemYear === year;
    });
    setfilterData(data);
  };

  useEffect(() => {
    handleYearClick('2023');
  }, [press]);

  return (
    <div className={`${styles.mainContainer} container`}>
      <div className={`${styles.titleContainer}`}>
        <p className={styles.titlePartyOne}>Catena</p>
        <p className={styles.titlePartyTwo}>Press</p>
      </div>
      <div className={styles.bodyContainer}>
        <Card dataArr={press} fileAdress={fileAdress} title={title} description={description} />
      </div>
      <div className={`${styles.sourcesContainer} `}>
        <div className={styles.sourcesTitle}>
          <h1 className='ttl font-40'>Sources</h1>
        </div>
        <PressLogo />
      </div>
      <Years handleYearClick={handleYearClick} activeYear={activeYear} />
      <PublicByYears filterData={filterData} activeLang={activeLang} />
    </div>
  );
};
export default Press;
