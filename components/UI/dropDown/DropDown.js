import styles from './DropDown.module.css';
import mainStyles from '../../main.module.css';

const DropDown = () => {
    return (
        <>
            <div className={styles.nftCreatorPage__categoriesSelectModal}>
                <div className={styles.nftCreatorPage__categoriesSelectModalSearchBar}>
                    <input type='text' placeholder='Search' />
                    <svg className={styles.nftCreatorPage__categoriesSelectModalSearchIcon} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.48109 11.8626C3.32766 11.8626 0.760254 9.29518 0.760254 6.14174C0.760254 2.9883 3.32766 0.420898 6.48109 0.420898C9.63453 0.420898 12.2019 2.9883 12.2019 6.14174C12.2019 9.29518 9.63453 11.8626 6.48109 11.8626ZM6.48109 1.25809C3.78532 1.25809 1.59745 3.45155 1.59745 6.14174C1.59745 8.83193 3.78532 11.0254 6.48109 11.0254C9.17687 11.0254 11.3647 8.83193 11.3647 6.14174C11.3647 3.45155 9.17687 1.25809 6.48109 1.25809Z" fill="white"/>
                        <path d="M12.3417 12.4208C12.2356 12.4208 12.1296 12.3817 12.0459 12.298L10.9296 11.1818C10.8518 11.103 10.8081 10.9967 10.8081 10.886C10.8081 10.7752 10.8518 10.6689 10.9296 10.5901C11.0915 10.4283 11.3594 10.4283 11.5212 10.5901L12.6375 11.7064C12.7993 11.8683 12.7993 12.1362 12.6375 12.298C12.5538 12.3817 12.4477 12.4208 12.3417 12.4208Z" fill="white"/>
                    </svg>
                </div>
                <div className={styles.nftCreatorPage__categoriesSelectModalSelected}>
                    <p className={styles.nftCreatorPage__categoriesSelectModalSelectedTitle}>Selected</p>
                    <div className={styles.nftCreatorPage__categoriesSelectModalSelectedTitleFiltred}>
                        <p className={styles.nftCreatorPage__categoriesSelectModalSelectedTitleActived}>Punk blue</p>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.760254 6.4209C0.760254 3.11994 3.4593 0.420898 6.76025 0.420898C10.0612 0.420898 12.7603 3.11994 12.7603 6.4209C12.7603 9.72186 10.0612 12.4209 6.76025 12.4209C3.4593 12.4209 0.760254 9.72186 0.760254 6.4209ZM6.76025 1.25811C3.92168 1.25811 1.59746 3.58232 1.59746 6.4209C1.59746 9.25948 3.92168 11.5837 6.76025 11.5837C9.59883 11.5837 11.923 9.25948 11.923 6.4209C11.923 3.58232 9.59883 1.25811 6.76025 1.25811Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.63588 4.54546C8.79936 4.70893 8.79936 4.97398 8.63588 5.13745L5.47681 8.29652C5.31333 8.46 5.04829 8.46 4.88481 8.29652C4.72134 8.13305 4.72134 7.868 4.88481 7.70453L8.04388 4.54546C8.20736 4.38198 8.4724 4.38198 8.63588 4.54546Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.88481 4.54546C5.04829 4.38198 5.31333 4.38198 5.47681 4.54546L8.63588 7.70453C8.79936 7.868 8.79936 8.13305 8.63588 8.29652C8.4724 8.46 8.20736 8.46 8.04388 8.29652L4.88481 5.13745C4.72134 4.97398 4.72134 4.70893 4.88481 4.54546Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.nftCreatorPage__categoriesSelectModalFilter}>
                    <div className={`${styles.nftCreatorPage__categoriesSelectModalFilter__item} ${styles.nftCreatorPage__categoriesSelectModalFilter__itemHover}`}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.76025" cy="7.9209" r="6.5" stroke="white"/>
                        </svg>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitle}>Tan</p>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitleNumb}>830</p>
                    </div>
                    <div className={styles.nftCreatorPage__categoriesSelectModalFilter__itemActived}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.76025" cy="7.9209" r="7" fill="#0500FF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.5849 5.23373C11.819 5.46825 11.8187 5.84815 11.5841 6.08226L7.04814 10.6103C6.81377 10.8442 6.43416 10.844 6.19999 10.6099L3.93599 8.34588C3.70168 8.11157 3.70168 7.73167 3.93599 7.49735C4.1703 7.26304 4.5502 7.26304 4.78452 7.49735L6.62463 9.33746L10.7364 5.23298C10.9709 4.99887 11.3508 4.99921 11.5849 5.23373Z" fill="white"/>
                        </svg>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitle}>Punk Blue</p>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitleNumb}>540</p>
                    </div>
                    <div className={styles.nftCreatorPage__categoriesSelectModalFilter__item}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.76025" cy="7.9209" r="6.5" stroke="white"/>
                        </svg>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitle}>Tan</p>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitleNumb}>830</p>
                    </div>
                    <div className={styles.nftCreatorPage__categoriesSelectModalFilter__item}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.76025" cy="7.9209" r="6.5" stroke="white"/>
                        </svg>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitle}>Tan</p>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitleNumb}>830</p>
                    </div>
                    <div className={styles.nftCreatorPage__categoriesSelectModalFilter__item}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.76025" cy="7.9209" r="6.5" stroke="white"/>
                        </svg>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitle}>Tan</p>
                        <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitleNumb}>830</p>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default DropDown;