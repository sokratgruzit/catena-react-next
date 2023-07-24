import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import styles from './Press.module.css';
import { useState, useMemo, useEffect } from 'react';
import createAxiosInstance from '../../../pages/api/axios';

const Press = () => {
  const [activeYear, setActiveYear] = useState('2021');
  const axios = useMemo(() => createAxiosInstance(), []);
  const [allPress, setAllPress] = useState([]);

  const handleYearClick = (year) => {
    setActiveYear(year);
  };

  const pressArr = [
    {
      id: 1,
      img: '/images/press/imgOne.png',
      imgPart: '/images/press/imgPart.png',
      title: 'AI Is The Future Of Computing, And SingularityNET Is The Future Of A.I',
      description:
        'Ben Goertzel, have been among the big names arguing that the blockchain could be a crucial way to push back against some of the most worrying trends facing the field of artificial intelligence.',
    },

    {
      id: 3,
      img: '/images/press/imgThree.png',
      imgPart: '/images/press/imgPartThree.png',
      title: 'AI Is The Future Of Computing, And SingularityNET Is The Future Of A.I',
      description:
        'Ben Goertzel, have been among the big names arguing that the blockchain could be a crucial way to push back against some of the most worrying trends facing the field of artificial intelligence.',
    },
    {
      id: 5,
      img: '/images/press/pressImgSeven.png',
      imgPart: '/images/press/imgPartTwo.png',
      title: 'This AI Powered Multi-Chain Network Is Building an Internetof Blockchains',
      description:
        'The ever-evolving blockchain technology has been around for over a decade now, but there are still various obstacles need to be addressed, such as its lack of scalability, interoperability, security and usability.',
    },
    {
      id: 2,
      img: '/images/press/imgTwo.png',
      imgPart: '/images/press/imgPartTwo.png',
      title: 'SingularityNET’s Ben Goertzel has  a grand vision for the future of A.I',
    },
    {
      id: 4,
      img: '/images/press/imgFour.png',
      imgPart: '/images/press/imgPart.png',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
    {
      id: 6,
      img: '/images/press/imgFive.png',
      imgPart: '/images/press/imgPartTwo.png',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
    {
      id: 8,
      img: '/images/press/imgTwo.png',
      imgPart: '/images/press/imgPartTwo.png',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
  ];

  useEffect(() => {
    axios.get(`http://localhost:4003/press/get-all-press`)
    .then(res => {
      setAllPress(res?.data);
    })
    .catch(err => {
      console.log(err?.response);
    });
  }, []);

  return (
    <div className={`${styles.mainContainer} container`}>
      <img src={`http://localhost:4003/uploads/press/${allPress[0]?.logo_image}`} />
      <div className={`${styles.titleContainer}`}>
        <p className={styles.titlePartyOne}>Catena</p>
        <p className={styles.titlePartyTwo}>Press</p>
      </div>
      <div className={styles.bodyContainer}>
        <Card dataArr={pressArr} />
      </div>
      <div className={`${styles.sourcesContainer}container_bordered`}>
        <div className={styles.sourcesTitle}>
          <h1 className='ttl font-40'>Sources</h1>
        </div>
        <div className={`${styles.logoContainer}`}>
          <div className={styles.logoLine}>
            <div className={styles.logCon}>
              <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/CNBC.png' alt='sources' className={styles.logo} />

            </div>
            <div className={styles.logCon}>
              <img src='/images/press/bloombergLogo.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/CNBC.png' alt='sources' className={styles.logo} />
            </div>
          </div>
          <div className={styles.logoLine}>
            <div className={styles.logCon}>
              <img src='/images/press/Company.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/Frame1.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/CNBC.png' alt='sources' className={styles.logo} />
            </div>
            <div className={styles.logCon}>
              <img src='/images/press/Frame 2.png' alt='sources' className={styles.logo} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infContTitle}>
          <h2 className='ttl font-40'>Publics by years</h2>
        </div>
        <div className={styles.yearsStats}>
          <div
            className={activeYear === '2021' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2021')}
          >
            2021
          </div>
          <div
            className={activeYear === '2020' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2020')}
          >
            2020
          </div>
          <div
            className={activeYear === '2019' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2019')}
          >
            2019
          </div>
          <div
            className={activeYear === '2018' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2018')}
          >
            2018
          </div>
        </div>

      </div>
      <div className={styles.statisticContainer}>
        {pressArr.map((item, index) => {
          return (
            <div className={styles.icCont}>
              <img src={item.imgPart} />
              <p>{item.title}</p>
            </div>
          )
        })}
        <div className={styles.pagCont}>
          <div className={styles.pagination}>pagination</div>
        </div>
      </div>
      <div className={styles.joinComCont}>
        <JoinCommunity />
      </div>
    </div>
  );
};
export default Press;
