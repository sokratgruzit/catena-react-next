import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './Card.module.css';

const Card = ({ dataArr, fileAdress, title, description, slugType }) => {
  const activeLang = useSelector(state => state.settings.activeLang);

  return (
    <>
      {dataArr.map(item => {
        return (
          <Link href={`/home/press/${item.slug}`} key={item._id}>
            <div className={styles.mapCont}>
              <div className={styles.pressImageCont}>
                <img src={`${fileAdress}/${item?.image}`} alt={`Image`} className={styles.pressImage} />
                <button className={styles.category}>Category</button>
              </div>
              <div className={styles.imgPartBack}>
                <img src={`${fileAdress}${item?.logo_image}`} alt={`ImagePart`} className={styles.icon} />
              </div>
              {item.imgPartTwo && <button className={styles.digital}>DIGITAL</button>}
              <div className={styles.cardDesc}>
                <h2 className={`${styles.headtitle} title font-40`}>{item.title[activeLang][title]}</h2>
                {item.inner_descr && <p className={styles.descP}>{item.inner_descr[activeLang][description]}</p>}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
