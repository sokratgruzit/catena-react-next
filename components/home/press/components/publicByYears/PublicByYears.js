import Link from 'next/link';

import styles from '../../Press.module.css';

const PublicByYears = ({ filterData, activeLang }) => {
  return (
    <div className={styles.statisticContainer}>
      {filterData ? (
        filterData.map((item, index) => {
          return (
            <Link key={index} href={`/home/press/${encodeURIComponent(item.slug)}`}>
              <div className={styles.icCont}>
                <img src={`http://localhost:4003/uploads/press/${item?.logo_image}`} className={styles.icon} />
                <p>{item.title[activeLang]['press.title']}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <div className={styles.erLoadContainer}>Loading</div>
      )}
      <div className={styles.pagCont}>
        <div className={styles.pagination}>pagination</div>
      </div>
    </div>
  );
};

export default PublicByYears;