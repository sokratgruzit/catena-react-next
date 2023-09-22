import React, { useState } from 'react';
import styles from './CastYourCode.module.css';
import { Button } from '@catena-network/catena-ui-module';

export default function CastYourCode() {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleChoiceClick = index => {
    setSelectedChoice(index);
  };

  const handleVoteClick = () => {
    if (selectedChoice !== null) {
      setVoted(true);
    }
  };
  const item = {
    balance_bsc: 100, // Replace with actual values
    balance_eth: 200,
    // ... other properties
  };

  // Now you can use `item` within your component.

  const handleSeeResultsClick = () => {
    let resultText = selectedChoice === 0 ? 'You voted:  Yes' : 'You voted:  We don’t want to earn TINC tokens!';

    document.getElementById('resultText').innerText = resultText;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperHeader}>
        <p className='font-20 ttl'>Details</p>
      </div>
      <div className={styles.wrapperBody}>
        {voted ? (
          <div className={styles.voted}>
            <h3>Voted</h3>
            <div id='resultText'></div>
          </div>
        ) : (
          <div className={styles.choices}>
            <div
              className={`${styles.choice} ${selectedChoice === 0 ? styles.selectedChoice : ''}`}
              onClick={() => handleChoiceClick(0)}
            >
              <div className={`${styles.circle} ${selectedChoice === 0 ? styles.selectedCircle : ''}`} />
              Yes
            </div>
            <div
              className={`${styles.choice} ${selectedChoice === 1 ? styles.selectedChoice : ''}`}
              onClick={() => handleChoiceClick(1)}
            >
              <div className={`${styles.circle} ${selectedChoice === 1 ? styles.selectedCircle : ''}`} />
              We <span>don’t want</span> to earn TINC tokens!
            </div>
          </div>
        )}
        <Button
          label={'Vote'}
          size={'btn-lg'}
          type={'btn-primary'}
          arrow={'arrow-none'}
          element={'button'}
          customStyles={{
            background: '#A6D0DD',
            border: '1px solid #162029',
            width: '100%',
            margin: '32px 0 22px 0',
          }}
          onClick={handleVoteClick}
          disabled={voted}
        />
        <Button
          label={'See Results'}
          size={'btn-lg'}
          type={'btn-primary'}
          arrow={'arrow-none'}
          element={'button'}
          customStyles={{
            background: 'transParent',
            border: 'none',
            margin: '0 auto',
          }}
          onClick={handleSeeResultsClick}
        />
      </div>
    </div>
  );
}
