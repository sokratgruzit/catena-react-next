import styles from "./Card.module.css";
import { useSelector } from 'react-redux';

const Card = ({ dataArr, fileAdress, title, description }) => {
    const activeLang = useSelector(state => state.settings.activeLang);

    return (
        <>
            {dataArr.map(item => (
                <div key={item._id} className={styles.mapCont}>
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
                        {item.description && <p className={styles.descP}>{item.inner_descr[activeLang][description]}</p>}
                    </div>
                </div>
            ))}
        </>
    )
};

export default Card;