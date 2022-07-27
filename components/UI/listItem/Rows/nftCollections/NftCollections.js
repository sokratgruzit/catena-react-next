import React from 'react';

import TextItem from '../../components/TextItem/TextItem';
import ImgTextItem from '../../components/ImgTextItem/ImgTextItem';
import PriceItem from '../../components/PriceItem/PriceItem';
import PlusItem from '../../components/PlusItem/PlusItem';
import ExpandItem from '../../components/ExpandItem/ExpandItem';

import styles from '../../ListItemRow.module.css';

const NftCollections = ({ data, mobileListOpener, activeList }) => {
  return (
    <div
      onClick={() => {
        mobileListOpener(data.hash);
      }}
      className={`${styles.Collections__item} ${styles.rowItem}`}
    >
      <ImgTextItem data={{ title: data.artist, img: data.logo }} />
      <PriceItem
        data={{
          title: 'CMCX',
          priceCoin: data.priceCmcx,
        }}
      />
      <TextItem text={data.lowest} />
      <TextItem text={data.highest} />
      <TextItem text={data.items} />
      <TextItem text={data.supply} />
      <PlusItem hash={data.hash} activeList={activeList} />
      <ExpandItem
        data={data}
        activeList={activeList}
        itemArr={[
          {
            name: 'Total Value',
            data: '$' + 'M',
          },
        ]}
      />
    </div>
  );
};

export default NftCollections;
