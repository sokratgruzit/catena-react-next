import { useRouter } from 'next/router';
import { TableElement } from '@catena-network/catena-ui-module';
import Card from '../../UI/card/Card';
import JoinCommunity from '../events/components/JoinCommunity';
import PublicByYears from './components/publicByYears/PublicByYears';
import PressLogo from './components/pressLogoContainer/PressLogo';

import styles from './Press.module.css';

const Press = ({ press, currentPage, totalCount }) => {
  const fileAdress = `${process.env.NEXT_PUBLIC_URL}/uploads/press/`;
  const title = 'press.title';
  const description = 'press.description';

  const router = useRouter();

  const handlePageChange = page => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  return (
    <div className={`${styles.mainContainer} container pT-180`}>
      <div className={`${styles.titleContainer}`}>
        <p className={`${styles.titlePartyOne} ttl`}>Catena</p>
        <p className={`${styles.titlePartyTwo} ttl`}>Press</p>
      </div>
      <div className={styles.bodyContainer}>
        <Card dataArr={press} fileAdress={fileAdress} title={title} description={description} slugType='press' />
      </div>
      <TableElement
        type='pagination'
        currentPage={currentPage}
        totalCount={totalCount}
        onPageChange={page => handlePageChange(page)}
      />
      <div className={`${styles.sourcesContainer} `}>
        <h1 className='ttl font-40 container'>Sources</h1>
        <PressLogo />
      </div>
      <PublicByYears />
      <JoinCommunity />
    </div>
  );
};
export default Press;
