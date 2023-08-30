import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './DataBox.module.css';

const DataBox = props => {
  const nftData = useSelector(state => state.nftStatisticsData);

  let data = [];

  if (props.type === 'creator' && props.items === 4) {
    data = [
      {
        id: 0,
        title: 'Items',
        item: '12.2K',
      },
      {
        id: 1,
        title: 'Items Listed',
        item: '1.210',
      },
      {
        id: 2,
        title: 'Lowest (CMCX)',
        item: '46.067K',
      },
      {
        id: 3,
        title: 'Volume (CMCX)',
        item: '264.934K',
      },
    ];
  }
  if (props.type === 'statistics' && props.items === 3) {
    data = [
      {
        id: 0,
        title: 'NFT Collected',
        item: 10,
      },
      {
        id: 1,
        title: 'Points',
        item: 35,
      },
      {
        id: 2,
        title: 'Achievements',
        item: 5,
      },
    ];
  }

  return (
    <div className={styles.Creator__infoBlock}>
      {data.map(item => {
        return (
          <div key={item.id} className={styles.Creator__info__item}>
            <p className={` ${styles.Creator__info__title}`}>{item.title}</p>
            <p className='font_30'>{item.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DataBox;
