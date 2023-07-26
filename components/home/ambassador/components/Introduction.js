import styles from "../css/Introduction.module.css"

const Introduction = () => {
    return (
        <div className={`${styles.container} container `}>
            <h3 className={`${styles.Ttl} ttl font-40`}>Help build the future and earn rewards</h3>
            <p className={styles.texts}>
                CORE MultiChain is a super-performant blockchain ecosystem that will help solve the blockchain trilemma of scalability, interoperability,
                and usability. The blockchain-powered ecosystem is built around user privacy and lets users take control of their data. We will use our
                hybrid ecosystem to enhance current technologies and create the technologies of the future,
                but we can’t do it alone. Join us in our quest to build a better future! Become a CORE MultiChain ambassador and start earning rewards today!
            </p>
        </div>
    );
};

export default Introduction;