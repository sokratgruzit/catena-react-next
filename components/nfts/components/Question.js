import React from 'react';
import { Button, Input, HelpText } from '@catena-network/catena-ui-module';

import styles from './CommunityAuctionsFAQ.module.css';

const Question = ({ title, expandRow, setToggle }) => {
  return (
    <div className={styles.questionWrapper}>
      <p className={`${styles.title} ${expandRow && styles.brighten}`}>{title}</p>
      <Button
        type={'dropDown-Button'}
        element={'dropDown-Button'}
        active={expandRow}
        onClick={() => setToggle(prevState => !prevState)}
      />
    </div>
  );
};

export default Question;
