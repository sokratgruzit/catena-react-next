import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@catena-network/catena-ui-module';
import Link from 'next/link';
import styles from './Feature.module.css';
import CopyIcon from '../../../../svg/careers/CopyIcon';


const Feature = ({ featureLinkList, title, showButton, openPositions }) => {
  const [copiedLink, setCopiedLink] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(null);
  const activeLang = useSelector(state => state.settings.activeLang);

  const handlePopupClick = (index) => {
    setCopiedLink(`${process.env.NEXT_PUBLIC_URL}/open-positions/${featureLinkList[index].id}`);
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
        // console.log('Link copied!');
      })
      .catch((error) => {
        // console.error('Failed to copy link:', error);
      });
  };


  return (
    <div>
      <div className='container_bordered'>
        <h2 className={`${styles.font__51} font-40 ttl`} data-aos="fade-up">{title}</h2>
        <div className='container_bordered-child'>
          <div className={`${styles.openPositionsList}`}>
            {openPositions?.map((item, index) => {
              console.log(openPositions)
              return (
                <div className={styles.openPositionsListItem} key={index}>
                  <Link href={`/overview/careers/${item.slug}`} locale={activeLang}>
                    <div>
                      <span className='ttl'>{item.title['en']['openPosition.title']}</span>
                    </div>
                  </Link>
                  {isPopupVisible === index && (
                    <div className={styles.popup}>
                      <p style={{ color: 'white' }}>Copied!</p>
                    </div>
                  )}
                  <div
                    className={styles.openPositionsListItemSvg}
                    onClick={() => {
                      // handleCopy(`http://localhost:3000/overview/careers/${item.id}`);
                      // handlePopupClick(index);
                    }}
                  >
                    <CopyIcon />
                  </div>
                  <p className='ttl' key={index} style={{ display: "flex", gap: '10px' }}>
                    <span>{item?.department['en']["department.departmentName"]} {item?.type && "/"}</span>
                    <span> {item?.type} {item?.remote && "/"}</span>
                    <span>{item?.remote === "Yes" ? "Remote" : ""}</span>
                  </p>
                </div>
              )
            })}
          </div>
          {showButton && (
            <Link href={'careers/open-positions'} locale={activeLang}>
              <Button
                label={'View all open position'}
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

