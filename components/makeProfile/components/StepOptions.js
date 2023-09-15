import Image from 'next/image';
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useConnect } from '../../../hooks/useConnect';
import { useNftMarket } from '../../../hooks/useNftMarket';
import { Button, Input } from '@catena-network/catena-ui-module';
import createAxiosInstance from '../../../pages/api/axios';
import { ethers } from 'ethers';

import styles from "../MakeProfile.module.css"
import Collectible from './Collectible';

const StepOptions = ({ profileNfts, teams }) => {

    const [activeAvatar, setActiveAvatar] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState({});
    const [activeTeam, setActiveTeam] = useState(null);
    const [nick, setNick] = useState('');
    const [selectedTeam, setSelectedTeam] = useState("");
    const [error, setError] = useState("At least 1 CMCX required");
    
    const account = useSelector(state => state.connect.account);
    const balance = useSelector(state => state.connect.balance);
    const userData = useSelector(state => state.appState.user);
    const [buttonLabel, setButtonLabel] = useState(!userData?.step ? "Confirm" : "Next Step");
    const [helpText, setHelpText] = useState('');
    const [showAddres, setShowAddres] = useState('');

    const axios = useMemo(() => createAxiosInstance(), []);

    const router = useRouter();
    const { locale } = router;
    const dispatch = useDispatch();
    const { library } = useConnect();
    const { fetchNFTs, fetchMyNFTsOrListedNFTs, createNFT } = useNftMarket();

    const handleSubmit = async event => {
        if (account) {
            if (!userData.step) {
                await axios.post('/user/profile', {
                    address: account,
                    avatar: selectedAvatar,
                    avatarLocked: false,
                    locale: locale,
                    step: "Starter"
                })
                    .then(res => {
                        dispatch({ type: 'SET_USER', payload: res.data });
                        setButtonLabel("Next Step");
                        setHelpText("Transaction Submited!")
                        setShowAddres(account)
                    })
                    .catch(e => setError(e.response.data));
            }

            if (userData.step === 0) {
                await axios.post('/user/profile', {
                    address: account,
                    step: 1
                })
                    .then(res => {
                        dispatch({ type: 'SET_USER', payload: res.data });
                    })
                    .catch(e => setError(e.response.data));
            }

            if (userData.step === 1) {
                createNFT(
                    userData.avatar.name,
                    userData.avatar.price,
                    userData.avatar.url,
                    userData.avatar.description,
                    userData.avatar.website,
                    userData.avatar.royalties,
                    userData.avatar.fileSize,
                    userData.avatar.category,
                    userData.avatar.property,
                    userData.avatar.social
                );
            }

            if (userData.step === 2) {
                await axios.post('/user/profile', {
                    address: account,
                    team: selectedTeam,
                    locale: locale,
                    step: 3
                })
                    .then(res => {
                        dispatch({ type: 'SET_USER', payload: res.data });
                    })
                    .catch(e => setError(e.response.data));
            }
            if (userData.step === 3) {
                await axios.post('/user/profile', {
                    address: account,
                    nick: nick,
                    locale: locale,
                    step: 3
                })
                    .then(res => {
                        dispatch({ type: 'SET_USER', payload: res.data });
                        router.push(`/profile/${account}`, undefined, { locale, address: account });
                    })
                    .catch(e => setError(e.response.data));
            }
        }
    };

    const handleStep = async (avatarId) => {
        if (!userData.step && avatarId !== "back") {
            setActiveAvatar(avatarId);
            let selected = profileNfts.find(nft => nft.id == avatarId);
            setSelectedAvatar(selected);
        }

        if (avatarId === "back") dispatch({ type: 'SET_STEP', payload: 0 });
    };

    return (
        <>
            <Collectible
                bodyElement={
                    <>
                        {profileNfts?.map(item => (
                            <div
                                key={item.id}
                                className={styles.avatarCard}
                                style={activeAvatar === item.id ? { background: "#A6D0DD" } : {}}
                                onClick={() => handleStep(item.id)}
                            >
                                <div className={styles.avatarImg}>
                                    <Image src={item.img} alt={item.name} width={80} height={80} />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))}
                        {Number(ethers.utils.formatEther(balance)) < 1 && <div>{error}</div>}
                    </>
                }
                userData={userData}
                title={"Choose your Starter!"}
                text={"Choose wisely: you can only ever make one starter collectible!"}
                buttonLabel={buttonLabel}
                disable={activeAvatar}
                onClick={handleSubmit}
                helpText={helpText}
                link={showAddres}
            />
            <Collectible
                bodyElement={
                    <div>
                        <div className={styles.avatarCard}>
                            <div className={styles.avatarImg}>
                                <Image width={80} height={80} src={userData?.avatar?.img} alt={userData?.avatar?.name} />
                                <p>{userData?.avatar?.name}</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p className='font-20 ttl'>Allow collectible to be locked</p>
                            <p style={{ color: '#162029' }}>The collectible you've chosen will be locked in a smart contract while it’s being used as your profile picture. Don't worry - you'll be able to get it back at any time.</p>
                        </div>
                    </div>
                }
                userData={userData}
                title={"Choose Collectible"}
                text={"Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below. Only approved Pancake Collectibles can be used. See the list"}
                buttonLabel={'Next Step'}
                disable={() => Number(ethers.utils.formatEther(balance)) >= 1 ? false : true}
                onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 ? handleSubmit() : null}
            />
            <Collectible
                bodyElement={
                    <>
                        {teams?.map(item => (
                            <div
                                key={item.id}
                                className={styles.avatarCard}
                                style={activeTeam === item.id ?
                                    {
                                        background: "#A6D0DD"
                                    } : {}
                                }
                                onClick={() => {
                                    setActiveTeam(item.id);
                                    setSelectedTeam(item.name);
                                }}
                            >
                                <div className={styles.avatarImg}>
                                    <Image src={`/images/${item.img}`} alt={item.name} width={50} height={50} />
                                    <p>{item.name}</p>
                                </div>
                                <span
                                    className={styles.radio}
                                    style={activeTeam === item.id ?
                                        {
                                            background: "#0500ff",
                                            opacity: ".5"
                                        } : {}
                                    }
                                ></span>
                            </div>
                        ))}
                    </>
                }
                userData={userData}
                title={"Join a Team"}
                text={"There’s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!"}
                buttonLabel={selectedTeam !== "" ? 'Next Step' : 'Enable'}
                disable={selectedTeam}
                onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 &&
                    selectedTeam
                    ? handleSubmit() : null}
            />
            <Collectible
                bodyElement={
                    <>
                        <Input
                            type={"default"}
                            editable={true}
                            name="nick"
                            value={nick}
                            emptyFieldErr={true}
                            inputType={"text"}
                            placeholder={"Your nick name"}
                            label={"Nick Name"}
                            onChange={e => setNick(e.target.value)}
                        />
                        <p style={{ color: "#ff6969" }}>Nick name can't be changed</p>
                    </>
                }
                userData={userData}
                title={"Set Your Name"}
                text={"Your name must be at least 3 and at most 15 standard letters and numbers long. You can’t change this once you click Confirm."}
                buttonLabel={nick !== "" ? 'Next Step' : 'Enable'}
                disable={nick !== "" ? false : true}
                onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 &&
                    nick
                    ? handleSubmit() : null}
            />
        </>
    );
}

export default StepOptions;