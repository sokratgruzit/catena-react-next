import React, { useEffect, useState } from 'react';
import Slider from '../../../../UI/slider/Slider';
import CopyLink from '../pressInner/CopyLink';
import { useSelector } from 'react-redux';
import JoinCommunity from '../../../events/components/JoinCommunity';

import styles from '../../Press.module.css';

const PressItem = ({ item, slug }) => {
  const activeLang = useSelector(state => state.settings.activeLang);
  const sliderImages = [
    `${process.env.NEXT_PUBLIC_URL}/uploads/press/${item.image}`,
    `${process.env.NEXT_PUBLIC_URL}/uploads/press/${item.logo_image}`,
  ];

  const getCurrentPageURL = () => {
    return window.location.href;
  };

  return (
    <div>
      {!item ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='custum-text'>
            <h1>{item.title['en']['press.title']}</h1>
            <CopyLink
              data={[
                {
                  time: item.createdAt.substring(11, 19),
                  month: item.createdAt.substring(5, 10),
                  year: parseInt(item.createdAt.substring(0, 4)),
                  slug: item.slug,
                },
              ]}
              currentPageURL={getCurrentPageURL}
              showDetails={true}
              showCopyButton={true}
            />
            <Slider images={sliderImages} />
            <div>{item.description && <p>{item.inner_descr[activeLang]['press.description']}</p>}</div>
            <p>{item.text[activeLang]['press.text']}</p>
            <p>{item.inner_descr[activeLang]['press.description']}</p>
          </div>
        </>
      )}
      <div className={styles.joinCommunity}>
        <JoinCommunity />
      </div>
    </div>
  );
};

export default PressItem;
