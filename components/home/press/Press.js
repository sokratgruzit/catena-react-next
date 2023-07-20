import JoinCommunity from '../events/components/JoinCommunity';
import styles from './Press.module.css';

const Press = () => {
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
  ];

  const arrPartTwo = [
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
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.titlePartyOne}>Catena</p>
          <p className={styles.titlePartyTwo}>Press</p>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.mapContainer}>
          {pressArr.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.img} alt={`Image`} className={styles.pressImage} />
              <img src={item.imgPart} alt={`ImagePart`} className={styles.icon} />
              <h2>{item.title}</h2>
              {item.description && <p>{item.description}</p>}
            </div>
          ))}
        </div>
        <div className={styles.mapContainerTwo}>
          {arrPartTwo.map(item => (
            <div key={item.id} className={styles.itemSmall}>
              <img src={item.img} alt={`Image`} className={styles.pressImage} />
              <img src={item.imgPart} alt={`ImagePart`} className={styles.icon} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
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
        <p>Publics by years</p>
        <div className={styles.yearsStats}>
          <div className={styles.line}>2021 </div>
          <div className={styles.line}>2020 </div>
          <div className={styles.line}>2019 </div>
          <div className={styles.active}>2018 </div>
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
        <div className={styles.loadPub}>Load More Publics</div>
      </div>
      <div className={styles.joinComCont}>
        <JoinCommunity />
      </div>
    </div >
  );
};
export default Press;
