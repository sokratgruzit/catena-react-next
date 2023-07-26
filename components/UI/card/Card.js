import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Card.module.css';

const Card = ({ dataArr }) => {
  const router = useRouter();

  const handleCardClick = imgUrl => {
    const newPath = `/home/press/${dataArr[0].slug}`;
    if (imgUrl) {
      router.push(
        {
          pathname: newPath,
          query: { img: imgUrl },
        },
        undefined,
        { shallow: true },
      );
    } else {
      router.replace(
        {
          pathname: newPath,
        },
        undefined,
        { shallow: true },
      );
    }
  };

  return (
    <>
      {dataArr.map(item => (
        <div key={item.id} className={styles.mapCont} onClick={() => handleCardClick(item.img)}>
          <div>
            <img src={item.img} alt={`Image`} className={styles.pressImage} />
            <div className={styles.imgPartBack}>
              <img src={item.imgPart} alt={`ImagePart`} className={styles.icon} />
            </div>
            {item.imgPartTwo && <button className={styles.digital}>DIGITAL</button>}
            <div className={styles.cardDesc}>
              <h2 className={styles.headtitle}>{item.title}</h2>
              {item.description && <p className={styles.descP}>{item.description}</p>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
