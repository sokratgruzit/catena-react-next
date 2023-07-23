import styles from "./Card.module.css";

const Card = ({ dataArr }) => {
    return (
        <div className={styles.mapContainer}>
            {dataArr.map(item => (
                <div key={item.id} className={styles.arrContents}>
                    <img src={item.img} alt={`Image`} className={styles.pressImage} />
                    <img src={item.imgPart} alt={`ImagePart`} className={styles.icon} />
                    <div className={styles.test}>
                        <h2>{item.title}</h2>
                        {item.description && <p>{item.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Card;