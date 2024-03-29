import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './Card.module.css';

const Card = ({ dataArr, fileAdress, title, description, slugType }) => {
  const activeLang = useSelector(state => state.settings.activeLang);

  return (
    <>
      {dataArr.map(item => (
        <Link key={item._id} href={`/overview/${slugType}/${item.slug}`}>
          <div key={item._id} className={`${styles.mapCont} aos-init`}>
            <div className={styles.pressImageCont}>
              <img src={`${fileAdress}${item?.image}`} alt={`Image`} className={styles.pressImage} />
              <button className={styles.category}>Category</button>
            </div>
            <div className={styles.imgPartBack}>
              <img src={`${fileAdress}${item?.logo_image}`} alt={`ImagePart`} className={styles.icon} />
            </div>
            {item.imgPartTwo && <button className={styles.digital}>DIGITAL</button>}
            <div className={styles.cardDesc}>
              <h2 className={`${styles.headtitle} ttl font-40`}>{item.title[activeLang][title]}</h2>
              {/* {item.description && <p className={styles.descP}>{item.inner_descr[activeLang][description]}</p>} */}
              <p className={styles.descP}>{item.inner_descr[activeLang][description]}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
