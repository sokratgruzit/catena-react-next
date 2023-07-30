import styles from "./Card.module.css";

const Card = ({ dataArr }) => {
    return (
        <>
            {dataArr.map(item => (
                <div key={item._id} className={styles.mapCont}>
                    <img src={`http://localhost:4003/uploads/press/${item?.image}`} alt={`Image`} className={styles.pressImage} />
                    <div className={styles.imgPartBack}>
                        <img src={`http://localhost:4003/uploads/press/${item?.logo_image}`} alt={`ImagePart`} className={styles.icon} />
                    </div>
                    {item.imgPartTwo && <button className={styles.digital}>DIGITAL</button>}
                    <div className={styles.cardDesc}>
                        <h2 className={`${styles.headtitle} title font-40`}>{item.title["en"]["press.title"]}</h2>
                        {item.description && <p className={styles.descP}>{item.inner_descr["en"]["press.description"]}</p>}
                    </div>
                </div>
            ))}
        </>
    )
};

export default Card;