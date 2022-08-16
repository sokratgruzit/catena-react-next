import React from 'react';
import styles from './Table.module.css';
import listStyles from '../listItem/ListItemRow.module.css';
import ListItemRow from '../listItem/ListItemRow';

const Table = props => {
  let custom_th = '';
  let custom_th_text = '';

  if (props.type == 'nft_activity') {
    custom_th = styles.th_activity;
  }
  if (props.type == 'dashboard') {
    custom_th = listStyles.th_dashboard;
    console.log(custom_th);
  }
  if (props.type == 'info_table_tokens') {
    custom_th = listStyles.th_info_tokens;
    custom_th_text = listStyles.th_info_tokens_text;
  }
  if (props.type == 'info_table_pools') {
    custom_th = listStyles.th_info_pools;
  }
  if (props.type == 'info_table_transactions') {
    custom_th = listStyles.th_info_transactions;
  }
  let IdentifyOnClick = props.onClick !== undefined ? props.onClick : null;

  return (
    <div className={styles.Table__wrap}>
      <div className={styles.Table__labels}>
        {props.tableLabels.map(label => {
          return (
            <div
              key={label + 'unique'}
              className={`${custom_th}`}
              onClick={IdentifyOnClick}
            >
              <div className={`${styles.th} ${custom_th_text}`}>{label}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.Table__content}>
        {props.tableData.map(item => {
          return (
            <ListItemRow key={item.id + 'hash'} data={item} type={props.type} />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
