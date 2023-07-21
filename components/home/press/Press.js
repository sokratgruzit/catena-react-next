import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import styles from './Press.module.css';
import { useState } from 'react';

const Press = () => {

  const [activeYear, setActiveYear] = useState('2021');

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

  return (
    <div className={`${styles.mainContainer} container`}>
      <div className={styles.titleContainer}>
        <p className={styles.titlePartyOne}>Catena</p>
        <p className={styles.titlePartyTwo}>Press</p>
      </div>
      <div className={`${styles.bodyContainer} container`}>
        <Card dataArr={pressArr} />
      </div>
      <div className={styles.sourcesContainer}>
        <p>Sources</p>
        <div className={styles.logoContainer}>
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
        <div className={styles.infoContTitle}>
          <p>Publics by years</p>
        </div>
        <div className={styles.yearsStats}>
          <div
            className={activeYear === '2021' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2021')}
          >
            <p className={activeYear === '2021' ? styles.active : styles.bottomLine}>2021</p>
          </div>
          <div
            className={activeYear === '2020' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2020')}
          >
            <p className={activeYear === '2020' ? styles.active : styles.bottomLine}>2020</p>
          </div>
          <div
            className={activeYear === '2019' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2019')}
          >
            <p className={activeYear === '2019' ? styles.active : styles.bottomLine}>2019</p>
          </div>
          <div
            className={activeYear === '2018' ? styles.activeCont : styles.pasCont}
            onClick={() => handleYearClick('2018')}
          >
            <p className={activeYear === '2018' ? styles.active : styles.bottomLine}>2018</p>
          </div>
        </div>

      </div>
      <div className={styles.statisticContainer}>
        <div className={styles.icCont}>
          <img src='/images/press/imgPartThree.png' />
          <p>AI Is The Future Of Computing, And SingularityNET Is The Future Of AI</p>
        </div>
        <div className={styles.icCont}>
          <img src='/images/press/imgPart.png' />
          <p>Get Set For ‘a Wild Ride’: Dfinity’s Dom Williams on the Launch of The Internet Computer</p>
        </div>
        <div className={styles.icCont}>
          <img src='/images/press/imgPartThree.png' />
          <p>AI Is The Future Of Computing, And SingularityNET Is The Future Of AI</p>
        </div>
        <div className={styles.icCont}>
          <img src='/images/press/imgPartTwo.png' />
          <p>Get Set For ‘a Wild Ride’: Dfinity’s Dom Williams on the Launch of The Internet Computer</p>
        </div>
        <div className={styles.icContL}>
          <img src='/images/press/imgPartThree.png' />
          <p>AI Is The Future Of Computing, And SingularityNET Is The Future Of AI</p>
        </div>
        <div className={styles.pagCont}>
          <div className={styles.pagination}>L O A D I N G ... </div>
        </div>
      </div>
      <div className={styles.joinComCont}>
        <JoinCommunity />
      </div>
    </div >
  );
};
export default Press;
