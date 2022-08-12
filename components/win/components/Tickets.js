import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CornerDecor from '../../UI/cornerDecor/CornerDecor';

import BuyTickets from './BuyTickets';
import styles from "./Tickets.module.css";

let ticketsData = [
    {   
        id: "0",
        title: "Match first 1",
        priceCore: "156 CORE",
        price: "~$3.215"
    },
    {
        id: "1",
        title: "Match first 2",
        priceCore: "156 CORE",
        price: "~$3.215"
    },
    {   
        id: "2",
        title: "Match first 3",
        priceCore: "156 CORE",
        price: "~$3.215"
    },
    {
        id: "3",
        title: "Match first 4",
        priceCore: "156 CORE",
        price: "~$3.215"
    },
    {
        id: "4",
        title: "Match first 5",
        priceCore: "156 CORE",
        price: "~$3.215"
    },
    {   
        id: "5",
        title: "Match first 6",
        priceCore: "156 CORE",
        price: "~$3.215"
    },
    {
        id: "6",
        title: "Match first 7",
        priceCore: "156 CORE",
        price: "~$3.215"
    },
    {
        id: "7",
        title: "Burn",
        priceCore: "156 CORE",
        price: "~$3.215"
    },
]

const Tickets = () => {
    const [details, setDetails] = useState(false);
    const activebtns = useSelector(state => state.activeBuyTicketsBtn);
    const dispatch = useDispatch();

    const handleClick = () => {
        setDetails(!details);
    };

    const ticketBtns = () => {
        dispatch({
            type: 'BUY_TICKETS_ACTIVE',
            payload: {
                activeBuyTicketsBtn: !activebtns
            }
        });
    };
    console.log(activebtns)
    return (
        <div className={styles.alignteItems}>
            <div className={styles.blur}>
                <img className={styles.imgBlur} src={'../../images/win/rectangle.png'} alt="" />
            </div>
            <h1 className={styles.title}>
                Get your tickets now!
            </h1>
            <div  className={styles.time}>
                <span>
                    1Day 35Minute
                </span>
                <p>
                    until the draw
                </p>
            </div>
            <div className={styles.border}>
                <div className={styles.tab}>
                    <CornerDecor />
                    <div className={styles.day}>
                        <h4>
                            Next Draw
                        </h4>
                        <p>
                            #490 | Draw: Apr 1, 2022, 4:00 PM
                        </p>
                    </div>
                    <div className={styles.price}>
                        <p>
                            Prize Pot:
                        </p>
                        <div className={styles.pirceCore}>
                            <h3>~$302,002</h3>
                            <p>23.035 CORE</p>
                        </div>
                    </div>
                    <div className={styles.buyTickets}> 
                        <p>
                            Your Tickets
                        </p>
                        <button className= {activebtns === true ? styles.contentOpacity : ''}
                            onClick={() => {
                                ticketBtns();
                            }}>
                            Buy Tickets
                        </button>
                    </div>
                    <div  className={`${styles.tabBorder} ${activebtns === true ? styles.containerOpacity : ''}`}>
                        <BuyTickets />
                    </div>
                    <div className={styles.paragraph}>
                        <p>
                            Match the winning number in the same order to share prizes. Current prizes  up for grabs:
                        </p>
                    </div>
                    <div className={styles.list} >                    
                        {details && ticketsData.map(item => {
                                return (
                                    <>
                                        <div className={styles.detailsList} key={item.id}>
                                            <p className={styles.titlePar}>{item.title}</p>    
                                            <p>{item.priceCore}</p>
                                            <p  className={styles.priceCore}>{item.price}</p>
                                        </div> 
                                    </>
                                )
                            })}
                    </div>
                    <div className={styles.details}>
                        <p onClick={handleClick}>
                            {details === true ? "Hide"  : 'Details'}
                            <svg className={details === true ? styles.rotate : ''} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.91406 1.01367L4.44437 3.48337C4.1527 3.77504 3.67543 3.77504 3.38376 3.48337L0.914062 1.01367" stroke="#0500FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> 
                        </p>     
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Tickets
