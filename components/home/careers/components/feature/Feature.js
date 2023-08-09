import React, { useState, useEffect } from 'react';
import { Button } from '@catena-network/catena-ui-module';
import Link from 'next/link';
import styles from './Feature.module.css';
import createAxiosInstance from '../../../../../pages/api/axios';


const Feature = ({ featureLinkList, title, showButton }) => {
  const [copiedLink, setCopiedLink] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(null);

  const handlePopupClick = (index) => {
    setCopiedLink(`${process.env.NEXT_PUBLIC_URL}/careers/${featureLinkList[index].id}`);
    setPopupVisible(index);
    setTimeout(() => {
      setPopupVisible(null);
    }, 3000);
  };

  const handleCopy = (link) => {
    setCopiedLink(link);
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log('Link copied!');
      })
      .catch((error) => {
        console.error('Failed to copy link:', error);
      });
  };

  if (!featureLinkList) {
    return null;
  }

  const [allCareers, setAllCareers] = useState(null)
  const axios = createAxiosInstance();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/careers/get-all-careers`)
      .then(res => {
        // console.log(res.data);
        setAllCareers(res.data)
      })
      .catch(err => {
        console.log(err?.response);
      });
  });

  return (
    <div>
      <div className='container_bordered'>
        <h2 className={`${styles.font__51} font-40 ttl`}>{title}</h2>
        <div className='container_bordered-child'>
          <div className={`${styles.openPositionsList}`}>
            {/* {allCareers?.map((item, index) => {
              // console.log(item);
              return (
                <div className={styles.openPositionsListItem} key={index}>
                  <Link href={`/overview/careers/${item._id}`}>
                    <div>
                      <span className='ttl'>{item.title['en']['career.title']}</span>
                    </div>
                  </Link>
                  {isPopupVisible === index && (
                    <div className={styles.popup}>
                      <p style={{ color: 'white' }}>Copied!</p>
                    </div>
                  )}
                  <svg
                    className={styles.openPositionsListItemSvg}
                    onClick={() => {
                      // handleCopy(`http://localhost:3000/overview/careers/${item.id}`);
                      handlePopupClick(index);
                    }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M16.498 18.25H14.988C14.578 18.25 14.238 17.91 14.238 17.5C14.238 17.09 14.578 16.75 14.988 16.75H16.498C19.118 16.75 21.248 14.62 21.248 12C21.248 9.38 19.118 7.25 16.498 7.25H14.998C14.7991 7.25 14.6083 7.17098 14.4677 7.03033C14.327 6.88968 14.248 6.69891 14.248 6.5C14.248 6.30109 14.327 6.11032 14.4677 5.96967C14.6083 5.82902 14.7991 5.75 14.998 5.75H16.498C19.948 5.75 22.748 8.55 22.748 12C22.748 15.45 19.948 18.25 16.498 18.25ZM9 18.25H7.5C4.05 18.25 1.25 15.45 1.25 12C1.25 8.55 4.05 5.75 7.5 5.75H9C9.41 5.75 9.75 6.09 9.75 6.5C9.75 6.91 9.41 7.25 9 7.25H7.5C4.88 7.25 2.75 9.38 2.75 12C2.75 14.62 4.88 16.75 7.5 16.75H9C9.41 16.75 9.75 17.09 9.75 17.5C9.75 17.91 9.41 18.25 9 18.25Z'
                      fill='#162029'
                    />
                    <path
                      d='M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z'
                      fill='#162029'
                    />
                  </svg>
                  <p>
                    <span className='ttl' key={index}>
                      {item?.department}
                      {item?.type}
                      {item?.remote}
                    </span>
                  </p>
                </div>
              )
            })} */}
            {featureLinkList.map((item, index) => (
              <div className={styles.openPositionsListItem} key={item.id}>
                <Link href={`/overview/careers/${item.id}`} key={item.id}>
                  <div>
                    <span style={{ color: '#162029' }} className='ttl'>{item.title}</span>
                  </div>
                </Link>
                {isPopupVisible === index && (
                  <div className={styles.popup}>
                    <p style={{ color: 'white' }}>Copied!</p>
                  </div>
                )}
                <svg
                  className={styles.openPositionsListItemSvg}
                  onClick={() => {
                    handleCopy(`${process.env.NEXT_PUBLIC_URL}/careers/${item.id}`);
                    handlePopupClick(index);
                  }}
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M16.498 18.25H14.988C14.578 18.25 14.238 17.91 14.238 17.5C14.238 17.09 14.578 16.75 14.988 16.75H16.498C19.118 16.75 21.248 14.62 21.248 12C21.248 9.38 19.118 7.25 16.498 7.25H14.998C14.7991 7.25 14.6083 7.17098 14.4677 7.03033C14.327 6.88968 14.248 6.69891 14.248 6.5C14.248 6.30109 14.327 6.11032 14.4677 5.96967C14.6083 5.82902 14.7991 5.75 14.998 5.75H16.498C19.948 5.75 22.748 8.55 22.748 12C22.748 15.45 19.948 18.25 16.498 18.25ZM9 18.25H7.5C4.05 18.25 1.25 15.45 1.25 12C1.25 8.55 4.05 5.75 7.5 5.75H9C9.41 5.75 9.75 6.09 9.75 6.5C9.75 6.91 9.41 7.25 9 7.25H7.5C4.88 7.25 2.75 9.38 2.75 12C2.75 14.62 4.88 16.75 7.5 16.75H9C9.41 16.75 9.75 17.09 9.75 17.5C9.75 17.91 9.41 18.25 9 18.25Z'
                    fill='#162029'
                  />
                  <path
                    d='M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z'
                    fill='#162029'
                  />
                </svg>
                <p>
                  {item.list.map((item, index) => (
                    <span style={{ color: '#162029' }} className='ttl' key={index}>
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          {showButton && (
            <Link href={'open-position'}>
              <Button
                label={'View all open positions'}
                size={'btn-lg'}
                type={'btn-primary'}
                arrow={'arrow-right'}
                element={'button'}
                onClick={() => { console.log('rame'); }}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feature;

