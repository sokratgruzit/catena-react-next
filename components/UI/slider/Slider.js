import React, { useState } from 'react';

import styles from './Slider.module.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={`${styles.arrowButton} ${styles.prev}`} onClick={goToPreviousSlide}>
        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M16.1829 4.99999L20.0806 8.81889L11.3107 17.3228L39.2852 17.3228L39.2852 22.6772L11.3107 22.6772L20.0806 31.1811L16.1829 35L0.713727 20L16.1829 4.99999Z'
            fill='#0500FF'
          />
        </svg>
      </button>
      <div className={styles.imageWrapper}>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className={styles.image} />
      </div>
      <button className={`${styles.arrowButton} ${styles.next}`} onClick={goToNextSlide}>
        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M23.8171 4.99999L19.9194 8.81889L28.6893 17.3228L0.714843 17.3228L0.714843 22.6772L28.6893 22.6772L19.9194 31.1811L23.8171 35L39.2863 20L23.8171 4.99999Z'
            fill='#0500FF'
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
