import JoinCommunity from '../events/components/JoinCommunity';
import Card from '../../UI/card/Card';
import styles from './Press.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Press = () => {
  const [activeYear, setActiveYear] = useState('2021');
  const [filterData, setfilterData] = useState();

  const handleYearClick = year => {
    setActiveYear(year);
    const data = pressArr.filter(item => item.year === year);
    setfilterData(data);
  };

  const pressArr = [
    {
      id: 1,
      slug: 'ai-future-computing',
      img: '/images/press/imgOne.png',
      imgPart: '/images/press/imgPart.png',
      title: 'AI Is The Future Of Computing, And SingularityNET Is The Future Of A.I',
      year: '2018',
      description:
        'Ben Goertzel, have been among the big names arguing that the blockchain could be a crucial way to push back against some of the most worrying trends facing the field of artificial intelligence.',
    },

    {
      id: 3,
      slug: 'ai-future-computing',
      img: '/images/press/imgThree.png',
      imgPart: '/images/press/imgPartThree.png',
      title: 'AI Is The Future Of Computing, And SingularityNET Is The Future Of A.I',
      year: '2019',
      description:
        'Ben Goertzel, have been among the big names arguing that the blockchain could be a crucial way to push back against some of the most worrying trends facing the field of artificial intelligence.',
    },
    {
      id: 5,
      slug: 'ai-multi-chain-network',
      img: '/images/press/pressImgSeven.png',
      imgPart: '/images/press/imgPartTwo.png',
      title: 'This AI Powered Multi-Chain Network Is Building an Internetof Blockchains',
      year: '2020',
      description:
        'The ever-evolving blockchain technology has been around for over a decade now, but there are still various obstacles need to be addressed, such as its lack of scalability, interoperability, security and usability.',
    },
    {
      id: 2,
      slug: 'vision-for-future-ai',
      img: '/images/press/imgTwo.png',
      imgPart: '/images/press/imgPartTwo.png',
      year: '2021',
      title: 'SingularityNET’s Ben Goertzel has  a grand vision for the future of A.I',
    },
    {
      id: 4,
      slug: 'artificial-inteligence',
      img: '/images/press/imgFour.png',
      imgPart: '/images/press/imgPart.png',
      year: '2018',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
    {
      id: 6,
      slug: 'artificial-inteligence',
      img: '/images/press/imgFive.png',
      imgPart: '/images/press/imgPartTwo.png',
      year: '2021',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
    {
      id: 8,
      slug: 'artificial-inteligence',
      img: '/images/press/imgTwo.png',
      imgPart: '/images/press/imgPartTwo.png',
      year: '2019',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
  ];

  useEffect(() => {
    handleYearClick(activeYear);
  }, []);

  return (
    <div className={`${styles.mainContainer} container`}>
      <div className={`${styles.titleContainer}`}>
        <p className={styles.titlePartyOne}>Catena</p>
        <p className={styles.titlePartyTwo}>Press</p>
      </div>
      <div className={styles.bodyContainer}>
        {pressArr.map(item => (
          <Card key={item.id} dataArr={[item]} />
        ))}
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
        {/* <div className={styles.infContTitle}> */}
        <h2 className='ttl font-40'>Publics by years</h2>
        {/* </div> */}
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
        {filterData ? (
          filterData.map((item, index) => {
            return (
              <div key={index} className={styles.icCont}>
                <img src={item.imgPart} />
                <p>{item.title}</p>
              </div>
            );
          })
        ) : (
          <div className={styles.erLoadContainer}>Loading</div>
        )}
        <div className={styles.pagCont}>
          <div className={styles.pagination}>pagination</div>
        </div>
      </div>
    </div>
  );
};
export default Press;
