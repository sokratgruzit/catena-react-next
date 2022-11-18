import { useState } from 'react';
import Image from 'next/image';

import styles from './CoreTokenomics.module.css';

const CoreTokenomics = () => {
    let sideData =  [
      {
        id: 0,
        question: 'Lottery v2',
        answer: 'CMCX Tokenomics',
      },
      {
        id: 1,
        question: 'Prediction',
        answer: 'How To Use Prediction',
        answer1: 'Prediction FAQ',
        answer2: 'Prediction Troubleshooting',
      },
      {
        id: 2,
        question: 'NFT Profile System',
        answer:'Team ranks are calculated by the total combined volume of the top 500 members of each respective team.',
      },
      {
        id: 3,
        question: 'CMCX',
        answer: 'CMCX Tokenomics',
      },
    ];
    const [activMenu, setActiveMenu] = useState(null)

    const sideBarClick = (id) => {
        if (activMenu === id) {
            setActiveMenu(null);
        } else {
            setActiveMenu(id);
        }
    }

    return (
        <>
            <div>
                <div className={styles.CoreTokenomics__background}>
                    <Image layout='fill' objectFit='contain' src={'/images/win/background/CoreTokenomics.png'} alt='bg'/>
                </div>
                <div className={styles.container}>
                    <div>   
                        {sideData.map(item => {
                            return (
                                <>
                                    <div key={item.index}>
                                        <ul >
                                            <li
                                                className={`${styles.sideBar} ${activMenu === item.id ? styles.sideBarActive : '' }`}
                                            >   
                                                <p
                                                    onClick={() => {
                                                        sideBarClick(item.id)
                                                    }}     
                                                >
                                                    {item.question}                                                 
                                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13 1.01172L8.06061 5.95111C7.47727 6.53445 6.52273 6.53445 5.93939 5.95111L1 1.01172" stroke="#B2B4B7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </p>
                                                <p>{item.answer}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )
                        })}
                        
                    </div>
                    <div>მარჯვენა კიონტენტი</div>        
                </div>
            </div>
        </>
    )
}

export default CoreTokenomics;
