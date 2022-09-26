import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import ArrowBtn from '../../UI/button/ArrowBtn';
import Image from 'next/image';
import styles from "./CompetitionFinished.module.css";

let finishedData =[
    {   
        id: 0,
        img: "../../images/win/background/mobBoxBg.png",
        text: "Mobox Competition"
    },
    {   
        id: 1,
        img: "../../images/win/background/fanTokenBg.png",
        text: "Binance Fan token Trading Competition"
    },
    {   
        id: 3,
        img: "../../images/win/background/trendingBg.png",
        text: "Easter Trading Competition"
    },
]

const CompetitionFinished = () => {
  return (
    <div className={styles.container}>
        <img className={styles.CompetitionFinished__background} src={"../../images/win/background/competitionFinishdbg.png"} alt="competitionFinishdbg" />
        <div className={styles.backBt}>
            <ArrowBtn route={"competitionFinished"} direction={"back"}/>
        </div>
        <div className={styles.mainContainer}>
        {finishedData.map((item, index) => (
            <div key={index}>
                <div className={styles.mainBox}>
                    <CornerDecor />
                    <img className={styles.imgBg} src={item.img} alt="bg" />
                    <p className={styles.bgText}>
                        {item.text}
                    </p>
                </div>
            </div>
        ))}
            <div>
                <div><img className={styles.cosmosBlur} src={"../../images/win/cloud.png"} alt="cloud" /></div>
                <div><img className={styles.dimond} src={"../../images/win/dimond1.png"} alt="dimond" /></div>
                <div><img className={styles.gold} src={"../../images/win/gold.png"} alt="gold" /></div>
                <div><img className={styles.sun} src={"../../images/win/sun.png"} alt="sun" /></div>
                <div><img className={styles.planetBlur} src={"../../images/win/cosmosBlur.png"} alt="planetBlur" /></div>
                <div className={styles.vector}>
                    <Image layout="fill" objectFit={"cover"} alt="star" src="/images/win/Vector2.png"/>
                </div>     
                <div className={styles.shine}>
                    <Image layout="fill" objectFit={"cover"} alt="star" src="/images/win/Vector1.png"/>
                </div> 
                <div className={styles.star}>
                    <Image layout="fill" objectFit={"cover"} alt="star" src="/images/win/Vector3.png"/>
                </div>  
                <div className={styles.smalShine}>
                    <Image layout="fill" objectFit={"cover"} alt="star" src="/images/win/Vector5.png"/>
                  </div>
                <div className={styles.smallStar}>
                    <Image layout="fill" objectFit={"cover"} alt="star" src="/images/win/Vector.png"/>
                </div>
                <div className={styles.small}>
                    <Image layout="fill" objectFit={"cover"} alt="star" src="/images/win/Vector4.png"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompetitionFinished;