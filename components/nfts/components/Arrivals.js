import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from "react-redux";

import ListItemCard from '../../UI/listItem/ListItemCard';
import FAQ from '../../home/faq/Faq';

import styles from './Arrivals.module.css';

const Arrivals = () => {
  const [showWhiteListedWallets, setShowWhiteListedWallets] = useState(false);
  const [toggle, setToggle] = useState(false);

  const newArrivals = useSelector(state => state.nftsState.newArrivals);
  
  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div>
        <div className={styles.Arrivals}>
          <div className={styles.Arrivals__item}>
            <p className={`font_51 container ttl`}>Newest Arrivals</p>
            <div className={styles.Arrivals__btn}>
              <Link href='/overview/nfts/activity'>
                <p className={`ttl ${styles.Arrivals__btnTxt} container `}>
                  View All{' '}
                  <svg width='20' height='14' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12.4303 13.8211C12.6203 13.8211 12.8103 13.7511 12.9603 13.6011L19.0303 7.53109C19.1698 7.38996 19.248 7.19952 19.248 7.00109C19.248 6.80266 19.1698 6.61223 19.0303 6.47109L12.9603 0.401094C12.6703 0.111094 12.1903 0.111094 11.9003 0.401094C11.6103 0.691094 11.6103 1.17109 11.9003 1.46109L17.4403 7.00109L11.9003 12.5411C11.6103 12.8311 11.6103 13.3111 11.9003 13.6011C12.0403 13.7511 12.2403 13.8211 12.4303 13.8211Z'
                      fill='#162029'
                    />
                    <path
                      d='M1.50008 7.75H18.3301C18.7401 7.75 19.0801 7.41 19.0801 7C19.0801 6.59 18.7401 6.25 18.3301 6.25H1.50008C1.09008 6.25 0.750078 6.59 0.750078 7C0.750078 7.41 1.09008 7.75 1.50008 7.75Z'
                      fill='#162029'
                    />
                  </svg>
                </p>
              </Link>
              <svg
                className={styles.Arrivals__btn__svg}
                width='14'
                height='11'
                viewBox='0 0 14 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.567 5.28027C13.567 5.05008 13.4756 4.82932 13.3128 4.66655L9.18074 0.534488C8.84179 0.195536 8.29224 0.195536 7.95329 0.534487C7.61434 0.873438 7.61434 1.42298 7.95329 1.76193L11.4716 5.28027L7.95329 8.79861C7.61434 9.13756 7.61434 9.68711 7.95329 10.0261C8.29224 10.365 8.84179 10.365 9.18074 10.0261L13.3128 5.894C13.4756 5.73123 13.567 5.51046 13.567 5.28027Z'
                  fill='#162029'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.4528 5.2805C13.4528 4.80115 13.0642 4.41256 12.5848 4.41256L1.12805 4.41256C0.6487 4.41256 0.26011 4.80115 0.26011 5.2805C0.26011 5.75985 0.6487 6.14844 1.12805 6.14844L12.5848 6.14844C13.0642 6.14844 13.4528 5.75985 13.4528 5.2805Z'
                  fill='#162029'
                />
              </svg>
            </div>
          </div>
          <div className={`${styles.Arrivals__itemsList} container`}>
            {newArrivals && newArrivals.map(item => {
              return <ListItemCard key={item.tokenId} data={item} type={'nft_arrivals'} />;
            })}
          </div>
        </div>
      </div>
      <div className={`${styles.FAQSection} custum-text`}>
        <div className='container'>
          <h2 className='ttl'>Frequently Asked Questions</h2>
        </div>
        <div className={`${styles.FAQWrapper} custum-text`}>
          <div className='container'>
            <h4 className='ttl'>How does it work?</h4>
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
