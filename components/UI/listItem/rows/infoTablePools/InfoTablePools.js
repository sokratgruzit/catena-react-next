import React from 'react';
import { useRouter } from 'next/router';

import { formatCurrency } from '../../../../utils/formatCurrency';
import TextItem from '../../components/TextItem/TextItem';
import ImgTextItem from '../../components/ImgTextItem/ImgTextItem';
import PlusItem from '../../components/PlusItem/PlusItem';
import ExpandItem from '../../components/ExpandItem/ExpandItem';

import styles from '../../ListItemRow.module.css';

const InfoTablePools = ({ data, mobileListOpener, activeList }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        mobileListOpener(data.hash);
      }}
      className={`${styles.rowItem} ${styles.InfoPoolsRowItem}`}
    >
      <TextItem text={data.id + 1} />
      <ImgTextItem
        onClick={() =>
          router.push(`/info/pools/${data.name.replace('/', '-')}`)
        }
        data={{
          title: data.name,
          img: data.imgSrc,
        }}
      />
      {/* <div className={styles.td}>
        <div
          onClick={() =>
            router.push(`/info/pools/${data.name.replace('/', '-')}`)
          }
          className={styles.poolsTableTitle}
        >
          <img src={data.imgSrc} alt='pool' />
          <div className={styles.poolsTableImgText}>
            <p className={styles.imgTextTitle}>{data.name}</p>
          </div>
        </div>
      </div> */}
      <TextItem text={formatCurrency(data.volume_24h)} />
      <TextItem text={formatCurrency(data.volume_7d)} />
      <TextItem text={formatCurrency(data.reward_fees)} />
      <TextItem text={formatCurrency(data.reward_apr)} />
      <TextItem text={formatCurrency(data.liquidity)} />
      <PlusItem hash={data.hash} activeList={activeList} />
      <ExpandItem
        data={data}
        activeList={activeList}
        itemArr={[
          {
            name: 'Volume 24H',
            data: '$' + data.volume_24h + 'M',
          },
          {
            name: 'Liquidity',
            data: '$' + data.liquidity + 'B',
          },
        ]}
      />
    </div>
  );
};

export default InfoTablePools;
