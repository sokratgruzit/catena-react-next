/* eslint-disable @next/next/no-img-element */
import styles from './Tokenomics.module.css';

function Distribution() {
  let data = [
    {
      svg: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='10' cy='10' r='8' stroke='#0500FF' strokeWidth='4' />
        </svg>
      ),
      teaser: 'Reserve',
      text: '6,000,000,000 CXRE (30%)',
    },
    {
      svg: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='10' cy='10' r='8' stroke='#FF8D4D' strokeWidth='4' />
        </svg>
      ),
      teaser: 'Marketing & Operations',
      text: '1,000,000,0000 CXRE (10%)',
    },
    {
      svg: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='10' cy='10' r='8' stroke='#817EFF' strokeWidth='4' />
        </svg>
      ),
      teaser: 'Seed Round (Private Founders)',
      text: '4,000,000,0000 CXRE (20%)',
    },
    {
      svg: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='10' cy='10' r='8' stroke='#E2DD5D' strokeWidth='4' />
        </svg>
      ),
      teaser: 'Advisory Board',
      text: '600,000,0000 CXRE (3%)',
    },
    {
      svg: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='10' cy='10' r='8' stroke='#D5D5FF' strokeWidth='4' />
        </svg>
      ),
      teaser: 'IEO',
      text: '4,000,000,0000 CXRE (20%)',
    },
    {
      svg: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='10' cy='10' r='8' stroke='#4ECB6A' strokeWidth='4' />
        </svg>
      ),
      teaser: 'Strategic Acquisitions',
      text: '400,000,0000 CXRE (2%)',
    },
    {
      svg: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='10' cy='10' r='8' stroke='#FFBB95' strokeWidth='4' />
        </svg>
      ),
      teaser: 'Ecosystem Rewards',
      text: '2,000,000,0000 CXRE (10%)',
    },
    {
      svg: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='10' cy='10' r='8' stroke='#99FFB0' strokeWidth='4' />
        </svg>
      ),
      teaser: 'Team',
      text: '2,000,000,0000 CXRE (10%)',
    },
  ];

  return (
    <div className={`${styles.pt128}`}>
      <h2 className='font-40 ttl container'>Token Distribution</h2>
      <div className='container_bordered'>
        <div className='container_bordered-child'>
          <div className={styles.distribution_container}>
            <div className={styles.distribution_teaser}>
              <p className={` ttl ${styles.orange}`}>Total Supply</p>
              <p>20,000,000,000 CXRE</p>
            </div>
            <div className={`${styles.distribution_flex}`}>
              <div className={`${styles.svgContainer}`}>
                <svg width='181' height='247' viewBox='0 0 181 247' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M4 4C99.1157 4 176.222 81.1065 176.222 176.222C176.222 199.859 171.461 222.383 162.844 242.889'
                    stroke='#0500FF'
                    strokeWidth='8'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 26.2222C74.1937 26.2222 133.126 74.4371 149.486 139.556'
                    stroke='#817EFF'
                    strokeWidth='8'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 48.4445C63.6393 48.4445 113.736 89.3033 127.823 144.556'
                    stroke='#D5D5FF'
                    strokeWidth='8'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 70.6667C29.0265 70.6667 52.0187 79.3762 70.1111 93.9296'
                    stroke='#FFBB95'
                    strokeWidth='8'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 92.8889C24.0284 92.8889 42.4065 99.9545 56.7778 111.729'
                    stroke='#FF8D4D'
                    strokeWidth='8'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 115.111C9.57634 115.111 14.9782 115.858 20.1111 117.257'
                    stroke='#E2DD5D'
                    strokeWidth='8'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 137.333C6.86041 137.333 9.6487 137.642 12.3333 138.228'
                    stroke='#4ECB6A'
                    strokeWidth='8'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 159.556C8.66232 159.556 12.8775 161.47 15.9024 164.556'
                    stroke='#99FFB0'
                    strokeWidth='8'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <div className={styles.distribution_grid}>
                {data?.map((item, i) => {
                  return (
                    <div key={i} className={`${styles.alignItemsCenter} ${styles.flex}`}>
                      {item.svg}
                      <div className={styles.textWrap}>
                        <p className={`${styles.orange} ttl `}>{item.teaser}</p>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Distribution;
