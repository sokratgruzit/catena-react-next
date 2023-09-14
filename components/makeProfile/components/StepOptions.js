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

const StepOptions = ({ profileNfts, teams }) => {

    const [activeAvatar, setActiveAvatar] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState({});
    const [activeTeam, setActiveTeam] = useState(null);
    const [nick, setNick] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState("");
    const [error, setError] = useState("At least 1 CMCX required");


    const account = useSelector(state => state.connect.account);
    const balance = useSelector(state => state.connect.balance);
    const userData = useSelector(state => state.appState.user);

    const axios = useMemo(() => createAxiosInstance(), []);

    const router = useRouter();
    const { locale } = router;
    const dispatch = useDispatch();
    const { library } = useConnect();
    const {
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        createNFT
    } = useNftMarket();


    const handleSubmit = async event => {
        if (account) {
            if (!userData.step) {
                await axios.post('/user/profile', {
                    address: account,
                    avatar: selectedAvatar,
                    avatarLocked: false,
                    locale: locale,
                    step: 0
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
                        // dispatch({ type: 'SET_USER', payload: res.data });
                        // router.push(`/profile/${account}`, undefined, { locale, address: account });
                        console.log('step 3')
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

    console.log(selectedTeam, 'aq');

    return (
        <>
            {!userData?.step &&
                <div style={{ padding: '0' }} className='container_bordered-child'>
                    <div className={styles.tabHead}>
                        <div>
                            <p className='font-20 ttl'>Choose your Starter!</p>
                            <p style={{ color: '#162029' }}>Choose wisely: you can only ever make one starter collectible!</p>
                        </div>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <p>Cost:</p>
                            <p>1.0</p>
                            <span style={{ color: '#ff6969' }}>CMCX</span>
                        </div>
                    </div>
                    <div className={styles.makeProfileWrapper}>
                        {profileNfts?.map(item => (
                            <div
                                key={item.id}
                                className={styles.avatarCard}
                                style={activeAvatar === item.id ?
                                    {
                                        background: "#A6D0DD"
                                    } : {}
                                }
                                onClick={() => handleStep(item.id)}
                            >
                                <div className={styles.avatarImg}>
                                    <Image src={item.img} alt={item.name} width={80} height={80} />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))}
                        {Number(ethers.utils.formatEther(balance)) < 1 && <div>{error}</div>}
                    </div>
                    <div className={styles.confirmBtn}>
                        <Button
                            label={'Enable'}
                            size={'btn-lg'}
                            type={'btn-primary'}
                            arrow={'arrow-none'}
                            element={'button'}
                            disabled={() => Number(ethers.utils.formatEther(balance)) >= 1 ? false : true}
                            onClick={handleSubmit}
                            // onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 ? handleSubmit() : null}
                            className={styles.btnBlu}
                        />
                    </div>
                </div>}
            {userData?.step === 1 && <div className={styles.makeProfileWrapper}>
                <div style={{ padding: '0' }} className='container_bordered-child'>
                    <div className={styles.tabHead}>
                        guduna
                    </div>
                    <div
                        onClick={() => handleStep("back")}
                        style={{
                            cursor: "pointer",
                            color: "#ff6969"
                        }}
                    >
                        &larr; Previous Step
                    </div>
                    <div className={styles.avatarCard}>
                        <div className={styles.avatarImg}>
                            <Image width={80} height={80} src={userData?.avatar?.img} alt={userData?.avatar?.name} />
                            <p>{userData?.avatar?.name}</p>
                        </div>
                    </div>
                    <div className={styles.confirmBtn}>
                        <Button
                            label={'Lock Avatar'}
                            size={'btn-lg'}
                            type={'btn-primary'}
                            arrow={'arrow-none'}
                            element={'button'}
                            disabled={() => Number(ethers.utils.formatEther(balance)) >= 1 ? false : true}
                            onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 ? handleSubmit() : null}
                            className={styles.btnBlu}
                        />
                    </div>
                </div>
            </div>}
            {userData?.step === 2 && <div className={styles.makeProfileWrapper}>
                <div style={{ padding: '0' }} className='container_bordered-child'>
                    <div className={styles.tabHead}>
                        <h3 style={{ color: '#162029' }} className='ttl font-20'>Join a Team</h3>
                        <p style={{ width: '60%' }}>There’s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!</p>
                    </div>
                    <div className={styles.makeProfileWrapper}>
                        <div
                            onClick={() => handleStep("back")}
                            style={{
                                cursor: "pointer",
                                color: "#ff6969"
                            }}
                        >
                            &larr; Previous Step
                        </div>
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
                    </div>
                    <div className={styles.confirmBtn}>
                        <Button
                            label={selectedTeam !== "" ? 'Next Step' : 'Enable'}
                            size={'btn-lg'}
                            type={'btn-primary'}
                            arrow={'arrow-none'}
                            element={'button'}
                            // disabled={() => Number(ethers.utils.formatEther(balance)) >= 1 &&
                            //     nick &&
                            //     selectedTeam
                            //     ? false : true}
                            disabled={selectedTeam !== "" ? false : true}
                            onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 &&
                                // nick &&
                                selectedTeam
                                ? handleSubmit() : null}
                            className={styles.btnBlu}
                            customStyles={{ backgroundColor: "#A6D0DD", color: "#162029" }}
                        />
                    </div>
                </div>
            </div>}
            {userData?.step === 3 && <div className={styles.makeProfileWrapper}>
                <div style={{ padding: '0' }} className='container_bordered-child'>
                    <div className={styles.tabHead}>
                        <h3 style={{ color: '#162029' }} className='ttl font-20'>Join a Team</h3>
                        <p style={{ width: '60%' }}>There’s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!</p>
                    </div>
                    <div className={styles.makeProfileWrapper}>
                        <div
                            onClick={() => handleStep("back")}
                            style={{
                                cursor: "pointer",
                                color: "#ff6969"
                            }}
                        >
                            &larr; Previous Step
                        </div>
                    </div>
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
                    <div className={styles.confirmBtn}>
                        <Button
                            label={selectedTeam !== "" ? 'Next Step' : 'Enable'}
                            size={'btn-lg'}
                            type={'btn-primary'}
                            arrow={'arrow-none'}
                            element={'button'}
                            // disabled={() => Number(ethers.utils.formatEther(balance)) >= 1 &&
                            //     nick &&
                            //     selectedTeam
                            //     ? false : true}
                            disabled={nick ? false : true}
                            onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 &&
                                nick
                                ? handleSubmit() : null}
                            className={styles.btnBlu}
                            customStyles={{ backgroundColor: "#A6D0DD", color: "#162029" }}
                        />
                    </div>
                </div>
            </div>}
        </>
    );
}

export default StepOptions;