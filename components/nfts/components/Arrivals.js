import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ListItemCard from '../../UI/listItem/ListItemCard';
import styles from './Arrivals.module.css';
import CommunityAuctionsFAQ from '../../faqOld/communityAuctionsFAQ/CommunityAuctionsFAQ';

const Arrivals = props => {
  const [showWhiteListedWallets, setShowWhiteListedWallets] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div>
        <div className={styles.Arrivals}>
          <div className={styles.Arrivals__item}>
            <p className={`font_30 container`}>Newest Arrivals</p>
            <div className={styles.Arrivals__btn}>
              <Link href='/overview/nfts/activity'>
                <p className={`${styles.Arrivals__btnTxt} container`}>View All</p>
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
            {props.arrivals.map(item => {
              return <ListItemCard key={item.id} data={item} type={'nft_arrivals'} />;
            })}
          </div>
        </div>
      </div>
      <div className={`${styles.FAQSection} custum-text`}>
        <div className='container'>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={`${styles.FAQWrapper} custum-text`}>
          <div className='container'>
            <h4>How does it work?</h4>
            <CommunityAuctionsFAQ setToggle={setToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
