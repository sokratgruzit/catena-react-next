import React from 'react';

import PriceItem from '../../components/PriceItem/PriceItem';
import TextItem from '../../components/TextItem/TextItem';
import ImgTextItem from '../../components/ImgTextItem/ImgTextItem';
import TextSvg from '../../components/TextSvg/TextSvg';
import PlusItem from '../../components/PlusItem/PlusItem';
import ExpandItem from '../../components/ExpandItem/ExpandItem';

import listStyles from '../../ListItemRow.module.css';

const NftActivity = ({ data, mobileListOpener, activeList }) => {
  return (
    <div
      onClick={() => {
        mobileListOpener(data.hash);
      }}
      className={`${listStyles.nft_activity_table} ${listStyles.rowItem}`}
    >
      <ImgTextItem
        data={{
          title: data.itemTitle,
          subTitle: data.itemSubTitle,
          img: data.itemImg,
        }}
        darkened={true}
      />
      <TextItem text={data.event} />
      <PriceItem
        data={{
          title: 'CMCX',
          priceCoin: data.priceInCmcx,
          priceDollar: data.priceInDollar,
        }}
      />
      <ImgTextItem
        data={{
          title: data.from,
          subTitle: data.fromAddress,
          img: data.fromImg,
        }}
      />
      <ImgTextItem
        data={{
          title: data.toReciver,
          subTitle: data.toReciverAddress,
          img: data.toReciverImg,
        }}
      />
      <TextSvg
        data={{
          title: data.dateDay,
          subTitle: data.dateTime,
        }}
      />
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

export default NftActivity;
