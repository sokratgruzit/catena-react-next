import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './Card.module.css';

const Card = ({ item }) => {
  const activeLang = useSelector(state => state.settings.activeLang);

  return (
    <Link href={`/home/press/${encodeURIComponent(item.slug)}`}>
      <div key={item._id} className={styles.mapCont}>
        <div className={styles.pressImageCont}>
          <img src={`http://localhost:4003/uploads/press/${item?.image}`} alt={`Image`} className={styles.pressImage} />
          <button className={styles.category}>Category</button>
        </div>
        <div className={styles.imgPartBack}>
          <img
            src={`http://localhost:4003/uploads/press/${item?.logo_image}`}
            alt={`ImagePart`}
            className={styles.icon}
          />
        </div>
        {item.imgPartTwo && <button className={styles.digital}>DIGITAL</button>}
        <div className={styles.cardDesc}>
          <h2 className={`${styles.headtitle} title font-40`}>{item.title[activeLang]['press.title']}</h2>
          {item.description && <p className={styles.descP}>{item.inner_descr[activeLang]['press.description']}</p>}
        </div>
      </div>
    </Link>
  );
};

export default Card;
