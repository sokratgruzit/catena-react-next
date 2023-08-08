import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../../Press.module.css';

SwiperCore.use([Navigation, Pagination]);

const Years = ({ handleYearClick, activeYear, allPress }) => {
  const years = Array.from(new Set(allPress.map(item => parseInt(item.createdAt.substring(0, 4))))).sort(
    (a, b) => b - a,
  );

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infContTitle}>
        <h2 className='ttl font-40'>Publics by years</h2>
      </div>
      <div className={`${styles.yearsStats}`}>
        <Swiper slidesPerView={1} spaceBetween={20} navigation pagination={{ clickable: true }}>
          {years.map(year => (
            <SwiperSlide key={year}>
              <div
                className={`ttl ${activeYear === year ? styles.activeCont : styles.pasCont}`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Years;
