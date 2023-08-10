import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Button, TableElement } from '@catena-network/catena-ui-module';
import createAxiosInstance from '../../../../../pages/api/axios';
SwiperCore.use([Navigation, Pagination]);
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useRouter } from 'next/router';

import 'swiper/css';
import styles from '../../Press.module.css';

const PublicByYears = () => {
  const axios = createAxiosInstance();
  const itemsPerPage = 1;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const activeLang = useSelector(state => state.settings.activeLang);
  const [press, setPressData] = useState([]);
  const years = ["2020", "2021", "2022", "2023"];
  const [activeYear, setActiveYear] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  
  const router = useRouter();
  const handlePageChange = page => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };


  const fetchDataByYear = async (year) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/press/get-press-by-year`, {
        year: year,
        page: currentPage,
        limit: itemsPerPage,
      });
      const pressData = response.data.press;
      setFilterData(pressData);
      setTotalCount(response.data.totalPages)
      setCurrentPage(response.data.currentPage)
      console.log('pressData', response.data);
    } catch (error) {
      console.error('Error fetching press data by year:', error);
    }
  };


  const handleYearClick = (year) => {
    const data = press.filter(item => {
      const itemYear = item.year.substring(0, 4);
      return itemYear === year;
    });
    setActiveYear(year);
    setFilterData(data);
    fetchDataByYear(year);
  };

  useEffect(() => {
    handleYearClick('2023');
  }, []);

  return (
    <div className='container_bordered'>
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
      <div className={`${styles.statisticContainer} container_bordered-child`}>
        {filterData ? (
          filterData.map((item, index) => {
            return (
              <Link key={index} href={`/overview/press/${item.slug}`}>
                <div className={styles.icCont}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}/uploads/press/${item?.logo_image}`}
                    className={styles.icon}
                  />
                  <p>{item.title[activeLang]['press.title']}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <div className={styles.erLoadContainer}>Loading</div>
        )}
      </div>
      <TableElement
          customStyle={{ zIndex: '10000' }}
          type='pagination'
          currentPage={currentPage}
          totalCount={totalCount}
          onPageChange={page => handlePageChange(page)}
        />
    </div>
  );
};

export default PublicByYears;
