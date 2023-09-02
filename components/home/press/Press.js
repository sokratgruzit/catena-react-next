import { useRouter } from 'next/router';
import { TableElement } from '@catena-network/catena-ui-module';
import Card from '../../UI/card/Card';
import JoinCommunity from '../events/components/joinComunity/JoinCommunity';
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
    <div className={`${styles.mainContainer} pT-180`}>
        <div className={`${styles.mainContainer} container `}>
          <h1 className={`${styles.titleContainer}`}>
            <p className={`${styles.titlePartyOne} ttl`}>Catena</p>
            <p className={`${styles.titlePartyTwo} ttl`}>Press</p>
          </h1>
          <div className={`${styles.bodyContainer} pT-100 pB-50`}>
            <Card dataArr={press} fileAdress={fileAdress} title={title} description={description} slugType='press' />
          </div>
        </div>
      <TableElement
        type='pagination'
        currentPage={currentPage}
        totalCount={totalCount}
        onPageChange={page => handlePageChange(page)}
      />
      <div className={`${styles.sourcesContainer} pT-100`}>
        <div className='pB-50'>
         <h2 className='ttl font-40 container'>Sources</h2>
        </div>
        
        <PressLogo />
      </div>
      <PublicByYears />
      <JoinCommunity />
    </div>
  );
};
export default Press;
