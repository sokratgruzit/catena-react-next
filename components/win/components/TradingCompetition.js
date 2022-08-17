import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import { Link } from "next/link";
import ArrowBtn from '../../UI/button/ArrowBtn';
import TabFilter from "../../UI/filters/TabFilter";
import CornerDecor from "../../UI/cornerDecor/CornerDecor";
import styles from "./TradingCompetition.module.css";
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

const TradingCompetition = () => {

    const navigate = useRouter();
    const [activeMenuItem, setActiveMenuItem] = useState("Trading Compatition");
  
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
            <div className={styles.competitionMargin}>
                <div className={styles.imagetest}>
                    <Image layout='fill' src={"/images/win/background/bggg.png"} alt="HomeScreen" objectFit={"contain"}/>
                </div>
                <div className={styles.borderTab}>
                <div className={styles.tab}>
                    <CornerDecor />
                    <TabFilter
                    onClick={changeTabHendler}
                    activeMenu={activeMenuItem}
                    data={tabsData}
                    css={{
                        wrap: filterStyles.Competition__filterWrap,
                        filter: filterStyles.Activity__filter,
                        active: filterStyles.Competition__filterActive,
                        item: filterStyles.Competition__filter__item,
                    }}
                    />
                </div>
                </div>
                <div className={styles.mainContent}>
                <div className={styles.leftSideContent}>
                    <p className={styles.day}>MAY 14-20, 2022</p>
                    <h1 className={styles.title}>
                    <span className={styles.titleSpan}>CORE</span> MultiChain Fan
                    Token Trading Competition
                    </h1>
                    <h4 className={styles.prizes}>$300,000 in Prizes!</h4>
                    <p className={styles.trandingVolume}>
                    Compete with other teams for the highest trading volume!
                    </p>
                    <div className={styles.voutingBox}>
                    <div className={styles.hourglass}>
                        <Image layout='fill' src={"/images/win/time.svg"}  alt="time" objectFit={"contain"}/>
                    </div>
                    <div className={styles.competition}>
                        <div>
                        <h5>Finished!</h5>
                        </div>
                        <div className={styles.voutingCompetition}>
                        <div className={styles.voutingIcone}>
                            <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <g opacity="0.7">
                                <path
                                d="M8.49805 16.4229C4.08502 16.4229 0.498047 12.8359 0.498047 8.42285C0.498047 4.00983 4.08502 0.422852 8.49805 0.422852C12.9111 0.422852 16.498 4.00983 16.498 8.42285C16.498 12.8359 12.9111 16.4229 8.49805 16.4229ZM8.49805 1.53913C4.7027 1.53913 1.61433 4.6275 1.61433 8.42285C1.61433 12.2182 4.7027 15.3066 8.49805 15.3066C12.2934 15.3066 15.3818 12.2182 15.3818 8.42285C15.3818 4.6275 12.2934 1.53913 8.49805 1.53913Z"
                                fill="white"
                                />
                                <path
                                d="M7.44177 11.0869C7.29379 11.0868 7.15193 11.0279 7.04735 10.9232L4.94131 8.81712C4.83751 8.71208 4.7793 8.57037 4.7793 8.4227C4.7793 8.27503 4.83751 8.13331 4.94131 8.02828C5.15712 7.81246 5.51433 7.81246 5.73014 8.02828L7.44177 9.73991L11.2669 5.91479C11.4827 5.69898 11.8399 5.69898 12.0557 5.91479C12.2715 6.1306 12.2715 6.48781 12.0557 6.70363L7.83619 10.9232C7.73162 11.0279 7.58975 11.0868 7.44177 11.0869V11.0869Z"
                                fill="white"
                                />
                            </g>
                            </svg>
                            <p>Entry</p>
                        </div>
                        <span>
                            <svg
                            width="61"
                            height="2"
                            viewBox="0 0 61 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <line
                                opacity="0.5"
                                x1="0.498047"
                                y1="0.922852"
                                x2="60.498"
                                y2="0.922852"
                                stroke="url(#paint0_linear_1528_4102)"
                            />
                            <defs>
                                <linearGradient
                                id="paint0_linear_1528_4102"
                                x1="60.498"
                                y1="1.42283"
                                x2="0.498047"
                                y2="1.42283"
                                gradientUnits="userSpaceOnUse"
                                >
                                <stop stopColor="white" stopOpacity="0" />
                                <stop offset="0.489583" stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            </svg>
                        </span>
                        <div className={styles.voutingIcone}>
                            <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <g opacity="0.7">
                                <path
                                d="M8.49805 16.4229C4.08502 16.4229 0.498047 12.8359 0.498047 8.42285C0.498047 4.00983 4.08502 0.422852 8.49805 0.422852C12.9111 0.422852 16.498 4.00983 16.498 8.42285C16.498 12.8359 12.9111 16.4229 8.49805 16.4229ZM8.49805 1.53913C4.7027 1.53913 1.61433 4.6275 1.61433 8.42285C1.61433 12.2182 4.7027 15.3066 8.49805 15.3066C12.2934 15.3066 15.3818 12.2182 15.3818 8.42285C15.3818 4.6275 12.2934 1.53913 8.49805 1.53913Z"
                                fill="white"
                                />
                                <path
                                d="M7.44177 11.0869C7.29379 11.0868 7.15193 11.0279 7.04735 10.9232L4.94131 8.81712C4.83751 8.71208 4.7793 8.57037 4.7793 8.4227C4.7793 8.27503 4.83751 8.13331 4.94131 8.02828C5.15712 7.81246 5.51433 7.81246 5.73014 8.02828L7.44177 9.73991L11.2669 5.91479C11.4827 5.69898 11.8399 5.69898 12.0557 5.91479C12.2715 6.1306 12.2715 6.48781 12.0557 6.70363L7.83619 10.9232C7.73162 11.0279 7.58975 11.0868 7.44177 11.0869V11.0869Z"
                                fill="white"
                                />
                            </g>
                            </svg>
                            <p>Live</p>
                        </div>
                        <span>
                            <svg
                            width="61"
                            height="2"
                            viewBox="0 0 61 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <line
                                opacity="0.5"
                                x1="0.498047"
                                y1="0.922852"
                                x2="60.498"
                                y2="0.922852"
                                stroke="url(#paint0_linear_1528_4102)"
                            />
                            <defs>
                                <linearGradient
                                id="paint0_linear_1528_4102"
                                x1="60.498"
                                y1="1.42283"
                                x2="0.498047"
                                y2="1.42283"
                                gradientUnits="userSpaceOnUse"
                                >
                                <stop stopColor="white" stopOpacity="0" />
                                <stop offset="0.489583" stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            </svg>
                        </span>
                        <div className={styles.voutingIcone}>
                            <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.54291 4.46864C3.1918 3.61172 4.0419 2.92715 5.01835 2.47519C5.99479 2.02324 7.06763 1.81777 8.14238 1.87689C9.21713 1.936 10.2608 2.25788 11.1816 2.81419C12.1023 3.37049 12.8719 4.14415 13.4224 5.06705L13.898 4.80343L14.6906 4.33947C13.9795 3.14583 12.9696 2.15718 11.7601 1.47054C10.5505 0.783891 9.18276 0.422852 7.79113 0.422852C6.3995 0.422852 5.03178 0.783891 3.8222 1.47054C2.61262 2.15718 1.60275 3.14583 0.891696 4.33947L0.498047 4.95633L1.12683 5.32802L3.56006 6.76999C3.16206 7.76873 3.13436 8.87642 3.48193 9.89373C3.82949 10.911 4.52951 11.7712 5.45603 12.3194C6.38254 12.8676 7.47472 13.0679 8.53603 12.8842C9.59735 12.7005 10.5581 12.1449 11.2455 11.3173L13.0182 12.3718C12.3692 13.2295 11.5185 13.9145 10.5413 14.3666C9.56418 14.8186 8.49052 15.0238 7.41511 14.9638C6.3397 14.9039 5.2956 14.5808 4.37494 14.023C3.45429 13.4652 2.68537 12.6899 2.13605 11.7655L0.881128 12.5062C1.59218 13.6999 2.60205 14.6885 3.81163 15.3752C5.02121 16.0618 6.38893 16.4229 7.78056 16.4229C9.17219 16.4229 10.5399 16.0618 11.7495 15.3752C12.9591 14.6885 13.9689 13.6999 14.68 12.5062L15.0551 11.8788L14.4264 11.5071L12.4291 10.3235L10.7065 9.33232C10.4968 9.99838 10.065 10.5728 9.48288 10.9601C8.90073 11.3474 8.2033 11.5243 7.50646 11.4613C6.80963 11.3984 6.15536 11.0994 5.65237 10.6141C5.14938 10.1288 4.82797 9.48639 4.74155 8.79359C4.65512 8.10079 4.80888 7.39934 5.17728 6.8058C5.54568 6.21227 6.10653 5.76238 6.76664 5.53091C7.42674 5.29944 8.14636 5.30031 8.80589 5.5334C9.46543 5.76648 10.0252 6.21773 10.3921 6.81217L11.6576 6.0846C11.2858 5.46935 10.7722 4.95155 10.1595 4.57425C9.54679 4.19696 8.85264 3.97107 8.1348 3.91538C7.41696 3.85969 6.69617 3.9758 6.03236 4.25405C5.36855 4.53231 4.78091 4.96467 4.31829 5.51519L2.54291 4.46864Z"
                                fill="#FF7152"
                            />
                            </svg>
                            <p>End</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.allCompetition}>
                        <ArrowBtn  seeDirection={'trandingCompetition'} direction={'forward'} />
                    </div>
                </div>  
                <div className={styles.spaceBoy}>
                    <Image layout='fill' src={"/images/win/Astronaut.png"}  alt="time" objectFit={"contain"}/>
                </div>
                </div>
                <div className={styles.backgroundFinished}>
                <div>
                    <Image
                    layout='fill'
                    src={"/images/win/background/finishedBackground.png"}
                    alt="ხზვცზ"
                    />
                </div>
                </div>
                <div className={styles.backgroundFinished1}>
                <Image layout='fill' src={"/images/win/background/runningLinerBg.png"} alt="" />
                </div>
            </div>  
        </>
  )
}

export default TradingCompetition
