import { useSelector, useDispatch } from 'react-redux';

import styles from "../MakeProfile.module.css";

const DATA = [
    {
        step: 0,
        title: "Get Starter Collectible",
        descriptionTitle: "Get Starter Collectible",
        description: "Every profile starts by making a “starter” collectible (NFT). This starter will also become your first profile picture. You can change your profile picture later if you get another approved CoreMultiChain Collectible."
    },
    {
        step: 1,
        title: "Set Profile Picture",
        descriptionTitle: "Get Starter Collectible",
        description: "",
    },
    {
        step: 2,
        title: "Join Team",
        descriptionTitle: "Get Starter Collectible",
        description: "It won’t be possible to undo the choice you make for the foreseeable future!"
    },
    {
        step: 3,
        title: "Set Name",
        descriptionTitle: "Get Starter Collectible",
        description: "This name will be shown in team leaderboards and search results as long as your profile is active."
    }
]

const ProfileStepsBoard = ({ handleStep }) => {
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
                <div className={styles.board}>
                    <div className={styles.steps}>
                        {DATA.map((item, index) => {
                            return (
                                <>
                                    <div className={styles.circleTitle}>
                                        <div className={styles.titleDiv}>{item.title}</div>
                                        <div className={styles.stepChart}>
                                            {index !== 0 && <div className={styles.boardLine} style={{backgroundColor: userData?.step >= index && "#A6D0DD"}} ></div>}
                                            <div className={styles.circle} style={{backgroundColor: userData?.step >= index && "A6D0DD", backgroundColor: userData?.step >= index && "#A6D0DD"}} onClick={() => userData?.step >= index && handleStep(index + 1)}>
                                                {userData?.step >= index + 1 && <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.82464 0.176111C8.05875 0.410632 8.05841 0.790531 7.82389 1.02464L3.28789 5.55264C3.05351 5.7866 2.6739 5.78643 2.43974 5.55226L0.175736 3.28826C-0.0585786 3.05395 -0.0585786 2.67405 0.175736 2.43974C0.410051 2.20542 0.789949 2.20542 1.02426 2.43974L2.86437 4.27985L6.97611 0.175362C7.21063 -0.058746 7.59053 -0.0584107 7.82464 0.176111Z" fill="#162029" />
                                                </svg>}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.Line}></div>
            </div>
            <div className={styles.contStep}>
                <span style={{ color: '#ff6969' }}>Step {userData?.step  || 1}</span>
                <p className='font-20 ttl'>{DATA[userData?.step - 1 || 0]?.descriptionTitle}</p>
                <p style={{ textAlign: 'center' }} className='ttl'>{DATA[userData?.step - 1 || 0]?.description}</p>
            </div>
        </>
    );
}

export default ProfileStepsBoard;