import styles from "../css/Title.module.css"

const Title = () => {
    return (
        <div className={`${styles.container} container`}>
            <div>
                <img
                    className={`${styles.imgTitle} .font-90`}
                    src="/images/BecomeAmbassador/ambassador.png"
                />
            </div>
        </div >
    );
};

export default Title;