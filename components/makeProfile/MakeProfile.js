import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import createAxiosInstance from '../../pages/api/axios';
import { useConnect } from '../../hooks/useConnect';
import { useNftMarket } from '../../hooks/useNftMarket';

import styles from './MakeProfile.module.css';

import ProfileStepsBoard from './components/ProfileStepsBoard';
import StepOptions from './components/StepOptions';

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

const MakeProfile = () => {
  const [profileNfts, setProfileNfts] = useState([]);

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

  const handleStep = async (step) => {
    if (userData?.step) dispatch({ type: 'SET_STEP', payload: step });
};

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

  // socket.on('emailVerified', (userId) => {
  //   console.log(`User with ID ${userId} has verified their email`);
  // });

  return (
    <div className='pT-180'>
      {account ? <div className="container">
        <ProfileStepsBoard handleStep={handleStep} />
        <StepOptions profileNfts={profileNfts} teams={teams} />
      </div> : <div className={`${styles.loadingElement}`}>Loading...</div>}
    </div>
  );
};

export default MakeProfile;