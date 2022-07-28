import React from 'react';

import { OpenSVG } from '../../../../svg/InfoIcons';
import { formatCurrency } from '../../../../utils/formatCurrency';
import TextItem from '../../components/TextItem/TextItem';
import ImgTextItem from '../../components/ImgTextItem/ImgTextItem';
import PlusItem from '../../components/PlusItem/PlusItem';
import ExpandItem from '../../components/ExpandItem/ExpandItem';
import TextSvg from '../../components/TextSvg/TextSvg';

import styles from '../../ListItemRow.module.css';

let multTextItem = (text1, text2, st) => {
  st = st === null ? '' : st;
  let item = (
    <div className={`${styles.td} ${styles.multTextItem} ${st}`}>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
  return item;
};

const InfoTableTransactions = ({ data, mobileListOpener, activeList }) => {
  return (
    <div
      onClick={() => {
        mobileListOpener(data.hash);
      }}
      className={`${styles.rowItem} ${styles.InfoTransactionsRowItem}`}
    >
      {/* {textItem(data.action)} */}
      {/* <div className={`${styles.td} ${styles.transactionTableTextWrapper}`}>
        <p className={styles.transactionTableText}>{data.action}</p>
        <OpenSVG />
      </div> */}
      <TextSvg
        data={{
          title: data.action,
        }}
      />
      <TextItem text={formatCurrency(data.total_value)} />
      {multTextItem(
        formatCurrency(data.token_1.amount),
        data.token_1.token,
        styles.InfoTransactionsRowItem__flex,
      )}
      {multTextItem(
        formatCurrency(data.token_2.amount),
        data.token_2.token,
        styles.InfoTransactionsRowItem__flex,
      )}
      <TextSvg
        data={{
          title: data.account,
        }}
      />
      {/* <div className={`${styles.td} ${styles.transactionTableTextWrapper}`}>
        <p className={`${styles.transactionTableText} ${styles.blue}`}>
          {data.account}
        </p>
        <OpenSVG />
      </div> */}
      <TextItem text={data.time} />
      <PlusItem hash={data.hash} activeList={activeList} />
      <ExpandItem
        data={data}
        activeList={activeList}
        itemArr={[
          {
            name: 'Total Value',
            data: '$' + data.total_value + 'M',
          },
          {
            name: 'Token Amount',
            data: multTextItem(
              formatCurrency(data.token_1.amount),
              data.token_2.token,
              styles.InfoTransactionsRowItem__responsive,
            ),
          },
          {
            name: 'Token Amount1',
            data: multTextItem(
              formatCurrency(data.token_2.amount),
              data.token_2.token,
              styles.InfoTransactionsRowItem__responsive,
            ),
          },
          {
            name: 'Account',
            data: data.account,
          },
        ]}
      />
    </div>
  );
};

export default InfoTableTransactions;
