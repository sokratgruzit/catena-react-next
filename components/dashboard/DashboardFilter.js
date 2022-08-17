import React, { useState } from 'react';
import styles from './DashboardFilter.module.css';
import mainStyles from '../main.module.css';

const DashboardFilter = () => {
    const [filterMenu, setfilterMenu] = useState(false);
    const toggleFilterMenuHandler = () => {
        setfilterMenu(!filterMenu);
    };

    return (
        <div className={`${mainStyles.container} ${styles.containerMargin} container`}>
            <div className={styles.dashboardTop__inner}>
                <div className={styles.dashboardFilter}>
                    <input
                        type="search"
                        placeholder="Search by Address / Txn ID / Token / Block"
                    ></input>
                    <a href="##" className={styles.dashboardFilter__searchBtn}>
                        <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M6.70131 11.4417C3.54787 11.4417 0.980469 8.87428 0.980469 5.72084C0.980469 2.5674 3.54787 0 6.70131 0C9.85475 0 12.4221 2.5674 12.4221 5.72084C12.4221 8.87428 9.85475 11.4417 6.70131 11.4417ZM6.70131 0.837196C4.00554 0.837196 1.81766 3.03065 1.81766 5.72084C1.81766 8.41103 4.00554 10.6045 6.70131 10.6045C9.39708 10.6045 11.585 8.41103 11.585 5.72084C11.585 3.03065 9.39708 0.837196 6.70131 0.837196Z"
                            fill="white"
                        />
                        <path
                            d="M12.5609 11.9999C12.4549 11.9999 12.3488 11.9608 12.2651 11.8771L11.1488 10.7609C11.071 10.6821 11.0273 10.5758 11.0273 10.4651C11.0273 10.3543 11.071 10.248 11.1488 10.1692C11.3107 10.0074 11.5786 10.0074 11.7405 10.1692L12.8567 11.2855C13.0186 11.4474 13.0186 11.7153 12.8567 11.8771C12.773 11.9608 12.667 11.9999 12.5609 11.9999V11.9999Z"
                            fill="white"
                        />
                        </svg>
                    </a>
                    <div className={`${styles.dashboardFilter__btn} ${filterMenu ? styles.active : ""}`} onClick={toggleFilterMenuHandler}>
                        <p className={mainStyles.font_13}>All Filters</p>
                        <svg
                            className={styles.filterArrow}
                            width="8"
                            height="5"
                            viewBox="0 0 8 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.71967 0.21967C1.01256 -0.0732233 1.48744 -0.0732233 1.78033 0.21967L4.25 2.68934L6.71967 0.21967C7.01256 -0.0732233 7.48744 -0.0732233 7.78033 0.21967C8.07322 0.512563 8.07322 0.987437 7.78033 1.28033L5.31063 3.75003C4.72607 4.33459 3.77393 4.33459 3.18937 3.75003L0.71967 1.28033C0.426777 0.987437 0.426777 0.512563 0.71967 0.21967Z"
                            fill="white"
                        />
                        </svg>
                    </div>
                    <div
                        className={`${filterMenu ? styles.active : ""} ${
                        styles.modalFilter
                        }`}
                    >
                        <p>Token</p>
                        <p>Accounts</p>
                        <p>Blocks</p>
                        <p>Txn ID</p>
                        <p>Contract</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardFilter;
