import { React } from 'react';
import { useSwiper } from 'swiper/react';

import { SmlArrowSvg } from '../../../svg/index';

import styles from './SlideIcons.module.css';

export default function SlideIcons() {
  const swiper = useSwiper();
  return (
    <>
      <div className={styles.icons}>
        <button className={styles.icon} onClick={() => swiper.slidePrev()}>
          <SmlArrowSvg className={styles.slidePrev} />
        </button>
        <button className={styles.icon} onClick={() => swiper.slideNext()}>
          <SmlArrowSvg className={styles.slideNext} />
        </button>
      </div>
    </>
  );
}
