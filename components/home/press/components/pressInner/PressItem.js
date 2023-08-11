import React, { useEffect, useState } from 'react';
import Slider from '../../../../UI/slider/Slider';
import CopyLink from '../pressInner/CopyLink';
import { useSelector } from 'react-redux';
import JoinCommunity from '../../../events/components/JoinCommunity';
import styles from '../../Press.module.css';
import PublicByYears from '../publicByYears/PublicByYears';

const PressonePress = ({ onePress, press }) => {
  const activeLang = useSelector(state => state.settings.activeLang);
  const sliderImages = [
    `${process.env.NEXT_PUBLIC_URL}/uploads/press/${onePress.image}`,
    `${process.env.NEXT_PUBLIC_URL}/uploads/press/${onePress.logo_image}`,
  ];

  const getCurrentPageURL = () => {
    return window.location.href;
  };

  return (
    <div className='container pT-180'>
      {!onePress ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='custum-text'>
            <h1>{onePress.title['en']['press.title']}</h1>
            <CopyLink
              data={[
                {
                  time: onePress.createdAt.substring(11, 19),
                  month: onePress.createdAt.substring(5, 10),
                  year: parseInt(onePress.createdAt.substring(0, 4)),
                  slug: onePress.slug,
                },
              ]}
              currentPageURL={getCurrentPageURL}
              showDetails={true}
              showCopyButton={true}
            />
            <Slider images={sliderImages} />
            <div>{onePress.description && <p>{onePress.inner_descr[activeLang]['press.description']}</p>}</div>
            <p>{onePress.text[activeLang]['press.text']}</p>
            <p>{onePress.inner_descr[activeLang]['press.description']}</p>
          </div>
        </>
      )}
      <PublicByYears />
      <div className={styles.joinCommunity}>
        <JoinCommunity />
      </div>
    </div>
  );
};

export default PressonePress;
