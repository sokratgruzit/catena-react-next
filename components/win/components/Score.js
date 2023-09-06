import Image from 'next/image';

import Button from '../../UI/button/Button';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';

import styles from './Score.module.css';

const Score = () => {
  return (
    <div className='container'>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <div>
            <svg width='44' height='51' viewBox='0 0 44 51' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_1528_5063)'>
                <path
                  d='M9.29882 22.5012C8.05644 22.5911 6.80911 22.4148 5.64109 21.9843C4.47307 21.5538 3.41155 20.8791 2.52821 20.0057C-0.355185 17.0418 0.546199 12.876 0.546199 12.876C3.07174 13.0306 5.44729 14.1208 7.20413 15.9316C8.05804 16.779 8.6942 17.8184 9.05881 18.9619C9.42341 20.1054 9.50573 21.3193 9.29882 22.5012Z'
                  fill='#627EEA'
                />
                <path
                  d='M19.8352 15.8806C19.6293 17.1026 19.162 18.2665 18.4649 19.2936C17.7678 20.3206 16.8571 21.1869 15.7943 21.8339C14.9347 20.9946 14.2913 19.9616 13.9186 18.8224C13.5459 17.6832 13.455 16.4714 13.6536 15.2898C14.0195 12.7963 15.3158 10.531 17.2847 8.94434C17.2847 8.94434 20.4395 11.8064 19.8352 15.8806Z'
                  fill='#627EEA'
                />
                <path
                  d='M24.2393 25.6431C24.1941 26.8811 23.8821 28.0951 23.3246 29.2029C22.7671 30.3108 21.977 31.2868 21.0076 32.065C20.0475 31.3435 19.2763 30.4026 18.7593 29.322C18.2422 28.2415 17.9945 27.0529 18.0372 25.857C18.0758 23.344 19.0629 20.9373 20.8028 19.1143C20.8028 19.1143 24.3059 21.5231 24.2393 25.6431Z'
                  fill='#627EEA'
                />
                <path
                  d='M31.3883 31.2547C31.464 32.4948 31.2703 33.7366 30.8205 34.8956C30.3707 36.0547 29.6753 37.1039 28.7815 37.972C27.756 37.3447 26.8979 36.4806 26.28 35.453C25.6621 34.4254 25.3027 33.2647 25.2323 32.0695C25.0377 29.5629 25.7962 27.0749 27.3577 25.0977C27.3577 25.0977 31.0657 27.15 31.3883 31.2547Z'
                  fill='#627EEA'
                />
                <path
                  d='M39.0971 35.8645C39.5201 37.0238 39.6891 38.2597 39.5929 39.4893C39.4966 40.719 39.1372 41.9139 38.5388 42.9942C37.3728 42.6892 36.2982 42.1085 35.4065 41.3016C34.5148 40.4947 33.8324 39.4855 33.4173 38.3599C32.5012 36.0161 32.5012 33.4161 33.4173 31.0723C33.4173 31.0723 37.6016 32.0246 39.0971 35.8645Z'
                  fill='#627EEA'
                />
                <path
                  d='M6.44734 7.67606C5.69961 3.60191 8.76226 0.678711 8.76226 0.678711C10.779 2.19251 12.15 4.40466 12.6034 6.8765C12.8438 8.05145 12.7957 9.26673 12.4631 10.4193C12.1306 11.5718 11.5234 12.6275 10.6931 13.497C9.60726 12.8859 8.66622 12.0499 7.9337 11.0456C7.20117 10.0413 6.69428 8.89216 6.44734 7.67606Z'
                  fill='#627EEA'
                />
                <path
                  d='M8.94195 24.808C10.0079 25.3661 10.9232 26.1711 11.6105 27.155C12.2977 28.1388 12.7368 29.2727 12.8906 30.4609C11.7297 30.9108 10.4852 31.1077 9.24117 31.0383C7.99714 30.9689 6.78259 30.6348 5.67957 30.0585C2.05356 28.0775 1.68481 23.8557 1.68481 23.8557C4.13849 23.259 6.72793 23.5988 8.94195 24.808Z'
                  fill='#627EEA'
                />
                <path
                  d='M14.0738 32.8183C15.24 33.1246 16.3146 33.7063 17.2062 34.514C18.0978 35.3217 18.7802 36.3316 19.1953 37.4577C18.1642 38.1528 16.9952 38.6197 15.7671 38.8271C14.539 39.0344 13.2804 38.9773 12.0764 38.6596C8.09193 37.529 6.79107 33.4956 6.79107 33.4956C9.04786 32.3714 11.6465 32.1298 14.0738 32.8183Z'
                  fill='#627EEA'
                />
                <path
                  d='M19.9269 39.5505C21.1297 39.4934 22.3286 39.7251 23.4223 40.226C24.5161 40.7268 25.4726 41.482 26.2109 42.4278C25.4391 43.402 24.4657 44.1998 23.3568 44.7674C22.2479 45.335 21.0293 45.6591 19.7835 45.7177C15.6504 45.8348 13.1819 42.382 13.1819 42.382C14.9944 40.6316 17.4013 39.6212 19.9269 39.5505Z'
                  fill='#627EEA'
                />
                <path
                  d='M29.2119 44.4554C30.3989 44.2552 31.617 44.3427 32.7627 44.7107C33.9084 45.0786 34.9479 45.716 35.793 46.5688C35.1445 47.6263 34.2754 48.5332 33.2443 49.2281C32.2133 49.923 31.0442 50.3899 29.8162 50.5971C25.719 51.2083 22.851 48.0763 22.851 48.0763C24.4421 46.1218 26.7112 44.8301 29.2119 44.4554Z'
                  fill='#627EEA'
                />
                <path
                  d='M10.0525 15.4785L12.1011 15.5447C12.0755 16.3799 11.8348 36.0682 43.4395 45.2911L42.8761 47.2314C9.64788 37.54 10.0422 15.6924 10.0525 15.4785Z'
                  fill='#627EEA'
                />
              </g>
              <defs>
                <clipPath id='clip0_1528_5063'>
                  <rect width='43' height='50' fill='white' transform='matrix(-1 0 0 1 43.4141 0.678711)' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <Image layout='fill' src={'/images/win/spaceBoy.png'} alt='spaceBoy' objectFit={'contain'} />
          </div>
          <div>
            <svg width='44' height='51' viewBox='0 0 44 51' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_1528_5075)'>
                <path
                  d='M34.5293 22.5012C35.7717 22.5911 37.019 22.4148 38.187 21.9843C39.3551 21.5538 40.4166 20.8791 41.2999 20.0057C44.1833 17.0418 43.2819 12.876 43.2819 12.876C40.7564 13.0306 38.3808 14.1208 36.624 15.9316C35.7701 16.779 35.1339 17.8184 34.7693 18.9619C34.4047 20.1054 34.3224 21.3193 34.5293 22.5012Z'
                  fill='#627EEA'
                />
                <path
                  d='M23.9929 15.8806C24.1988 17.1026 24.6661 18.2665 25.3632 19.2936C26.0603 20.3206 26.971 21.1869 28.0338 21.8339C28.8934 20.9946 29.5368 19.9616 29.9095 18.8224C30.2822 17.6832 30.3731 16.4714 30.1746 15.2898C29.8086 12.7963 28.5123 10.531 26.5434 8.94434C26.5434 8.94434 23.3886 11.8064 23.9929 15.8806Z'
                  fill='#627EEA'
                />
                <path
                  d='M19.5888 25.6431C19.6341 26.8811 19.946 28.0951 20.5035 29.2029C21.061 30.3108 21.8511 31.2868 22.8205 32.065C23.7806 31.3435 24.5518 30.4026 25.0688 29.322C25.5859 28.2415 25.8336 27.0529 25.7909 25.857C25.7524 23.344 24.7652 20.9373 23.0253 19.1143C23.0253 19.1143 19.5222 21.5231 19.5888 25.6431Z'
                  fill='#627EEA'
                />
                <path
                  d='M12.4398 31.2547C12.3642 32.4948 12.5578 33.7366 13.0076 34.8956C13.4575 36.0547 14.1529 37.1039 15.0466 37.972C16.0721 37.3447 16.9303 36.4806 17.5482 35.453C18.166 34.4254 18.5254 33.2647 18.5958 32.0695C18.7904 29.5629 18.0319 27.0749 16.4704 25.0977C16.4704 25.0977 12.7624 27.15 12.4398 31.2547Z'
                  fill='#627EEA'
                />
                <path
                  d='M4.73105 35.8645C4.30802 37.0238 4.13898 38.2597 4.23525 39.4893C4.33153 40.719 4.6909 41.9139 5.28929 42.9942C6.45529 42.6892 7.52989 42.1085 8.42161 41.3016C9.31333 40.4947 9.99575 39.4855 10.4108 38.3599C11.3269 36.0161 11.3269 33.4161 10.4108 31.0723C10.4108 31.0723 6.22653 32.0246 4.73105 35.8645Z'
                  fill='#627EEA'
                />
                <path
                  d='M37.3808 7.67606C38.1285 3.60191 35.0659 0.678711 35.0659 0.678711C33.0491 2.19251 31.6781 4.40466 31.2248 6.8765C30.9843 8.05145 31.0325 9.26673 31.365 10.4193C31.6976 11.5718 32.3048 12.6275 33.1351 13.497C34.2209 12.8859 35.1619 12.0499 35.8944 11.0456C36.627 10.0413 37.1338 8.89216 37.3808 7.67606Z'
                  fill='#627EEA'
                />
                <path
                  d='M34.8862 24.808C33.8202 25.3661 32.9049 26.1711 32.2177 27.155C31.5304 28.1388 31.0913 29.2727 30.9375 30.4609C32.0984 30.9108 33.3429 31.1077 34.587 31.0383C35.831 30.9689 37.0455 30.6348 38.1486 30.0585C41.7746 28.0775 42.1433 23.8557 42.1433 23.8557C39.6896 23.259 37.1002 23.5988 34.8862 24.808Z'
                  fill='#627EEA'
                />
                <path
                  d='M29.7543 32.8183C28.5881 33.1246 27.5136 33.7063 26.6219 34.514C25.7303 35.3217 25.0479 36.3316 24.6328 37.4577C25.6639 38.1528 26.8329 38.6197 28.061 38.8271C29.2891 39.0344 30.5477 38.9773 31.7517 38.6596C35.7362 37.529 37.0371 33.4956 37.0371 33.4956C34.7803 32.3714 32.1816 32.1298 29.7543 32.8183Z'
                  fill='#627EEA'
                />
                <path
                  d='M23.9012 39.5505C22.6985 39.4934 21.4996 39.7251 20.4058 40.226C19.312 40.7268 18.3556 41.482 17.6172 42.4278C18.3891 43.402 19.3624 44.1998 20.4713 44.7674C21.5802 45.335 22.7988 45.6591 24.0446 45.7177C28.1777 45.8348 30.6462 42.382 30.6462 42.382C28.8338 40.6316 26.4268 39.6212 23.9012 39.5505Z'
                  fill='#627EEA'
                />
                <path
                  d='M14.6163 44.4554C13.4292 44.2552 12.2111 44.3427 11.0654 44.7107C9.91971 45.0786 8.88019 45.716 8.03516 46.5688C8.68362 47.6263 9.55273 48.5332 10.5838 49.2281C11.6149 49.923 12.7839 50.3899 14.0119 50.5971C18.1091 51.2083 20.9772 48.0763 20.9772 48.0763C19.386 46.1218 17.1169 44.8301 14.6163 44.4554Z'
                  fill='#627EEA'
                />
                <path
                  d='M33.7756 15.4785L31.727 15.5447C31.7527 16.3799 31.9934 36.0682 0.388672 45.2911L0.952031 47.2314C34.1802 37.54 33.7859 15.6924 33.7756 15.4785Z'
                  fill='#627EEA'
                />
              </g>
              <defs>
                <clipPath id='clip0_1528_5075'>
                  <rect width='43' height='50' fill='white' transform='translate(0.414062 0.678711)' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={`${styles.scoreBorder}`}>
          <CornerDecor />
          <div className={styles.scoreTitle}>
            <div className={styles.ttle}>
              <h3 className='ttl'>Your Score</h3>
            </div>
            <div>
              <h4 className='ttl'>Check Your Rank</h4>
              <p className={styles.TiTle}>Connect wallet to view</p>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              title={'Connect Wallet'}
              className={styles.btn}
              customStyles={{
                width: '100%',
                padding: '7px 20px',
                fontSize: '16px',
                lineHeight: '22px',
                marginTop: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
