import React, { useState } from 'react'

import { Circle3MoreDetails } from '../../../svg'

import styles from './NodeDetails.module.css'

const NodeDetails = () => {
  const [activeTab, setActiveTab] = useState('NodeInformation')
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <header className={styles.header}>
          <span>
            <svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#filter0_b_628_44)'>
                <rect width='60' height='60' rx='30' fill='#0C0E23' />
                <rect x='0.5' y='0.5' width='59' height='59' rx='29.5' stroke='white' strokeOpacity='0.1' />
              </g>
              <g clipPath='url(#clip0_628_44)'>
                <path
                  d='M30 12L26.6138 13.8991L17.3862 19.1009L14 21V39L17.3862 40.8991L26.6984 46.1009L30.0847 48L33.4709 46.1009L42.6138 40.8991L46 39V21L42.6138 19.1009L33.3862 13.8991L30 12ZM20.7725 35.2018V24.7982L30 19.5963L39.2275 24.7982V35.2018L30 40.4037L20.7725 35.2018Z'
                  fill='#2A5ADA'
                />
              </g>
              <defs>
                <filter
                  id='filter0_b_628_44'
                  x='-60'
                  y='-60'
                  width='180'
                  height='180'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feGaussianBlur in='BackgroundImageFix' stdDeviation='30' />
                  <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_628_44' />
                  <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_628_44' result='shape' />
                </filter>
                <clipPath id='clip0_628_44'>
                  <rect width='32' height='36' fill='white' transform='translate(14 12)' />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className={styles.nodeInfoWrap}>
            <div className={styles.nodeName}>
              <h3>Node Name</h3>
              <Circle3MoreDetails className={styles.moreDetails} />
            </div>
            <div className={styles.nodeStatusDetails}>
              <span className={styles.nodeStatusNameLoc}>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_628_75)'>
                    <path
                      d='M7.9987 15.1666C4.04536 15.1666 0.832031 11.9533 0.832031 7.99992C0.832031 4.04659 4.04536 0.833252 7.9987 0.833252C11.952 0.833252 15.1654 4.04659 15.1654 7.99992C15.1654 11.9533 11.952 15.1666 7.9987 15.1666ZM7.9987 1.83325C4.5987 1.83325 1.83203 4.59992 1.83203 7.99992C1.83203 11.3999 4.5987 14.1666 7.9987 14.1666C11.3987 14.1666 14.1654 11.3999 14.1654 7.99992C14.1654 4.59992 11.3987 1.83325 7.9987 1.83325Z'
                      fill='#0500FF'
                    />
                    <path
                      d='M6.00016 14.5H5.33349C5.06016 14.5 4.83349 14.2733 4.83349 14C4.83349 13.7267 5.04682 13.5067 5.32016 13.5C4.27349 9.90803 4.27349 6.09197 5.32016 2.5C5.18959 2.49737 5.06532 2.44343 4.97424 2.34985C4.88315 2.25627 4.83259 2.13059 4.83349 2C4.83349 1.72667 5.06016 1.5 5.33349 1.5H6.00016C6.16016 1.5 6.31349 1.58 6.40682 1.70667C6.50016 1.84 6.52682 2.00667 6.47349 2.16C5.22016 5.95475 5.22016 10.0519 6.47349 13.8467C6.52682 14 6.50016 14.1667 6.40682 14.3C6.31349 14.42 6.16016 14.5 6.00016 14.5Z'
                      fill='#0500FF'
                    />
                    <path
                      d='M9.99706 14.5C9.91744 14.5007 9.83882 14.4822 9.76783 14.4461C9.69684 14.4101 9.63556 14.3575 9.58916 14.2928C9.54275 14.2281 9.51259 14.1532 9.5012 14.0743C9.48981 13.9955 9.49754 13.9152 9.52373 13.84C10.7771 10.0452 10.7771 5.94804 9.52373 2.1533C9.50271 2.09114 9.49415 2.02545 9.49853 1.95998C9.5029 1.89451 9.52013 1.83055 9.54922 1.77174C9.57832 1.71293 9.61871 1.66042 9.6681 1.61722C9.71749 1.57402 9.7749 1.54097 9.83706 1.51996C9.89922 1.49895 9.96491 1.49039 10.0304 1.49476C10.0958 1.49914 10.1598 1.51637 10.2186 1.54546C10.2774 1.57456 10.3299 1.61495 10.3731 1.66434C10.4163 1.71373 10.4494 1.77114 10.4704 1.8333C11.797 5.83054 11.797 10.1494 10.4704 14.1466C10.4037 14.3666 10.2037 14.5 9.99706 14.5Z'
                      fill='#0500FF'
                    />
                    <path
                      d='M8 11.4667C6.14 11.4667 4.28667 11.2067 2.5 10.68C2.49333 10.9467 2.27333 11.1667 2 11.1667C1.72667 11.1667 1.5 10.94 1.5 10.6667V10C1.5 9.84003 1.58 9.68669 1.70667 9.59336C1.84 9.50003 2.00667 9.47336 2.16 9.52669C5.95475 10.78 10.0519 10.78 13.8467 9.52669C13.9221 9.50087 14.0026 9.49344 14.0814 9.50504C14.1603 9.51664 14.2352 9.54692 14.3 9.59336C14.4333 9.68669 14.5067 9.84003 14.5067 10V10.6667C14.5067 10.94 14.28 11.1667 14.0067 11.1667C13.7333 11.1667 13.5133 10.9534 13.5067 10.68C11.7133 11.2067 9.86 11.4667 8 11.4667Z'
                      fill='#0500FF'
                    />
                    <path
                      d='M13.9986 6.49981C13.9452 6.49981 13.8919 6.49314 13.8386 6.47314C10.0438 5.21981 5.94663 5.21981 2.15189 6.47314C1.88522 6.55981 1.60522 6.41981 1.51855 6.15981C1.43855 5.89314 1.57855 5.61314 1.83855 5.52648C5.8358 4.19983 10.1546 4.19983 14.1519 5.52648C14.4119 5.61314 14.5586 5.89981 14.4652 6.15981C14.4339 6.25887 14.3717 6.34532 14.2878 6.40649C14.2038 6.46767 14.1024 6.50037 13.9986 6.49981Z'
                      fill='#0500FF'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_628_75'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                tokyo
              </span>
              <span className={styles.active}>
                <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='4' cy='4' r='4' fill='#4AB762' />
                </svg>
                Active
              </span>
            </div>
          </div>
        </header>
        <div className={styles.nodeDetailsList}>
          <div>
            <h4>Uptime (avg):</h4>
            <p> - %</p>
          </div>
          <div>
            <h4>Validator since block:</h4>
            <p className={styles.validatorSince}># -</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.hardwareHeader}>
          <div className={styles.infoNavWrap}>
            {/* <div className={styles.chosen}>NODE INFORMATION</div> */}
            <div
              className={activeTab === 'NodeInformation' ? styles.activeTab : ''}
              onClick={() => setActiveTab('NodeInformation')}
            >
              NODE INFORMATION
            </div>
            <div className={activeTab === 'Hardware' ? styles.activeTab : ''} onClick={() => setActiveTab('Hardware')}>
              HARDWARE
            </div>
            <div className={activeTab === 'Address' ? styles.activeTab : ''} onClick={() => setActiveTab('Address')}>
              ADDRESS
            </div>
          </div>
          <Circle3MoreDetails className={styles.moreDetails} />
        </div>
        <div className={styles.hardwareBody}>
          <div className={styles.edit}>
            <svg width='7' height='6' viewBox='0 0 7 6' fill='white' xmlns='http://www.w3.org/2000/svg'>
              <path d='M5.5062 0.499632C4.71855 -0.28802 4.09593 -0.0329708 3.55583 0.499632L0.442726 3.61273C0.322702 3.73275 0.21018 3.9653 0.180175 4.13033L0.00764176 5.32306C-0.0523698 5.75064 0.247688 6.0582 0.675271 5.99069L1.868 5.81816C2.03303 5.79565 2.26558 5.67563 2.3856 5.55561L5.4987 2.44251C6.04631 1.9099 6.29385 1.28728 5.5062 0.499632Z' />
            </svg>
            Edit
          </div>
          {/* <p className={styles.infoText}>
            -
          </p> */}
        </div>
        <div className={styles.hardwareFooter}>
          <div className={styles.websiteWrap}>
            <h3>Website</h3>
            <a>-</a>
          </div>
          <div className={styles.joinDateWrap}>
            <h3>Join Date</h3>
            <p>---</p>
          </div>
        </div>
      </div>
      <div className={styles.containerCorner}></div>
    </div>
  )
}

export default NodeDetails
