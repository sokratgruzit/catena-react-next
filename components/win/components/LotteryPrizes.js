import Image from "next/image"

import styles from "./LotteryPrizes.module.css";
import WinRoutes from "./WinRoutes";

const LotteryPrizes = () => {

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
                        <WinRoutes />
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
                {/* <div className={styles.blur}>
                    <Image layout="fill" objectFit={"contain"} src={'/images/win/blurLottery.png'} alt="blurLottery" />
                </div> */}
                <div className={styles.prizesContainer}>                
                    {/* <svg width="22" height="87" viewBox="0 0 22 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1537_5224)">
                        <rect x="6.91406" y="10.0449" width="1" height="66" fill="url(#paint0_linear_1537_5224)" shapeRendering="crispEdges"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_1537_5224" x="0.914062" y="0.0449219" width="21" height="86" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4"/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.494118 0 0 0 0 0.917647 0 0 0 0.6 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1537_5224"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1537_5224" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_1537_5224" x1="7.41406" y1="10.0449" x2="7.41406" y2="76.0449" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#627EEA" stopOpacity="0"/>
                        <stop offset="0.510417" stopColor="#627EEA"/>
                        <stop offset="1" stopColor="#627EEA" stopOpacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>   */}
                    <div className={styles.ellipse}>
                        <Image objectFit={"contain"} layout="fill" src={'/images/win/Ellipse.png'} alt="Ellipse" />
                    </div>
                    <div className={styles.lotteryNumber}>    
                        <span>
                            4
                        </span>
                        <svg width="2" height="48" viewBox="0 0 2 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="0.914062" y="0.904297" width="1" height="46.2825" fill="url(#paint0_linear_1537_5228)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1537_5228" x1="1.41406" y1="0.904297" x2="1.41406" y2="47.1868" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#627EEA" stopOpacity="0"/>
                                <stop offset="0.510417" stopColor="#627EEA"/>
                                <stop offset="1" stopColor="#627EEA" stopOpacity="0"/>
                                </linearGradient>
                                </defs>
                        </svg>
                        <span>
                            4
                        </span>
                        <svg width="2" height="48" viewBox="0 0 2 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="0.914062" y="0.904297" width="1" height="46.2825" fill="url(#paint0_linear_1537_5228)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1537_5228" x1="1.41406" y1="0.904297" x2="1.41406" y2="47.1868" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#627EEA" stopOpacity="0"/>
                                <stop offset="0.510417" stopColor="#627EEA"/>
                                <stop offset="1" stopColor="#627EEA" stopOpacity="0"/>
                                </linearGradient>
                                </defs>
                        </svg>
                        <span>
                            2
                        </span>
                        <svg width="2" height="48" viewBox="0 0 2 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="0.914062" y="0.904297" width="1" height="46.2825" fill="url(#paint0_linear_1537_5228)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1537_5228" x1="1.41406" y1="0.904297" x2="1.41406" y2="47.1868" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#627EEA" stopOpacity="0"/>
                                <stop offset="0.510417" stopColor="#627EEA"/>
                                <stop offset="1" stopColor="#627EEA" stopOpacity="0"/>
                                </linearGradient>
                                </defs>
                        </svg>
                        <span>
                            4
                        </span>
                        <svg width="2" height="48" viewBox="0 0 2 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="0.914062" y="0.904297" width="1" height="46.2825" fill="url(#paint0_linear_1537_5228)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1537_5228" x1="1.41406" y1="0.904297" x2="1.41406" y2="47.1868" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#627EEA" stopOpacity="0"/>
                                <stop offset="0.510417" stopColor="#627EEA"/>
                                <stop offset="1" stopColor="#627EEA" stopOpacity="0"/>
                                </linearGradient>
                                </defs>
                        </svg>
                        <span>
                            1
                        </span>
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