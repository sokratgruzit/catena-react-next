import { useSelector, useDispatch } from 'react-redux';

import styles from "../MakeProfile.module.css";

const DATA = [
    {
        step: 0,
        title: "Get Starter Collectible",
    },
    {
        step: 1,
        title: "Set Profile Picture",
    },
    {
        step: 2,
        title: "Join Team",
    },
    // {
    //     step: 3,
    //     title: "Set Name",
    // }
]

const ProfileStepsBoard = () => {
    const userData = useSelector(state => state.appState.user);
    
    return (
        <>
            <div className={styles.contHead}>
                <h2 className='font-40 ttl'>Profile Setup</h2>
                <p>Show off your stats and collectibles with your unique profile</p>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <p style={{ color: '#162029' }}>Total cost:</p>
                    <p style={{ color: '#162029' }}>1.5</p>
                    <span style={{ color: '#FF6969' }}>CMCX</span>
                </div>
                {userData?.step}
                <div className={styles.board}>
                    <div className={styles.inner}>
                        {DATA.map((item, index) => {
                            return (
                                <div className={styles.point}>
                                    <div className={styles.head}>{item.title}</div>
                                    <div className={styles.body}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="9.5" fill="#A6D0DD" stroke="#162029" />
                                        </svg>
                                        <div className={styles.line}></div>
                                    </div>
                                </div>
                            );
                        })}
                        <div >
                                    <div className={styles.head}>Set Name</div>
                                    <div >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="9.5" fill="#A6D0DD" stroke="#162029" />
                                        </svg>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className={styles.Line}></div>
            </div>
            <div className={styles.contStep}>
                <span style={{ color: '#ff6969' }}>Step 1</span>
                <p style={{ paddingBottom: '20px' }} className='font-20 ttl'>Get Starter Collectible</p>
                <p style={{ textAlign: 'center' }} className='ttl'>Every profile starts by making a “starter” collectible (NFT).</p>
                <p style={{ textAlign: 'center' }} className='ttl'>This starter will also become your first profile picture.</p>
                <p style={{ marginBottom: '20px', textAlign: 'center' }} className='ttl'>You can change your profile picture later if you get another approved CoreMultiChain Collectible.</p>
            </div>
        </>
    );
}

export default ProfileStepsBoard;