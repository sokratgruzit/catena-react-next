import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '../../UI/button/Button';

import { useNftMarket } from '../../../hooks/useNftMarket';

import styles from './Profile.module.css';
import TabFilter from '../../UI/filters/TabFilter';
import filterStyles from '../../UI/filters/TabFilter.module.css';
import ListItemCard from '../../UI/listItem/ListItemCard';
import DataBox from '../../UI/dataBox/DataBox';

export default function Profile({ address }) {
  const [activeMenuItem, setActiveMenuItem] = useState('NFTs');
  const [activeTab, setActiveTab] = useState('Items');
  const [itemsList, setItemsList] = useState([]);
  
  const { 
    account,
    fetchNFTs,
  } = useNftMarket();
  const router = useRouter();
  const { profileId } = router.query;

  const switchTabModeHandler = mode => {
    setActiveMenuItem(mode);
  };

  const switchTableModeHandler = mode => {
    setActiveTab(mode);
  };

  let tabsRightData = [{ label: 'NFTs' }, { label: 'Achievements' }];
  let tabsData = [{ label: 'Items' }, { label: 'Activity' }];

  useEffect(() => {
    if (router.isReady) {
      const { tab } = router.query;
      if (tab === 'Items' || tab === 'Activity') {
        setActiveTab(tab);
      }
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (account) {
      fetchNFTs().then(items => {
        setItemsList(items?.map(item => {
          return <ListItemCard key={item.tokenURI} data={item} type={'nft_arrivals'} />;
        }))
      });
    }
  }, [account]);
  
  return (
    <div className={`${styles.profile} container`}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileImgWrapper}>
          <img className={styles.bgImg} src='/images/nft/profile/bg.png' alt='' />
          <img className={styles.avatarImg} src='/images/nft/profile/avatar.png' alt='' />
        </div>
      </div>
      <div className={styles.textWrapper}>
        <p className='font-20'>0xf5...303x</p>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M18.5401 15.1046C18.6744 14.9703 18.7593 14.7864 18.7593 14.5743L18.7593 5.99003C18.7581 5.7916 18.6788 5.60164 18.5385 5.46133C18.3982 5.32101 18.2082 5.24167 18.0098 5.2405L9.42549 5.2405C9.01537 5.2405 8.67596 5.57991 8.67596 5.99003C8.67596 6.40015 9.01537 6.73956 9.42549 6.73956L17.2602 6.73956L17.2602 14.5743C17.2602 14.9844 17.5996 15.3238 18.0098 15.3238C18.2148 15.3309 18.4057 15.239 18.5401 15.1046Z'
            fill='#212121'
          />
          <path
            d='M6.51937 18.5404L18.42 6.63982C18.7099 6.3499 18.7099 5.86907 18.42 5.57916C18.1301 5.28924 17.6492 5.28924 17.3593 5.57916L5.45871 17.4798C5.1688 17.7697 5.1688 18.2505 5.45871 18.5404C5.74863 18.8303 6.22946 18.8303 6.51937 18.5404Z'
            fill='#212121'
          />
        </svg>
      </div>
      <Button
        className='ttl'
        title={'Activate Profile'}
        type={'skyBlue'}
        onClick={() => {}}
        customStyles={{
          padding: '11px 34px',
          width: 'fit-content',
          margin: '0px auto',
          transition: '.5s',
        }}
      />
      <DataBox type={'statistics'} items={3} />

      <TabFilter
        onClick={switchTabModeHandler}
        activeMenu={activeMenuItem}
        data={tabsRightData}
        css={{
          wrap: filterStyles.activity__filterWrap,
          filter: filterStyles.activity__filter,
          active: filterStyles.activity__filterActive,
          item: filterStyles.activity__filter__item,
        }}
        showCloseButton={false}
        allowMultipleTabs={false}
        showClearButton={false}
      />
      {activeMenuItem === 'NFTs' ? (
        <div className={styles.table}>
          <TabFilter
            onClick={switchTableModeHandler}
            activeMenu={activeTab}
            data={tabsData}
            css={{
              wrap: filterStyles.Activity__filterWrap,
              filter: filterStyles.Activity__filter,
              active: filterStyles.Activity__filterActive,
              item: filterStyles.Activity__filter__item,
            }}
            showCloseButton={false}
            allowMultipleTabs={false}
            showClearButton={false}
            customStyles={{
              border: '1px solid #16202933',
              borderBottom: '1px solid #16202933',
              borderRadius: '20px 10px 0px 0px',
            }}
          />
          {activeTab === 'Items' ? (
            <div className={`${styles.itemsList} `}>{itemsList}</div>
          ) : activeTab === 'Activity' ? (
            <div className={`${styles.notFoundWrapper} `}>
              <div className={styles.noFound}>
                <img src='/images/nft/profile/noFound.png' alt='img' />
              </div>
            </div>
          ) : null}
        </div>
      ) : activeMenuItem === 'Achievements' ? (
        <div>
          <div className={styles.points}>
            <div className={styles.pointLogo}>
              <img src='/images/nft/profile/leaf1.png' alt='img' />
              <img src='/images/nft/profile/cup.png' alt='img' />
              <img src='/images/nft/profile/leaf2.png' alt='img' />
            </div>
            <div className={styles.totoalPoints}>
              <p className='font_51'>1080</p>
              <p>Total Point</p>
            </div>
          </div>
          <div className={styles.achivements}>
            <div className={`${styles.tableHeader} font_30 ttl`}>Achievements</div>
            <div className={styles.tableBody}>
              {/* {achivements.map((item, index) => {
                return (
                  <div key={item.id} className={styles.achivementsItem}>
                    <img src={item.img} alt='img' />
                    <div>
                      <p className='font-20 ttl'>{item.teaser}</p>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
