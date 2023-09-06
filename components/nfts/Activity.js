import React from 'react';
import styles from './Activity.module.css';
import ArrowBtn from '../UI/button/ArrowBtn';
import ActivityTable from './components/ActivityTable';

const Activity = ({ activityData }) => {
  return (
    <div className={`${styles.Activity} container`}>
      <ArrowBtn route={'nfts'} direction={'back'} />
      <h1 className={` ttl`}>Activity</h1>
      <ActivityTable activityData={activityData} />
    </div>
  );
};

export default Activity;
