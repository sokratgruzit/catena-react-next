import styles from "../css/Title.module.css"

const Title = () => {
    return (
        <div className={`${styles.container} container_bordered`}>
            <img
                className={styles.bckImg}
                src="/images/BecomeAmbassador/BecAmbBack.png"
            />
            <div>
                <img
                    className={`${styles.imgTitle} font-51`}
                    src="/images/BecomeAmbassador/ambassador.png"
                />
            </div>
        </div >
    );
};

export default Title;