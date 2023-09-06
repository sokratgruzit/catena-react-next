import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ListItemCard from '../../UI/listItem/ListItemCard';
import styles from './Arrivals.module.css';
import CommunityAuctionsFAQ from './CommunityAuctionsFAQ';

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
            <p className={`font_51 container ttl`}>Newest Arrivals</p>
            <div className={styles.Arrivals__btn}>
              <Link href='/overview/nfts/activity'>
                <p className={`ttl ${styles.Arrivals__btnTxt} container `}>
                  View All
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
        <h2 className='ttl'>Frequently Asked Questions</h2>
        <div className={`${styles.FAQWrapper} custum-text`}>
          <h4 className='ttl'>How does it work?</h4>
          <CommunityAuctionsFAQ setToggle={setToggle} />
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
