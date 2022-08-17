import styles from "./DashboardUserData.module.css";
import React, { useState } from "react";
import Table from "../UI/table/Table";

const DASHBOARD_DATA = [
  {
    id: 0,
    hash: "0xa8d101cc60db0e0409e789a30ae00eda6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 1000000000,
  },
  {
    id: 1,
    hash: "0xa8d101cc6db03e0409e789a30ae00eda6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
  {
    id: 2,
    hash: "0xa8d101cc6db30e0409e789a30ae00eda6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
  {
    id: 3,
    hash: "0xa8d101c3c6db0e0409e789a30ae00eda6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
  {
    id: 4,
    hash: "0xa8d101cc6db0e0409e789a3130ae00eda6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
  {
    id: 5,
    hash: "0xa8d101cc6db0e0409e789a301ae00eda6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
  {
    id: 6,
    hash: "0xa8d101cc6db0e0409e789a30ae200eda6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
  {
    id: 7,
    hash: "0xa8d101cc6db0e0409e789a430ae00eda6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
  {
    id: 8,
    hash: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b230",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
  {
    id: 9,
    hash: "0xa8d101cc6db0e04029e789a30ae00ed3a6f38d7b20",
    from: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    to: "0xa8d101cc6db0e0409e789a30ae00eda6f38d7b20",
    transactionType: "Stake",
    currency: "CMCX",
    result: "Success",
    amount: 10,
  },
];

let media = true;
if(window.innerWidth >= 768){
  media = true;
}else{
  media = false;
}
const DashboardUserData = () => {
  return (
    <div className={`container container-margin ${styles.marginBottom}`}>
      <div className={`${styles.dashboardTable} arrow-border`}>
        <Table
          tableLabels={["Hash", "From", "To", "Type", "Result", "Amount", ""]}
          tableData={DASHBOARD_DATA}
          type={"dashboard"}
        />
        {/*<div className={styles.thead}>
          <div className={styles.tr}>
            <div className={styles.th}>Hash</div>
            <div className={styles.th}>From</div>
            <div className={styles.th}>To</div>
            <div className={styles.th}><span className={styles.deskTtl}>Transaction Type</span><span className={styles.mobTtl}>TXN Type</span></div>
            <div className={styles.th}>Result</div>
            <div className={styles.th}>Amount</div>
          </div>
        </div>
        <div className={styles.tbody}>
          {DASHBOARD_DATA.map((item) => {
            return (
              <div className={`${styles.tr}`} key={item.id} onClick={() => {
                mobileListOpener(item.hash)
              }}>
                <div className={styles.td}>
                  {item.hash}
                </div>
                <div className={styles.td}>{item.from}</div>
                <div className={styles.td}>{item.to}</div>
                <div className={styles.td}>
                  {item.transactionType} <span>{item.currency}</span>
                </div>
                <div className={`${styles.resultColor} ${styles.td}`}>{item.result}</div>
                <div className={styles.td}>{item.amount}</div>
                <div className={`${styles.plusIcon} ${activeList === item.hash ? styles.activePlusIcon : ''}`}>
                  <span></span>
                  <span></span>
                </div>
                <div className={`${styles.mobileRow} ${activeList === item.hash ? styles.activeMobileRow : ''}`}>
                  <div className={styles.mobileRowItem}>
                    <div className={`${styles.mobileRowTtl}`}>From</div>
                    <div className={`${styles.mobileRowContent}`}>{item.from}</div>
                  </div>
                  <div className={styles.mobileRowItem}>
                    <div className={`${styles.mobileRowTtl}`}>To</div>
                    <div className={`${styles.mobileRowContent}`}>{item.to}</div>
                  </div>
                  <div className={styles.mobileRowItem}>
                    <div className={`${styles.mobileRowTtl}`}>Result</div>
                    <div className={`${styles.resultColor} ${styles.mobileRowContent}`}>{item.result}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>*/}
      </div>
    </div>
  );
};

export default DashboardUserData;
