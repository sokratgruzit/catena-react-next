import styles from "../css/CatenaAmbassador.module.css"

const CatenaAmbassador = () => {
    return (
        <div className={`${styles.containerCatena} container_bordered `}>
            <h1 className={`${styles.CatTit} ttl  font_30`}> Are You Eligible to Become a CATENA Ambassador?</h1>
            <div className={`${styles.ulTxt}  text`}>
                <ul>
                    <li>You’re a blockchain and privacy enthusiast, an influencer, or an expert.</li>
                </ul>
                <ul>
                    <li>You’re passionate about blockchain technology and believe that blockchain technology will play a impactful role in the future.</li>
                </ul>
                <ul>
                    <li>You are already a community leader and have the ability to promote CATENA within your group.</li>
                </ul>
                <ul>
                    <li>You are a content and marketing creator and love using out-of-the-box ideas to build content.</li>
                </ul>
                <ul>
                    <li>You are a student of blockchain and would love to gain real-world industry experience and hands-on knowledge of the crypto markets and space.</li>
                </ul>
                <ul>
                    <li>You can still become a CATENA ambassador even if you aren’t a crypto guru. Apply and tell us more about why you believe in CATENA.</li>
                </ul>
            </div>
        </div >
    );
};

export default CatenaAmbassador;