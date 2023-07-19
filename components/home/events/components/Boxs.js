import styles from "../css/Boxs.module.css";

const Boxs = () => {
    // const boxArr = [
    //     {
    //         src: "/images/event/group.png",
    //         title: "How the Blockchain Could Break Big Tech’s Hold on A.I.",
    //     },
    //     {
    //         src: "/images/event/grouptwo.png",
    //         title: "SingularityNET’s Ben Goertzel has a grand vision for the future of AI"
    //     },
    //     {
    //         src: "/images/event/groupthree.png",
    //         title: "SingularityNET’s Ben Goertzel has a grand vision for the future of AI"
    //     }
    // ]


    return (
        <div className={styles.container} >
            <div className={styles.box}>
                <div className={styles.addBox}>
                    <img className={styles.imgTxt} src="/images/event/txt.png" />
                </div>
                <img className={styles.mainImg} src="/images/event/group.png" />
                <h3 className={styles.title}>"How the Blockchain Could Break Big Tech’s Hold on A.I.</h3>
            </div>
            <div className={styles.boxtwo}>
                <div>
                    <img className={styles.img} src="/images/event/img.png" />
                    <img src="/images/event/grouptwo.png" />
                    <p className={styles.boxTitle}>SingularityNET’s Ben Goertzel has a grand vision for the future of AI</p>
                </div>

                <div>
                    <img className={styles.img} src="/images/event/img.png" />
                    <img src="/images/event/groupthree.png" />
                    <p className={styles.boxTitle}>SingularityNET’s Ben Goertzel has a grand vision for the future of AI</p>
                </div>
            </div>
        </div>
    )
}

export default Boxs