// PublicByYears.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@catena-network/catena-ui-module';
import styles from '../../Press.module.css';
import Years from '../filterWithYears/Years';

const PublicByYears = ({ press }) => {
  const itemsPerPage = 5;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [activeYear, setActiveYear] = useState('');
  const [filterData, setFilterData] = useState([]);
  const activeLang = useSelector(state => state.settings.activeLang);

  const handleYearClick = year => {
    setActiveYear(year);
    const data = press.filter(item => {
      const itemYear = item.createdAt.substring(0, 4);
      return itemYear === year;
    });
    setFilterData(data);
  };

  useEffect(() => {
    handleYearClick(activeYear || '2023');
  }, [press, activeYear]);

  const loadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
  };

  const loadLess = () => {
    setVisibleItems(itemsPerPage);
  };

  const canLoadMore = filterData && Array.isArray(filterData) && visibleItems < filterData.length;

  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className='container_bordered'>
      <Years handleYearClick={handleYearClick} activeYear={activeYear} allPress={press} />
      <div className={`${styles.statisticContainer} container_bordered-child`}>
        {filterData && Array.isArray(filterData) ? (
          filterData.slice(0, visibleItems).map((item, index) => {
            return (
              <Link key={index} href={`/overview/press/${item.slug}`}>
                <div className={styles.icCont} data-aos='fade-up'>
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
        <div>
          {canLoadMore ? (
            <Button
              data-aos='fade-up'
              onClick={loadMore}
              label={'Load More Publics'}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={false}
              element={'button'}
              disabled={false}
              className={`${styles.pagCont}`}
            />
          ) : (
            visibleItems > itemsPerPage && (
              <Button
                data-aos='fade-up'
                onClick={loadLess}
                label={'Load Less Publics'}
                size={'btn-lg'}
                type={'btn-secondary'}
                arrow={false}
                element={'button'}
                disabled={false}
                className={`${styles.pagCont}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicByYears;
