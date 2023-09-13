import React from 'react';
import Link from 'next/link';

import Expand from '../expand/Expand';
import ListItemRow from '../listItem/ListItemRow';

import styles from './Table.module.css';
import listStyles from '../listItem/ListItemRow.module.css';

const Table = props => {
  let custom_th = '';
  let custom_th_text = '';

  if (props.type === 'nft_activity') {
    custom_th = listStyles.th_activity;
  }
  if (props.type === 'nft_collections') {
    custom_th = listStyles.th_collections;
  }
  if (props.type === 'dashboard') {
    custom_th = listStyles.th_dashboard;
  }
  if (props.type === 'info_table_tokens') {
    custom_th = listStyles.th_info_tokens;
    custom_th_text = listStyles.th_info_tokens_text;
  }
  if (props.type === 'info_table_pools') {
    custom_th = listStyles.th_info_pools;
  }
  if (props.type === 'info_table_transactions') {
    custom_th = listStyles.th_info_transactions;
  }
  if (props.type === 'earn_farms') {
    custom_th = listStyles.th_earn_farms;
  }
  if (props.type === 'proposal_votes') {
    custom_th = listStyles.th_proposal_votes;
  }
  const IdentifyOnClick = props.onClick !== undefined ? props.onClick : null;

  return (
    <div className={styles.Table__wrap}>
      <div className={styles.Table__labels}>
        {props.tableLabels.map((label, index) => {
          return (
            <div key={'label_' + label} className={`${custom_th}`} onClick={IdentifyOnClick}>
              <div className={`${styles.th} ${custom_th_text}`}>{label}</div>
            </div>
          );
        })}
      </div>
      {props.expandContent && (
        <div className={styles.Table__content}>
          {props.tableData.map((item, index) => {
            const childrenWithProps = React.Children.map(props.expandContent, child => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  item,
                });
              }
              return child;
            });

            const isNftActivity = props.type === 'nft_activity';
            const rowContent = isNftActivity ? (
              <Link href={`/overview/nfts/activity/${item.id}`} key={item.id}>
                <a>
                  <Expand className={props.expandClassName} expandContent={childrenWithProps}>
                    <ListItemRow data={item} type={props.type} />
                  </Expand>
                </a>
              </Link>
            ) : (
              <Expand className={props.expandClassName} expandContent={childrenWithProps} key={item.id}>
                <ListItemRow data={item} type={props.type} />
              </Expand>
            );

            return rowContent;
          })}
        </div>
      )}
      {!props.expandContent && (
        <div className={styles.Table__content}>
          {props.tableData.map(item => {
            const isNftActivity = props.type === 'nft_activity';
            const rowContent = isNftActivity ? (
              <Link href={`/overview/nfts/activity/${item.id}`} key={item.id}>
                <a>
                  <ListItemRow data={item} type={props.type} />
                </a>
              </Link>
            ) : (
              <ListItemRow key={item.id + '_hash_' + props.type} data={item} type={props.type} />
            );

            return rowContent;
          })}
        </div>
      )}
    </div>
  );
};

export default Table;
