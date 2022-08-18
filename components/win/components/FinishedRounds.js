import { useState } from 'react';
import Image from 'next/image';
import TabFilter from '../../UI/filters/TabFilter';
import CornerDecor from "../../UI/cornerDecor/CornerDecor";
import filterStyles from "../../UI/filters/TabFilter.module.css";
import styles from './FinishedRounds.module.css';
import ButtonWallet from './ButtonWallet';

let tabsData = [
    {
      id: 0,
      label: "All History",
    },
    {
      id: 1,
      label: "Your History",
    },
];
let finishedRoulesData = [
    {
        id: 0,
        img: 'one.png',
    },
    {
        id: 1,
        img: 'one.png',
    },
    {
        id: 2,
        img: 'one.png',
    },
    {
        id: 3,
        img: 'one.png',
    },
    {
        id: 4,
        img: 'one.png',
    },
    {
        id: 5,
        img: 'one.png',
    },
    // nex page
    {
        id: 6,
        img: 'two.png',
    },
    {
        id: 7,
        img: 'six.png',
    },
    {
        id: 8,
        img: 'zero.png'
    },
    {
        id: 9,
        img: 'one.png',
    },
    {
        id: 10,
        img: 'two.png',
    },
    {
        id: 11,
        img: 'zero.png',
    },
    {
        id: 12,
        img: 'nine.png',
    },
    // nex page
    {
        id: 13,
        img: 'eight.png',
    },
    {
        id: 14,
        img: 'six.png',
    },
    {
        id: 15,
        img: 'one.png',
    },
    {
        id: 16,
        img: 'two.png',
    },
    {
        id: 17,
        img: 'zero.png',
    },
    {
        id: 18,
        img: 'nine.png',
    },
    // nex
    {
        id: 19,
        img: 'eight.png',
    },
    {
        id: 20,
        img: 'six.png',
    },
    {
        id: 21,
        img: 'zero.png',
    },
    {
        id: 22,
        img: 'zero.png',
    },
    {
        id: 23,
        img: 'zero.png',
    },
    {
        id: 24,
        img: 'nine.png',
    },
    // nex
    {   
        id: 25,
        img: 'zero.png',
    },
    {
        id: 26,
        img: 'six.png',
    },
    {
        id: 27,
        img: 'one.png',
    },
    {
        id: 28,
        img: 'zero.png',
    },
    {
        id: 29,
        img: 'zero.png',
    },
]

const FinishedRounds = () => {
    const [activeMenuItem, setActiveMenuItem] = useState("All History");
    const [pageNumber, setPageNumber] = useState(0);

    let latest = false;
    const changeTabHendler = (status) => {
        setActiveMenuItem(status);
    };
    const next = () => {
        console.log(finishedRoulesData.length)
        if(pageNumber < finishedRoulesData.length - 7) {
            setPageNumber(pageNumber + 6);
        }else{
            latest=true;
            return false;
        };
        
    };
    const previous = () => {
        if(pageNumber > 0) {
            setPageNumber(pageNumber - 6);
        }else if (pageNumber === 0) {
            return false;
        }
    }

    const displayUsers = finishedRoulesData.slice(pageNumber, pageNumber + 6).map((item) => {
        return (
          <div className={styles.ballBlue} key={item.id}>
              <Image layout='fill' objectFit={'contain'} src={`/images/win/${item.img}`} alt='blue' />
          </div>
        );
    });

    let content = '';

    if (activeMenuItem === "All History") {
        content = 
        <div className={styles.borderDecor}>
            <div className={styles.tabDecor}>
                <CornerDecor />
                <div className={styles.paddingDec}>
                    <div className={styles.titleRules}>
                        <div className={styles.titleDesc}>
                            <h2>Round</h2>
                            <p>Drawn Mar 31, 2022, 4:00 AM</p>
                        </div>
                        <div>
                            <svg className={styles.arrow} onClick={()=> {
                                previous();
                            }}
                                width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.98465 1.17914L1.41406 4.74972L4.98465 8.32031" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.4137 4.75L1.51367 4.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>                        
                            <svg className={styles.arrowNext}
                                onClick={()=> {
                                    next();
                                }} 
                                width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.84347 1.17914L11.4141 4.74972L7.84347 8.32031" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1.41445 4.75L11.3145 4.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <svg className={styles.arrow} 
                                // onClick={()=> {
                                //     lastPage();
                                // }}
                                width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.3">
                                <path d="M7.84347 1.18011L11.4141 4.7507L7.84347 8.32129" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1.41445 4.75098L11.3145 4.75098" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="14.9141" y1="0.75" x2="14.9141" y2="8.75" stroke="white" strokeLinecap="round"/>
                                </g>    
                            </svg>
                        </div>
                    </div>
                    <div className={styles.winNumber}>
                        <p>Winning Number</p>
                        <p className={`${styles.latest} ${latest ? styles.latestActive : ''}`}>Latest</p>
                    </div>
                    <div className={styles.ball}>
                        {displayUsers}                     
                    </div>
                    <div className={styles.details}>
                        <button>
                            Details
                        </button>
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41406 1.24902L4.94437 3.71872C4.6527 4.01039 4.17543 4.01039 3.88376 3.71872L1.41406 1.24902" stroke="#0500FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    }
    if (activeMenuItem === "Your History") {
        content = 
        <div className={styles.borderDecor}>
            <div className={styles.tabDecor}>
                <CornerDecor />
                <div className={styles.history}>
                    <p>Connect your wallet to check your history</p>
                    <ButtonWallet />
                </div>
            </div>
        </div>
    }

  return (
    <div className={styles.marginTop}>
        <div className={styles.title}>
            <h1>Finished Rounds</h1>
        </div>
        <div className={styles.border}>
            <div className={styles.tab}>
                <div className={styles.background}>
                    <Image layout='fill' objectFit={'contain'} src={'/images/win/background/finishdRoundBg.png'} alt="bg" />
                </div>
                <TabFilter
                    onClick={changeTabHendler}
                    activeMenu={activeMenuItem}
                    data={tabsData}
                    css={{
                    wrap: filterStyles.Prediction__filterWrap,
                    filter: filterStyles.Activity__filter,
                    active: filterStyles.Prediction__filterActive,
                    item: filterStyles.FinishedRounds__filter__item,
                    }}        
                />
            </div>
        </div>
        {content}
    </div>
  )
}

export default FinishedRounds;


