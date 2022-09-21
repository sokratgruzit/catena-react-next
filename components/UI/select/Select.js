import React from "react";
import styles from "./Select.module.css";
import {useState} from "react";

const Select = (props) => {
    const [activeSelect, setActiveSelect] = useState(false);
    const [ selectName, setSelectName ] = useState("Win Rate");

    const openSelect = () => {
        if (activeSelect) {
            setActiveSelect(!activeSelect);
        } else {
            setActiveSelect(true);
        }
    }

    const selectHendler = (name) => {
        setSelectName(name);
        setActiveSelect(false);   
    }
    return (
        <div
            className={`${styles.selectContainer} ${activeSelect ? styles.selectContainerActive : ''}`}
        >
            <div
                className={styles.selectTitleContainer}
                onClick={
                    () => {
                        openSelect();
                    }
                }
            >
                <span>{selectName}</span>
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.234315 0.209787C0.546734 -0.0699288 1.05327 -0.0699288 1.36569 0.209787L4 2.56834L6.63432 0.209787C6.94673 -0.0699288 7.45327 -0.0699288 7.76569 0.209787C8.0781 0.489502 8.0781 0.94301 7.76569 1.22273L5.13134 3.58131C4.50781 4.13956 3.49219 4.13956 2.86866 3.58131L0.234315 1.22273C-0.0781049 0.94301 -0.0781049 0.489502 0.234315 0.209787Z" fill="white"/>
                </svg>
            </div>
            <div
                className={styles.selectOptions}
                onMouseLeave={() => {
                    openSelect();
                }}
            >
                <div className={styles.selectOptionsInn}>
                    <div
                        className={styles.selectOption} 
                        onClick={() => {
                            selectHendler("Rounds Played")
                        }}
                    >
                        Rounds Played
                    </div>
                    <div
                        className={styles.selectOption} 
                        onClick={() => {
                            selectHendler("Net Winnings")
                        }}
                    >
                        Net Winnings
                    </div>
                    <div
                        className={styles.selectOption} 
                        onClick={() => {
                            selectHendler("Total CAKE")
                        }}
                    >
                        Total CAKE
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;
