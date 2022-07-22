import Link from 'next/link';

import styles from './Form.module.css';

const Form = () => {
  return (
    <div
      className={` container container-margin ${styles.ProposalForm__wrapper}`}
    >
      <div className={styles.ProposalForm}>
        <div className={styles.ProposalForm__header}>
          <Link href='/voting'>
            <div className={styles.ProposalForm__backBtn}>
              <svg
                className={styles.svgHoverBlue}
                width='15'
                height='11'
                viewBox='0 0 15 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.788086 5.68359C0.788086 5.4534 0.879529 5.23264 1.0423 5.06987L5.17436 0.937808C5.51331 0.598857 6.06286 0.598857 6.40181 0.937808C6.74076 1.27676 6.74076 1.82631 6.40181 2.16526L2.88347 5.68359L6.40181 9.20193C6.74076 9.54088 6.74076 10.0904 6.40181 10.4294C6.06286 10.7683 5.51331 10.7683 5.17436 10.4294L1.0423 6.29732C0.879529 6.13455 0.788086 5.91378 0.788086 5.68359Z'
                  fill='#FF7152'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.902344 5.68382C0.902344 5.20447 1.29093 4.81588 1.77028 4.81588L13.2271 4.81588C13.7064 4.81588 14.095 5.20447 14.095 5.68382C14.095 6.16317 13.7064 6.55176 13.2271 6.55176L1.77028 6.55176C1.29093 6.55176 0.902344 6.16317 0.902344 5.68382Z'
                  fill='#FF7152'
                />
              </svg>
              <p className={styles.blueHover}>Back</p>
            </div>
          </Link>
          <div>
            <h1 className='font_30'>Make a Proposal</h1>
          </div>
        </div>
        <div className={styles.ProposalForm__inner}>
          <form>
            <div className={styles.ProposalForm__title}>
              <label>
                <p className='font_12'>Title</p>
                <input
                  className={styles.ProposalForm__input}
                  type='text'
                  name='title'
                />
              </label>
            </div>
            <div className={styles.ProposalForm__content}>
              <p className='font_12'>Content</p>
              <p className='font_10'>Tip: write in Markdown!</p>
              <textarea></textarea>
              <span className={styles.ProposalForm__bottomBorder}></span>
            </div>
            <div className={styles.ProposalForm__choices}>
              <p className='font_12'>Choices</p>
              <input
                className={styles.ProposalForm__input}
                placeholder='Input choice text'
                type='text'
                name='input choice text'
              />
              <input
                className={styles.ProposalForm__input}
                placeholder='Input choice text'
                type='text'
                name='input choice text'
              />
              <div className={styles.ProposalForm__addBtn}>
                <button
                  className={`${styles.ProposalForm__addBtn__inner} btnOrangeBordered `}
                >
                  <svg
                    width='11'
                    height='11'
                    viewBox='0 0 11 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      x='0.722656'
                      y='4.18359'
                      width='10'
                      height='2'
                      rx='1'
                      fill='white'
                    />
                    <rect
                      x='4.72266'
                      y='10.1836'
                      width='10'
                      height='2'
                      rx='1'
                      transform='rotate(-90 4.72266 10.1836)'
                      fill='white'
                    />
                  </svg>
                  Add Choice
                </button>
              </div>
              <span className={styles.ProposalForm__bottomBorder}></span>
            </div>
            <div className={styles.ProposalForm__actions}>
              <p>Actions</p>
              <div className={styles.ProposalForm__actionsWrap}>
                <div className={styles.ProposalForm__date}>
                  <p className='font_12'>Start Date</p>
                  <input type='date'></input>
                </div>
                <div className={styles.ProposalForm__time}>
                  <p className='font_12'>Start Time</p>
                  <input type='time' className={styles.timePicker}></input>
                </div>
              </div>
              <div
                className={`${styles.ProposalForm__actionsWrap} ${styles.marginTop}`}
              >
                <div className={styles.ProposalForm__date}>
                  <p className='font_12'>Start Date</p>
                  <input type='date'></input>
                </div>
                <div className={styles.ProposalForm__time}>
                  <p className='font_12'>Start Time</p>
                  <input type='time'></input>
                </div>
              </div>
            </div>
          </form>
          <div className={styles.ProposalForm__snapShot}>
            <p>Snapshot</p>
            <div className={styles.hover}>
              <a href='##'>16672898</a>
              <svg
                className={styles.svgHoverOrange}
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.7373 7.53361L13.9659 2.20361'
                  stroke='#0500FF'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14.4747 4.80359V1.68359H11.4141'
                  stroke='#0500FF'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7.46137 1.68359H6.1861C2.99793 1.68359 1.72266 2.98359 1.72266 6.23359V10.1336C1.72266 13.3836 2.99793 14.6836 6.1861 14.6836H10.0119C13.2001 14.6836 14.4754 13.3836 14.4754 10.1336V8.83359'
                  stroke='#0500FF'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
          <div>
            <button className='btnBlue btn'>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

// cleaning of classes end, need to correct routes of every proposal its coming from /voting
