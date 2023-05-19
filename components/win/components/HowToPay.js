import React from 'react'

import styles from './HowToPay.module.css'

const HowToPay = () => {
  return (
    <div>
      <div className={styles.title}>
        <h1>How to Play</h1>
        <p>
          If the digits on your tickets match the winning numbers in the correct <br /> order, you win a portion of the
          prize pool.
        </p>
        <h5>Simple!</h5>
      </div>
      <div className={styles.pay}>
        <div>
          <p className={styles.step}>Step 1</p>
          <h3 className={styles.stepHtag}>Buy Tickets</h3>

          <p className={styles.paragraph}>Prices are set when the round starts, equal to 5 USD in CAKE per ticket.</p>
        </div>
        <div>
          <svg
            className={styles.lines}
            width='2'
            height='201'
            viewBox='0 0 2 201'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line x1='0.914062' y1='0.746094' x2='0.91407' y2='200.746' stroke='url(#paint0_linear_1537_5546)' />
            <defs>
              <linearGradient
                id='paint0_linear_1537_5546'
                x1='0.414093'
                y1='200.746'
                x2='0.414079'
                y2='0.746094'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#7464D7' stopOpacity='0' />
                <stop offset='0.494792' stopColor='#7464D7' />
                <stop offset='1' stopColor='#7464D7' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <p className={styles.step}>Step 2</p>
          <h3 className={styles.stepHtag}>Wait for the Draw</h3>
          <p className={styles.paragraph}>There is one draw every day alternating between 0 AM UTC and 12 PM UTC.</p>
        </div>
        <div>
          <svg
            className={styles.linesSecond}
            width='2'
            height='201'
            viewBox='0 0 2 201'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line x1='0.914062' y1='0.746094' x2='0.91407' y2='200.746' stroke='url(#paint0_linear_1537_5546)' />
            <defs>
              <linearGradient
                id='paint0_linear_1537_5546'
                x1='0.414093'
                y1='200.746'
                x2='0.414079'
                y2='0.746094'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#7464D7' stopOpacity='0' />
                <stop offset='0.494792' stopColor='#7464D7' />
                <stop offset='1' stopColor='#7464D7' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <p className={styles.step}>Step 3</p>
          <h3 className={styles.stepHtag}>Check for Prizes</h3>
          <p className={styles.paragraph}>
            Once the round’s over, come back to the page and check to see if you’ve won!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowToPay
