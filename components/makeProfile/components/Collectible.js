import { Button } from '@catena-network/catena-ui-module';
import Link from 'next/link';

import styles from "../MakeProfile.module.css"

const Collectible = ({ bodyElement, buttonLabel, disable, onClick, title, text, helpText, transactionHash }) => {
    return (
        <div style={{ padding: '0' }} className='container_bordered-child'>
            <div className={styles.tabHead}>
                <div>
                    <p className='font-20 ttl'>{title}</p>
                    <p style={{ color: '#162029' }}>{text}</p>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <p>Cost:</p>
                    <p>1.0</p>
                    <span style={{ color: '#ff6969' }}>CMCX</span>
                </div>
            </div>
            <div className={styles.makeProfileWrapper}>
                {bodyElement}
            </div>
            <div className={styles.confirmBtn}>
                <div className={styles.buttonInner}>
                    <Button
                        label={buttonLabel}
                        size={'btn-lg'}
                        type={'btn-primary'}
                        arrow={'arrow-none'}
                        element={'button'}
                        disabled={disable ? true : false}
                        onClick={onClick}
                        className={styles.btnBlu}
                        customStyles={{ backgroundColor: "#A6D0DD", color: "#162029", margin: "0" }}
                    />
                    <div className={styles.flex}>
                        <p style={{ color: '#389A5F' }}>{helpText}</p>
                        {transactionHash && <a className={styles.link} href={`https://etherscan.io/tx/${transactionHash}`}>
                            View on BscScan: {transactionHash}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.5396 15.1046C18.674 14.9703 18.7588 14.7864 18.7588 14.5743L18.7588 5.99003C18.7576 5.7916 18.6783 5.60164 18.538 5.46133C18.3977 5.32101 18.2077 5.24167 18.0093 5.2405L9.425 5.2405C9.01488 5.2405 8.67547 5.57991 8.67547 5.99003C8.67547 6.40015 9.01488 6.73956 9.425 6.73956L17.2597 6.73956L17.2597 14.5743C17.2597 14.9844 17.5992 15.3238 18.0093 15.3238C18.2143 15.3309 18.4053 15.239 18.5396 15.1046Z" fill="#162029" />
                                <path d="M6.5184 18.5424L18.419 6.64177C18.7089 6.35186 18.7089 5.87103 18.419 5.58111C18.1291 5.2912 17.6483 5.2912 17.3583 5.58111L5.45773 17.4817C5.16782 17.7716 5.16782 18.2525 5.45773 18.5424C5.74765 18.8323 6.22848 18.8323 6.5184 18.5424Z" fill="#162029" />
                            </svg>
                        </a>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collectible;