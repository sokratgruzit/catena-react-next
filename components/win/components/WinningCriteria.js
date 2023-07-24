import Image from 'next/image';
import React from 'react';

import styles from './WinningCriteria.module.css';

const WinningCriteria = () => {
  return (
    <div className={styles.mainContent}>
      <div>
        <div className={styles.sky}>
          <Image layout='fill' objectFit='contain' src={`/images/win/sky.png`} alt='' />
        </div>
        <div className={styles.tickets}>
          <Image layout='fill' objectFit='contain' src={`/images/win/ticketsIcone.png`} alt='' />
        </div>
      </div>
      <div className={styles.descriptionTitle}>
        <h3>Winning Criteria</h3>
        <h5>The digits on your ticket must match in the correct order to win.</h5>
        <p>Here&#x2019;s an example lottery draw, with two tickets, A and B.</p>
      </div>
      <div className={styles.description}>
        <div>
          <span className={styles.circle}></span>
          <p>
            Ticket A:
            <span className={styles.spanOpacity}>
              The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a
              “Match first 3” prize.
            </span>
          </p>
        </div>
        <div className={styles.paragphB}>
          <span className={styles.circle}></span>
          <p>
            Ticket B:
            <span className={styles.spanOpacity}>
              Even though the last 5 digits match, the first digit is wrong, so this ticket doesn&#x2019;t win a prize.
            </span>
          </p>
        </div>
      </div>
      <div className={styles.imgTab}>
        <Image layout='fill' objectFit='contain' src={`/images/win/tab.png`} alt='' />
      </div>
      <div className={styles.prizeBrackets}>
        <p>
          Prize brackets don&#x2019;t &#x2018;stack&#x2019;: if you match the first 3 digits in order, you&#x2019;ll
          only win prizes from the &#x2018;Match 3&#x2019; bracket, and not from &#x2018;Match 1&#x2019; and
          &#x2018;Match 2&#x2019;.
        </p>
      </div>
    </div>
  );
};

export default WinningCriteria;
