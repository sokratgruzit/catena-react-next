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
    createNFT
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

      axios.get("/user/profile-images").then(res => {
        let data = res.data;

        setProfileNfts(data);
      });
    } else {
      router.push('/', undefined, { locale, address: account });
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
          nick: nick,
          locale: locale,
          step: 3
        })
<<<<<<< HEAD
          .then(res => {
            dispatch({ type: 'SET_USER', payload: res.data });
            router.push(`/profile/${account}`, undefined, { locale });
          })
          .catch(e => setError(e.response.data));
=======
        .then(res => {
          dispatch({ type: 'SET_USER', payload: res.data });
          router.push(`/profile/${account}`, undefined, { locale, address: account });
        })
        .catch(e => setError(e.response.data));
>>>>>>> 39e701b8206cf46808a226459d50fe76d10eb44f
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

  // socket.on('emailVerified', (userId) => {
  //   console.log(`User with ID ${userId} has verified their email`);
  // });

  return (
    <div className='pT-180'>
      {account ? <div className="container">
        <div className={styles.contHead}>
          <h2 className='font-40 ttl'>Profile Setup</h2>
          <p>Show off your stats and collectibles with your unique profile</p>
          <div style={{ display: 'flex', gap: '5px' }}>
            <p style={{ color: '#162029' }}>Total cost:</p>
            <p style={{ color: '#162029' }}>1.5</p>
            <span style={{ color: '#FF6969' }}>CMCX</span>
          </div>
          <div style={{ width: '60%', height: '80px', marginTop: '40px', borderRadius: '57px', border: '1px solid #162029' }}></div>
          <div className={styles.Line}></div>
        </div>
        <div className={styles.contStep}>
          <span style={{ color: '#ff6969' }}>Step 1</span>
          <p style={{ paddingBottom: '20px' }} className='font-20 ttl'>Get Starter Collectible</p>
          <p style={{textAlign: 'center'}} className='ttl'>Every profile starts by making a “starter” collectible (NFT).</p>
          <p style={{textAlign: 'center'}} className='ttl'>This starter will also become your first profile picture.</p>
          <p style={{marginBottom: '20px', textAlign: 'center'}} className='ttl'>You can change your profile picture later if you get another approved CoreMultiChain Collectible.</p>
        </div>
        <div>
          {!userData?.step &&
            <div style={{padding: '0'}} className='container_bordered-child'>
              <div className={styles.tabHead}>
                <div>
                  <p className='font-20 ttl'>Choose your Starter!</p>
                  <p style={{color: '#162029'}}>Choose wisely: you can only ever make one starter collectible!</p>
                </div>
                <div style={{display: 'flex', gap: '5px'}}>
                  <p>Cost:</p>
                  <p>1.0</p>
                  <span style={{color: '#ff6969'}}>CMCX</span>
                </div>
              </div>
              <div className={styles.makeProfileWrapper}>
                {profileNfts?.map(item => (
                  <div
                    key={item.id}
                    className={styles.avatarCard}
                    style={activeAvatar === item.id ?
                      {
                        background: "#ff6969"
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
                  label={'Confirm'}
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
        </div>
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
              <Image width={80} height={80} src={userData?.avatar?.img} alt={userData?.avatar?.name} />
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
    </div>
  );
};

export default MakeProfile;