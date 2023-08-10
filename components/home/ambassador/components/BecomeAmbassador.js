import styles from "../css/BecomeAmbassador.module.css"

const BecomeAmbassador = () => {
    const titleArray = [
        {
            a: "Build a Better Future",
            p: "Help build a borderless, data-responsible economy. Collaborate closely to turn our vision for a better, privacy-first world into a reality."
        },
        {
            a: 'Earn Rewards',
            p: "Receive tokens by completing specific tasks. You can take a look at some examples of rewards here. Plus, every quarter we’ll announce the top 3 Ambassadors worldwide, and if you are one of them you’ll earn even more rewards!"
        },
        {
            a: 'Be Part of the CATENA Extended Team',
            p: "Join a larger community of blockchain and privacy enthusiasts in the CORE MultiChain Foundation and Ecosystem.",
        },
        {
            a: 'Be Part of the CATENA Extended Team',
            p: "Join a larger community of blockchain and privacy enthusiasts in the CORE MultiChain Foundation and Ecosystem.",
        },
        {
            a: "See It First",
            p: "Be the first to know of any network updates and give first-hand feedback to our developer team.",
        },
        {
            a: "Grow Your Reputation and Gain Real-World Experience",
            p: "Earn real-world experience in the blockchain field and gain valuable skills that will help grow your career."
        },
    ];

    return (
        <div className={`${styles.box} container_bordered`} >
            <div className="container_bordered-child">
                <h1 className={`${styles.ttli} ttl font-40`}>Why Become an Ambassador</h1>
                <div>
                    {titleArray.map((item, index) => {
                        return (
                            <div key={index} className={styles.becameTitle}>
                                <a className={`${styles.a} `}>{item.a}</a>
                                <p className={`${styles.p} p`}>{item.p}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default BecomeAmbassador;