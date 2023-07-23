import styles from "./Card.module.css";

const Card = ({ dataArr }) => {
    return (
        <>
            {dataArr.map(item => (
                <div key={item.id} className={styles.mapCont}>
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
            ))}
        </>
    )
};

export default Card;