import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { VectorSvg } from '../../../svg';
import ListItemRow from '../../../UI/listItem/ListItemRow';

import styles from './VotingNowTable.module.css';

const VOTING_COUNT_STEP = 3;

const VotingNowTable = ({ votingData, activeTab, activeTimeframe }) => {
  const router = useRouter();
  const [showItemsCount, setShowItemsCount] = useState(5);

  const [filteredData, setFilteredData] = useState(votingData);

  useEffect(() => {
    if (activeTab === 'All') {
      setFilteredData(
        votingData.filter(
          item => item.data[2].activeStatus === activeTimeframe,
        ),
      );
    } else {
      setFilteredData(
        votingData.filter(
          item =>
            item.data[2].location === activeTab &&
            item.data[2].activeStatus === activeTimeframe,
        ),
      );
    }
  }, [activeTab, activeTimeframe, showItemsCount, votingData]);

  const showMoreProposalHandler = () => {
    setShowItemsCount(prevState => prevState + VOTING_COUNT_STEP);
  };

  return (
    <div>
      {filteredData.length >= 6 && (
        <div className={styles.galaxy}>
          <Image
            layout='fill'
            objectFit='contain'
            src={'/images/voting/galaxy.png'}
            quality={100}
            alt=''
          />
        </div>
      )}
      {filteredData.length >= 7 && (
        <div className={styles.smoke}>
          <Image
            layout='fill'
            objectFit='contain'
            src={'/images/voting/smoke.png'}
            quality={100}
            alt=''
          />
        </div>
      )}
      {filteredData.length === 0 && (
        <div className={styles.noProposal}>
          <p>No proposals found</p>
        </div>
      )}
      {filteredData.slice(0, showItemsCount).map(item => {
        return (
          <div
            onClick={() => router.push(`/voting/${item.id}`)}
            key={item.id + 'voting'}
            className={styles.rowWrapper}
          >
            <ListItemRow data={item} type={'voting'} />
          </div>
        );
      })}
      {filteredData.length > showItemsCount && (
        <div className={styles.seeMore} onClick={showMoreProposalHandler}>
          <p>See More </p>
          <VectorSvg className={styles.vectorSvg} />
        </div>
      )}
    </div>
  );
};

export default VotingNowTable;
