import styles from "./Tokenomics.module.css";

function Distribution() {
  return (
    <div>
      <div className={styles.aboutFinancial__header}>
        <h3 className="font-51">
          <span>Token</span> <span>Distribution</span>
        </h3>
        <div className={styles.aboutFinancial__headerTextContainer}>
          <div className={styles.aboutFinancial__headerTitle}>Total Supply (Genesis)</div>
          <div className={styles.aboutFinancial__headerSubTitle}>20,000,000,000 CMCX</div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartContainer__left}>
          <div className={styles.chartContainer__inner}>
            <div className={styles.chart__img}>
              <img src="" alt="" />
            </div>
            <img src="" alt="" />
            <div id={styles.chart}></div>
          </div>
        </div>
        <div className={styles.chartContainer__right}>
          <a
            href="https://etherscan.io/token/0x5b685863494c33f344081f75e5430c260c224a32?a=0xb29bb1d14fd445e623790fa4060ba1584f151448"
            target="_blank"
            className={styles.chartContainer__description}
          >
            <div className="color"></div>
            <div className={`${styles.title} descr `}>
              Reserve
              <svg
                data-v-055a1cab=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-055a1cab="" opacity="0.5">
                  <path
                    data-v-055a1cab=""
                    d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z"
                    fill="white"
                  ></path>
                </g>
                <defs data-v-055a1cab="">
                  <clipPath data-v-055a1cab="" id="clip0">
                    <rect data-v-055a1cab="" width="12" height="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`${styles.text} descr `}>6,000,000,000 CMCX (30%)</div>
          </a>
          <a
            href="https://etherscan.io/token/0x5b685863494c33f344081f75e5430c260c224a32?a=0xab2beb4f5c500d34c1f8e99f3b3a47cc027d8b1a"
            target="_blank"
            className={styles.chartContainer__description}
          >
            <div className="color"></div>
            <div className={`${styles.text} descr `}>
              Ecosystem Rewards
              <svg
                data-v-055a1cab=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-055a1cab="" opacity="0.5">
                  <path
                    data-v-055a1cab=""
                    d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z"
                    fill="white"
                  ></path>
                </g>
                <defs data-v-055a1cab="">
                  <clipPath data-v-055a1cab="" id="clip0">
                    <rect data-v-055a1cab="" width="12" height="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`${styles.text} descr `}>2,000,000,000 CMCX (10%)</div>
          </a>
          <a
            href="https://etherscan.io/token/0x5b685863494c33f344081f75e5430c260c224a32?a=0x8022faa24f5f7857f8deae490b033d3339ba2dbf"
            target="_blank"
            className={styles.chartContainer__description}
          >
            <div className="color"></div>
            <div className={`${styles.title} descr `}>
              Team
              <svg
                data-v-055a1cab=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-055a1cab="" opacity="0.5">
                  <path
                    data-v-055a1cab=""
                    d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z"
                    fill="white"
                  ></path>
                </g>
                <defs data-v-055a1cab="">
                  <clipPath data-v-055a1cab="" id="clip0">
                    <rect data-v-055a1cab="" width="12" height="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`${styles.text} descr `}>2,000,000,000 CMCX (10%)</div>
          </a>
          <a
            href="https://etherscan.io/token/0x5b685863494c33f344081f75e5430c260c224a32?a=0x0cdd6ae9083f025cd88fbb624891cbe161060ff6"
            target="_blank"
            className={styles.chartContainer__description}
          >
            <div className="color"></div>
            <div className={`${styles.title} descr `}>
              Marketing & Operations
              <svg
                data-v-055a1cab=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-055a1cab="" opacity="0.5">
                  <path
                    data-v-055a1cab=""
                    d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z"
                    fill="white"
                  ></path>
                </g>
                <defs data-v-055a1cab="">
                  <clipPath data-v-055a1cab="" id="clip0">
                    <rect data-v-055a1cab="" width="12" height="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`${styles.text} descr `}>1,000,000,000 CMCX (5%)</div>
          </a>
          <a
            href="https://etherscan.io/token/0x5b685863494c33f344081f75e5430c260c224a32?a=0xa6e0454e2e7b13a5978fe3a963831aa80753460e"
            target="_blank"
            className={styles.chartContainer__description}
          >
            <div className="color"></div>
            <div className={`${styles.title} descr `}>
              Advisory Board
              <svg
                data-v-055a1cab=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-055a1cab="" opacity="0.5">
                  <path
                    data-v-055a1cab=""
                    d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z"
                    fill="white"
                  ></path>
                </g>
                <defs data-v-055a1cab="">
                  <clipPath data-v-055a1cab="" id="clip0">
                    <rect data-v-055a1cab="" width="12" height="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`${styles.text} descr `}>600,000,000 CMCX (3%)</div>
          </a>
          <a
            href="https://etherscan.io/token/0x5b685863494c33f344081f75e5430c260c224a32?a=0x152e18f7b0fa1fb8182bf2a84d13ad03eb970300"
            target="_blank"
            className={styles.chartContainer__description}
          >
            <div className="color"></div>
            <div className={`${styles.title} descr `}>
              Strategic Acquisitions
              <svg
                data-v-055a1cab=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-055a1cab="" opacity="0.5">
                  <path
                    data-v-055a1cab=""
                    d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z"
                    fill="white"
                  ></path>
                </g>
                <defs data-v-055a1cab="">
                  <clipPath data-v-055a1cab="" id="clip0">
                    <rect data-v-055a1cab="" width="12" height="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`${styles.text} descr `}>400,000,000 CMCX (2%)</div>
          </a>
          <a href="##" target="_blank" className={`${styles.chartContainer__description} not `}>
            <div className="color"></div>
            <div className={`${styles.title} descr `}>
              Seed Round
              <svg
                data-v-055a1cab=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-055a1cab="" opacity="0.5">
                  <path
                    data-v-055a1cab=""
                    d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z"
                    fill="white"
                  ></path>
                </g>
                <defs data-v-055a1cab="">
                  <clipPath data-v-055a1cab="" id="clip0">
                    <rect data-v-055a1cab="" width="12" height="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`${styles.text} descr `}>4,000,000,000 CMCX (20%)</div>
          </a>
          <a href="##" target="_blank" className={`${styles.chartContainer__description} not `}>
            <div className="color"></div>
            <div className={`${styles.title} descr `}>
              IEO
              <svg
                data-v-055a1cab=""
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-055a1cab="" opacity="0.5">
                  <path
                    data-v-055a1cab=""
                    d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z"
                    fill="white"
                  ></path>
                </g>
                <defs data-v-055a1cab="">
                  <clipPath data-v-055a1cab="" id="clip0">
                    <rect data-v-055a1cab="" width="12" height="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`${styles.text} descr `}>4,000,000,000 CMCX (20%)</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Distribution;
