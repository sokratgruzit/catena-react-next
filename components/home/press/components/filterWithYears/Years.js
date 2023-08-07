import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../../Press.module.css';

SwiperCore.use([Navigation, Pagination]);

const Years = ({ handleYearClick, activeYear }) => {
  const years = [
    { year: '2023', label: '2023' },
    { year: '2020', label: '2022' },
    { year: '2019', label: '2021' },
    { year: '2018', label: '2020' },
  ];

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infContTitle}>
        <h2 className='ttl font-40'>Publics by years</h2>
      </div>
      <div className={`${styles.yearsStats}`}>
        <Swiper slidesPerView={1} spaceBetween={20} navigation pagination={{ clickable: true }}>
          {years.map(yearItem => (
            <SwiperSlide key={yearItem.year}>
              <div
                className={`ttl ${activeYear === yearItem.year ? styles.activeCont : styles.pasCont}`}
                onClick={() => handleYearClick(yearItem.year)}
              >
                {yearItem.label}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Years;
