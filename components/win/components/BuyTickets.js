import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonWallet from './ButtonWallet';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';

import styles from './BuyTickets.module.css';

const BuyTickets = () => {
    const [value, setValue] = useState('');
    const activebtns = useSelector(state => state.activeBuyTicketsBtn);
    const dispatch = useDispatch();

    let cost = value * 1.72;
    let discountCake = value * 0.007740;
    let discountPercent = value * 22.2;
    let pay = cost - discountCake;
    const inputValue = (e) => {
        if(value >= 0 && value <= 100 ) {
            setValue(e.target.value);
        }else {
            value === 100;
        }     
    }
    const ticketBtns = () => {
        dispatch({
            type: 'BUY_TICKETS_ACTIVE',
            payload: {
                activeBuyTicketsBtn: !activebtns
            }
        });
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.tab} ${activebtns === false ? styles.containerOpacity : ''}`}>
                <div className={styles.border}>
                    <CornerDecor />
                    <div className={styles.borderBottom}>
                        <p>Buy Tickets</p>
                        <button
                            onClick={() => {
                                ticketBtns();
                            }}
                        >
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 10M1 10L10 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.buy}>
                            <h6>
                                Buy:
                            </h6>
                            <p>
                                Tickets
                                <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.58442 0L5.52858 0C5.33633 0.00182646 5.15013 0.0674483 4.99922 0.186562C4.8483 0.305676 4.74122 0.471537 4.69478 0.658103C4.64505 0.839742 4.53701 1.00001 4.38729 1.11425C4.23757 1.22848 4.05446 1.29036 3.86614 1.29036C3.67781 1.29036 3.49471 1.22848 3.34499 1.11425C3.19527 1.00001 3.08723 0.839742 3.0375 0.658103C2.99106 0.471537 2.88398 0.305676 2.73306 0.186562C2.58215 0.0674483 2.39595 0.00182646 2.2037 0L2.14786 0C1.57842 0.000682098 1.0325 0.227192 0.629846 0.629846C0.227192 1.0325 0.000682098 1.57842 0 2.14786L0 9.02099C0 9.36278 0.135775 9.69057 0.377455 9.93225C0.619136 10.1739 0.946925 10.3097 1.28871 10.3097H2.2037C2.39595 10.3079 2.58215 10.2423 2.73306 10.1231C2.88398 10.004 2.99106 9.83817 3.0375 9.6516C3.08723 9.46996 3.19527 9.3097 3.34499 9.19546C3.49471 9.08122 3.67781 9.01935 3.86614 9.01935C4.05446 9.01935 4.23757 9.08122 4.38729 9.19546C4.53701 9.3097 4.64505 9.46996 4.69478 9.6516C4.74122 9.83817 4.8483 10.004 4.99922 10.1231C5.15013 10.2423 5.33633 10.3079 5.52858 10.3097H6.44357C6.78535 10.3097 7.11314 10.1739 7.35482 9.93225C7.5965 9.69057 7.73228 9.36278 7.73228 9.02099L7.73228 2.14786C7.7316 1.57842 7.50509 1.0325 7.10243 0.629846C6.69978 0.227192 6.15386 0.000682098 5.58442 0V0ZM6.44357 9.45056L5.52299 9.4235C5.4221 9.05897 5.20375 8.73792 4.9018 8.51013C4.59985 8.28235 4.23118 8.16055 3.85296 8.16363C3.47475 8.16672 3.10811 8.29451 2.80992 8.52719C2.51173 8.75987 2.29864 9.08444 2.2037 9.45056H1.28871C1.17478 9.45056 1.06552 9.40531 0.984961 9.32475C0.9044 9.24419 0.859142 9.13492 0.859142 9.02099L0.859142 7.30271H1.71828C1.83221 7.30271 1.94148 7.25745 2.02204 7.17689C2.1026 7.09633 2.14786 6.98707 2.14786 6.87314C2.14786 6.75921 2.1026 6.64994 2.02204 6.56938C1.94148 6.48882 1.83221 6.44357 1.71828 6.44357H0.859142L0.859142 2.14786C0.859142 1.80607 0.994917 1.47828 1.2366 1.2366C1.47828 0.994917 1.80607 0.859142 2.14786 0.859142L2.20928 0.886205C2.3099 1.24852 2.52631 1.56795 2.82547 1.79576C3.12463 2.02356 3.49012 2.14722 3.86614 2.14786C4.24724 2.14461 4.61684 2.01697 4.91872 1.78434C5.22059 1.55171 5.43821 1.22683 5.53846 0.859142H5.58442C5.92621 0.859142 6.254 0.994917 6.49568 1.2366C6.73736 1.47828 6.87314 1.80607 6.87314 2.14786L6.87314 6.44357H6.01399C5.90006 6.44357 5.7908 6.48882 5.71024 6.56938C5.62968 6.64994 5.58442 6.75921 5.58442 6.87314C5.58442 6.98707 5.62968 7.09633 5.71024 7.17689C5.7908 7.25745 5.90006 7.30271 6.01399 7.30271H6.87314V9.02099C6.87314 9.13492 6.82788 9.24419 6.74732 9.32475C6.66676 9.40531 6.55749 9.45056 6.44357 9.45056Z" fill="#BFC0C3"/>
                                    <path d="M4.29555 6.44336H3.43641C3.32248 6.44336 3.21321 6.48862 3.13265 6.56918C3.05209 6.64974 3.00684 6.759 3.00684 6.87293C3.00684 6.98686 3.05209 7.09612 3.13265 7.17668C3.21321 7.25724 3.32248 7.3025 3.43641 7.3025H4.29555C4.40948 7.3025 4.51874 7.25724 4.5993 7.17668C4.67986 7.09612 4.72512 6.98686 4.72512 6.87293C4.72512 6.759 4.67986 6.64974 4.5993 6.56918C4.51874 6.48862 4.40948 6.44336 4.29555 6.44336Z" fill="#BFC0C3"/>
                                </svg>
                            </p>
                        </div>
                        <div className={styles.inputStyle}>
                            <input type="number" value={value} onChange={inputValue} placeholder='0'/>
                            <p>
                                {cost} CMCX
                            </p>
                        </div>
                        <div className={styles.cost}>                            
                            <p>
                                Cost
                            </p>
                            <p>
                                {cost} CMCX
                            </p>
                        </div>
                        <div className={styles.costBorder}>                    
                            <p>
                                {discountPercent}% Bulk Discount 
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6.5" cy="6.5" r="6.25" stroke="#BFC0C3" strokeWidth="0.5"/>
                                    <path d="M6.068 8.348H7.364V7.4C8.168 6.968 8.72 6.128 8.72 5.168C8.72 3.764 7.532 2.612 6.068 2.612V3.848C6.824 3.848 7.388 4.436 7.388 5.168C7.388 5.9 6.824 6.488 6.068 6.488V8.348ZM6.68 11.084C7.208 11.084 7.64 10.676 7.64 10.124C7.64 9.596 7.208 9.164 6.68 9.164C6.128 9.164 5.72 9.596 5.72 10.124C5.72 10.676 6.128 11.084 6.68 11.084Z" fill="#BFC0C3"/>
                                </svg>
                            </p>
                            <p>
                                <svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.68263C4.4284 5.72434 4.6972 -1.08444 9 1.68263" stroke="#BFC0C3" strokeLinecap="round"/>
                                </svg>
                                {discountCake} CMCX    
                            </p>
                        </div>
                        <div className={styles.yourPay}>
                            <p>
                                You pay:
                            </p>
                        </div>
                        <div className={styles.buttonWallet}>
                            <ButtonWallet />
                        </div>
                        <p>
                            "Buy Instantly" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BuyTickets
