// import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import styles from './Press.module.css';
import Years from './components/filterWithYears/Years';
import PublicByYears from './components/publicByYears/PublicByYears';
import PressLogo from './components/pressLogoContainer/PressLogo';
import JoinCommunity from '../events/components/JoinCommunity';
import { TableElement } from '@catena-network/catena-ui-module';

const Press = ({ press, currentPage, totalCount }) => {
  const [activeYear, setActiveYear] = useState('');
  const [filterData, setfilterData] = useState();
  const activeLang = useSelector(state => state.settings.activeLang);

  const fileAdress = `${process.env.NEXT_PUBLIC_URL}/uploads/press/`;
  const title = 'press.title';
  const description = 'press.description';

  const router = useRouter();

  const handlePageChange = (page) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

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
        <TableElement
          customStyle={{ zIndex: "10000" }}
          type='pagination'
          currentPage={currentPage}
          totalCount={totalCount}
          onPageChange={(page) => handlePageChange(page)}
        />
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
