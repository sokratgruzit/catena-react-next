import React from 'react';
import styles from './Table.module.css';
import listStyles from '../listItem/ListItemRow.module.css';
import ListItemRow from '../listItem/ListItemRow';

const Table = (props) => {
    let custom_th = '';

    if (props.type == 'nft_activity') {
        custom_th = styles.th_activity;
    }
    if (props.type == 'dashboard') {
        custom_th = listStyles.th_dashboard;
        console.log(custom_th)
    }

    return (
        <div className={styles.Table__wrap}>
            <div className={styles.Table__labels}>
                {props.tableLabels.map(label => {
                    return <div key={label + 'unique'} className={`${styles.th} ${custom_th}`}>{label}</div>;
                })}
            </div>
            <div className={styles.Table__content}>
                {props.tableData.map(item => {
                    return <ListItemRow key={item.id + "hash"} data={item} type={props.type} />
                })}
            </div>
        </div>
    );
};

export default Table;