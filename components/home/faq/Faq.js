import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Faq.module.css';

const Faq = ({ faqs }) => {
  const activeLang = useSelector(state => state.settings.activeLang);
    const dispatch = useDispatch();
    const [pageReady, setPageReady] = useState(false);
    let microSchemes;
    if(window.innerWidth > 1240){
        microSchemes = [
            [1,2,11,12,13,14,15,16,17,23,24],
        ];
    }

    if(window.innerWidth < 1240){
        microSchemes = [
            [1,2,5,6,7,8,9,10,11,12,13,18,19,20,21,22,23,24],
        ];
    }

    const setScheme = (num) => {
        dispatch({
            type: "SET_MICHROSCHEME_ARRAY",
            microschemeArray: microSchemes[num]
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setPageReady(true);
            dispatch({
                type: "SET_MICHROSCHEME_ARRAY",
                microschemeArray: microSchemes[0]
            });
        }, 400);
    },[]);
  return (
    <div className={`pT-180`}>
        <div className={`${styles.container} container`}>
            <div className={styles.bodyContainer}>
                <div className={` font-90 ttl pB-50 tYAnimation ${pageReady ? 'animate' : ''}`}>FAQ</div>
                <p className={`${styles.Title} delay1 tYAnimation ${pageReady ? 'animate' : ''}`}>Answers to frequently asked questions about the CATENA Network.</p>
            </div>
            <div className={`${styles.containerTwo} delay2 tYAnimation ${pageReady ? 'animate' : ''}`}>
                {faqs?.map((item, index) => {
                    return (
                        <div key={index} className={styles.maneBox}>
                            <div className={styles.numberBox}>
                                <p className={`${styles.number} font-40 `}>{index + 1}.</p>
                                <div className={`${styles.itemTitle} ttl  font-40 `}>{item.question[activeLang]['faq.question']}</div>
                            </div>
                            <div className={`${styles.itemTease} `}>{item.answer[activeLang]['faq.answer']}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Faq;
