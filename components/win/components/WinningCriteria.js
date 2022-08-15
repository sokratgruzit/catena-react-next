import React from 'react';
import styles from './WinningCriteria.module.css'

const WinningCriteria = () => {
  return (
    <div className={styles.mainContent}>
        <div>
            <img className={styles.sky} src={'../images/win/sky.png'} alt="" />
            <img className={styles.tickets} src={'../images/win/ticketsIcone.png'} alt="" />
        </div>
        <div className={styles.descriptionTitle}>
            <h3>Winning Criteria</h3>
            <h5>The digits on your ticket must match in the correct order to win.</h5>
            <p>Here’s an example lottery draw, with two tickets, A and B.</p>
        </div>
        <div className={styles.description}>
            <div>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="4.59186" cy="4.55957" rx="4.1778" ry="4" fill="#0500FF"/>
                </svg>
                <p>
                    Ticket A: 
                    <span className={styles.spanOpacity}>
                        The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.
                    </span>
                </p>
            </div>
            <div className={styles.paragphB}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="4.59186" cy="4.55957" rx="4.1778" ry="4" fill="#0500FF"/>
                </svg>
                <p>
                    Ticket B: 
                    <span className={styles.spanOpacity}>
                        Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.
                    </span>
                </p>
            </div>
        </div>
        <img className={styles.imgTab} src={'../images/win/tab.png'} alt="tab" />
        <div className={styles.prizeBrackets}>
            <p>
                Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.
            </p>
        </div>
    </div>
  )
}

export default WinningCriteria;
