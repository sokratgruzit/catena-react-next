import React from 'react';
import Link from 'next/link';
import styles from './Card.module.css';

const Card = ({ dataArr }) => {
  return (
    <>
      {dataArr.map(item => (
        <Link key={item.id} href={`/home/press/${encodeURIComponent(item.id)}`}>
          <a>
            <div className={styles.mapCont}>
              <div>
                <img src={item.img} alt={`Image`} className={styles.pressImage} />
                <div className={styles.imgPartBack}>
                  <img src={item.imgPart} alt={`ImagePart`} className={styles.icon} />
                </div>
                {item.imgPartTwo && <button className={styles.digital}>DIGITAL</button>}
                <div className={styles.cardDesc}>
                  <h2 className={`${styles.headtitle} title font_40`}>{item.title}</h2>
                  {item.description && <p className={styles.descP}>{item.description}</p>}
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Card;
