import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Input } from '@catena-network/catena-ui-module';
import { ethers } from 'ethers';

import createAxiosInstance from '../../pages/api/axios';
import { useConnect } from '../../hooks/useConnect';
import { socket } from '../../pages/api/socket';
import { useNftMarket } from '../../hooks/useNftMarket';

import styles from './MakeProfile.module.css';

const MakeProfile = () => {
  const teams = [
    {
      id: 0,
      img: 'anarchy.jpg',
      name: 'Catena Anarchy'
    },
    {
      id: 1,
      img: 'chaos.jpg',
      name: 'Catena Chaos'
    },
    {
      id: 2,
      img: 'mentors.png',
      name: 'Catena Mentors'
    }
  ];

  const [profileNfts, setProfileNfts] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState({});
  const [activeAvatar, setActiveAvatar] = useState(null);
  const [activeTeam, setActiveTeam] = useState(null);
  const [nick, setNick] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [error, setError] = useState("At least 1 CMCX required");

  const account = useSelector(state => state.connect.account);
  const balance = useSelector(state => state.connect.balance);
  const userData = useSelector(state => state.appState.user);

  const router = useRouter();
  const { locale } = router;
  const axios = useMemo(() => createAxiosInstance(), []);
  const dispatch = useDispatch();
  const { library } = useConnect();
  const { 
    fetchNFTs,
    fetchMyNFTsOrListedNFTs,
    buyNFT
  } = useNftMarket();

  useEffect(() => {
    if (account) {
      axios
        .post('/user', { address: account })
        .then(res => {
          let user = res?.data;

          dispatch({ type: 'SET_USER', payload: user });
        })
        .catch(err => {
          console.log(err.response);
        });
      
      // fetchMyNFTsOrListedNFTs("fetchItemsListed", "profile").then(items => {
      //   console.log(items)
      // });
  
      fetchNFTs("profile").then(items => {
        setProfileNfts(items);
      });
    } else {
      router.push('/', undefined, { locale });
    }
  }, [account]);

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
        buyNFT(userData.avatar, true);
      }

      if (userData.step === 2) {
        await axios.post('/user/profile', {
          address: account,
          team: selectedTeam,
          nick: nick,
          locale: locale,
          step: 3
        })
        .then(res => {
          dispatch({ type: 'SET_USER', payload: res.data });
          router.push(`/profile/${account}`, undefined, { locale });
        })
        .catch(e => setError(e.response.data));
      }
    }
  };

  const handleStep = async (avatarId) => {
    if (!userData.step && avatarId !== "back") {
      setActiveAvatar(avatarId);
      let selected = profileNfts.find(nft => nft.tokenId == avatarId);
      setSelectedAvatar(selected);
    }

    if (avatarId === "back") dispatch({ type: 'SET_STEP', payload: 0 });
  };

  socket.on('emailVerified', (userId) => {
    console.log(`User with ID ${userId} has verified their email`);
  });
console.log(userData)
  return (
    <>
      {account ? <div className="container">
        {!userData?.step && <div className={styles.makeProfileWrapper}>
          {profileNfts?.map(item => (
            <div 
              key={item.tokenId} 
              className={styles.avatarCard}
              style={activeAvatar === item.tokenId ? 
                {
                  background: "#ff6969"
                } : {}
              }
              onClick={() => handleStep(item.tokenId)}
            >
              <div className={styles.avatarImg}>
                <Image src={item.image} alt={item.name} width={50} height={50} />
                <p>{item.name}</p>
              </div>
              <span 
                className={styles.radio}
                style={activeAvatar === item.tokenId ? 
                  {
                    background: "#0500ff",
                    opacity: ".5"
                  } : {}
                }
              ></span>
            </div>
          ))}
          {Number(ethers.utils.formatEther(balance)) < 1 && <div>{error}</div>}
          <Button
            label={'Confirm'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={'arrow-none'}
            element={'button'}
            disabled={() => Number(ethers.utils.formatEther(balance)) >= 1 ? false : true}
            onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 ? handleSubmit() : null}
            className={styles.btnBlu}
          />
        </div>}
        {userData?.step === 1 && <div className={styles.makeProfileWrapper}>
          <div 
            onClick={() => handleStep("back")}
            style={{
              cursor: "pointer",
              color: "#ff6969"
            }}
          >&larr; Previous Step</div>
          <div className={styles.avatarCard}>
            <div className={styles.avatarImg}>
              <Image width={50} height={50} src={userData?.avatar?.image} alt={userData?.avatar?.name} />
              <p>{userData?.avatar?.name}</p>
            </div>
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
        </div>}
        {userData?.step === 2 && <div className={styles.makeProfileWrapper}>
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
          {teams?.map(item => (
            <div 
              key={item.id} 
              className={styles.avatarCard}
              style={activeTeam === item.id ? 
                {
                  background: "#ff6969"
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
          <Button
            label={'Select Team'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={'arrow-none'}
            element={'button'}
            disabled={() => Number(ethers.utils.formatEther(balance)) >= 1 &&
              nick &&
              selectedTeam
              ? false : true}
            onClick={() => Number(ethers.utils.formatEther(balance)) >= 1 &&
              nick &&
              selectedTeam
              ? handleSubmit() : null}
            className={styles.btnBlu}
          />
        </div>}
      </div> : <div className={`${styles.loadingElement}`}>Loading...</div>}
    </>
  );
};

export default MakeProfile;