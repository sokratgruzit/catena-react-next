import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@catena-network/catena-ui-module';
import styles from '../../Press.module.css';

const PublicByYears = ({ filterData, activeLang }) => {
  const itemsPerPage = 5;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const loadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
  };

  const loadLess = () => {
    setVisibleItems(itemsPerPage);
  };

  const canLoadMore = filterData && Array.isArray(filterData) && visibleItems < filterData.length;

  return (
    <div className='container_bordered'>
      <div className={`${styles.statisticContainer} container_bordered-child`}>
        {filterData && Array.isArray(filterData) ? (
          filterData.slice(0, visibleItems).map((item, index) => {
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
        <div>
          {canLoadMore ? (
            <Button
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
