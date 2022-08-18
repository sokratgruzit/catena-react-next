import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"
import TabFilter from "../../UI/filters/TabFilter";
import CornerDecor from "../../UI/cornerDecor/CornerDecor";
import styles from "./LotteryPrizes.module.css";
import filterStyles from "../../UI/filters/TabFilter.module.css";

let tabsData = [
    {
        id: 0,
        label: "Trading Compatition",
    },
    {
        id: 1,
        label: "Prediction",
    },
    {
        id: 2,
        label: "Lottery",
    },
];

const LotteryPrizes = () => {
    const navigate = useRouter();
    const [activeMenuItem, setActiveMenuItem] = useState("Lottery");
  
    const changeTabHendler = (status) => {
        setActiveMenuItem(status);
        let route = "/win/competition";

        if (status === "Prediction") {
            route = "/win/prediction";
        } else if (status === "Lottery") {
            route = "/win/lottery";
        }
  
        navigate(route, { replace: true });
    };

    return (
        <>
            <div>
                <div className={styles.tab}>
                    <div className={styles.Container__background}>
                        <Image 
                            layout="fill"
                            objectFit={"cover"}
                            alt="loteryBg"
                            src="/images/win/background/lotteryBg.png"
                    />
                    </div>

                    <div className={styles.container}>
                        <CornerDecor />
                        <TabFilter
                            onClick={changeTabHendler}
                            activeMenu={activeMenuItem}
                            data={tabsData}
                            css={{
                                wrap: filterStyles.Prediction__filterWrap,
                                filter: filterStyles.Activity__filter,
                                active: filterStyles.Prediction__filterActive,
                                item: filterStyles.Prediction__filter__item,
                            }}
                        />
                    </div>
                </div>
                <div>
                    <h1 className={styles.title}> <span>CORE</span> MultiChain</h1>
                    <h2 className={styles.titleDesc}>Lottery in Prizes!</h2>
                </div>
                <div className={styles.imgPosition}>
                    <div className={styles.pinkTicket}>
                        <Image layout="fill" objectFit={"contain"} src={'/images/win/pinkTicket.png'} alt="ticket" />
                    </div>
                    <div className={styles.smallStar}>
                        <Image layout="fill" objectFit={"contain"} src={'/images/win/pawawuna.png'} alt="ticket" />
                    </div>
                    <div className={styles.star}>
                        <Image layout="fill" objectFit={"contain"} src={'/images/win/star.png'} alt="ticket" />
                    </div>
                </div>
                <div className={styles.blur}>
                    <Image layout="fill" objectFit={"contain"} src={'/images/win/blurLottery.png'} alt="blurLottery" />
                </div>
                <div className={styles.prizesContainer}>

                    <div className={styles.lotteryNumber}>
                        <p>2</p>
                        <p>4</p>
                        <p>6</p>
                        <p>0</p>
                        <p>1</p>
                        <p>1</p>
                    </div>
                </div>
                <div className={styles.pictureContainer}>
                    <div className={styles.littleStar}>
                        <Image layout="fill" objectFit={"contain"} src={'/images/win/namceca.png'} alt="star" />
                    </div>
                    <div className={styles.ticket}>
                        <Image layout="fill" objectFit={"contain"} src={'/images/win/ticket.png'} alt="ticket" />
                    </div>
                </div>
                <div className={styles.buttonStyle}>
                    <button  className={styles.buyTicket}>
                        Buy Tickets
                    </button>
                </div>
                <div className={styles.pictureContainer}>
                    <div className={styles.tickets}>
                        <Image layout="fill" objectFit={"contain"} src={'/images/win/tickets.png'} alt="" />
                    </div>
                    <div className={styles.starr}>
                        <Image layout="fill" objectFit={"contain"} src={'/images/win/pawawuna.png'} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LotteryPrizes