import { Button, Input } from '@catena-network/catena-ui-module';

import styles from "../MakeProfile.module.css"
import { Link } from 'react-router-dom';

const Collectible = ({ userData, bodyElement, buttonLabel, disable, onClick, title, text, helpText, link }) => {
    return (
        <>
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
                                disabled={disable ? false : true}
                                onClick={onClick}
                                // onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 ? handleSubmit() : null}
                                className={styles.btnBlu}
                                customStyles={{ backgroundColor: "#A6D0DD", color: "#162029", margin: "0" }}
                            />
                            <div className={styles.flex}>
                                <p style={{ color: '#389A5F' }}>{helpText}</p>
                                <p>{link}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Collectible;