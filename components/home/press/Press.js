// import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Press.module.css';
import Years from './components/filterWithYears/Years';
import PublicByYears from './components/publicByYears/PublicByYears';
import PressLogo from './components/pressLogoContainer/PressLogo';
import JoinCommunity from '../events/components/JoinCommunity';
import { TableElement } from '@catena-network/catena-ui-module';
import axios from 'axios';

const Press = ({ press }) => {
  const [activeYear, setActiveYear] = useState('');
  const [filterData, setfilterData] = useState();
  const activeLang = useSelector(state => state.settings.activeLang);

  const fileAdress = `${process.env.NEXT_PUBLIC_URL}/uploads/press/`;
  const title = 'press.title';
  const description = 'press.description';

  const handleYearClick = year => {
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

  // useEffect(() => {
  //   axios.get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press`, { page: currentPage, limit: 3 })
  //     .then(res => {
  //       setfilterData(res.data);
  //     }
  //     );
  // }, [currentPage]);
  // console.log(filterData);

  return (
    <div>
      <div className={`${styles.mainContainer} container`}>
        <div className={`${styles.titleContainer}`}>
          <p className={`${styles.titlePartyOne} ttl`}>Catena</p>
          <p className={`${styles.titlePartyTwo} ttl`}>Press</p>
        </div>
        <div className={styles.bodyContainer}>
          <Card dataArr={press} fileAdress={fileAdress} title={title} description={description} slugType='press' />
        </div>
      </div>
      <div>
        <div className={`${styles.sourcesContainer} `}>
          <div className={styles.sourcesTitle}>
            <h1 className='ttl font-40 container'>Sources</h1>
          </div>
          <PressLogo />
        </div>
        <div className={`${styles.years} container`}>
          <Years handleYearClick={handleYearClick} activeYear={activeYear} />
        </div>
        <PublicByYears filterData={filterData} activeLang={activeLang} />
        <div className={styles.joinCommunity}>
          <JoinCommunity />
        </div>
      </div>
    </div>
  );
};
export default Press;
