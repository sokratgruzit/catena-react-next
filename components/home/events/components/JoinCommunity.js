import styles from "../css/JoinCommunity.module.css";

const JoinCommunity = () => {
    return (
        <div className={`${styles.boxTitle} container_bordered `}>
            <div className={`${styles.box}`}>
                <h1 className={`${styles.Titile} ttl font_30`}>Join our community</h1>
                <p className={`${styles.paragraph} font_16`}>Stay up-to-date with the latest CATENA developments such as events, programs and news by joining our social media channels.</p>
                <a className={styles.ppp}>Sign up to our newsletter to stay in the loop</a>
            </div>
        </div>
    );
};

export default JoinCommunity;