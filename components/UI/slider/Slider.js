import React, { useState } from 'react';

import styles from './Slider.module.css';

const Slider = ({ images, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.wrapper}>
        {children}
        <div className={`${styles.mainSliderItemNav}`}>
          <div className={styles.arrow} onClick={goToPreviousSlide}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08002'
                stroke='#162029'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className={styles.arrow} onClick={goToNextSlide}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.00016 19.92L15.5202 13.4C16.2902 12.63 16.2902 11.37 15.5202 10.6L9.00016 4.08002'
                stroke='#162029'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className={styles.image} />
      </div>
    </div>
  );
};

export default Slider;
