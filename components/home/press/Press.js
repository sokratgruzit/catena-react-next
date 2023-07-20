// import JoinCommunity from './components/joinCommunity/JoinCommunity';
import styles from './Press.module.css';

const Press = () => {
  const pressArr = [
    {
      id: 1,
      img: '/images/press/imgOne.png',
      imgPart: '/images/press/imgPart.png',
      title: 'How the Blockchain Could Break Big Tech’s Hold on A.I.',
      description:
        'Ben Goertzel, have been among the big names arguing that the blockchain could be a crucial way to push back against some of the most worrying trends facing the field of artificial intelligence.',
    },

    {
      id: 3,
      img: '/images/press/imgThree.png',
      imgPart: '/images/press/imgPartThree.png',
      title: 'AI Is The Future Of Computing, And SingularityNET Is The Future Of AI',
      description:
        'Ben Goertzel, have been among the big names arguing that the blockchain could be a crucial way to push back against some of the most worrying trends facing the field of artificial intelligence.',
    },
    {
      id: 5,
      img: '/images/press/imgFive.png',
      imgPart: '/images/press/imgPartTwo.png',
      title:
        'Cisco, SingularityNET to This AI Powered Multi-Chain Network Is Building an Internet  of Blockchains Artificial Intelligence via Blockchain',
      description:
        'The ever-evolving blockchain technology has been around for over a decade now, but there are still various obstacles need to be addressed, such as its lack of scalability, interoperability, security and usability.',
    },
  ];

  const arrPartTwo = [
    {
      id: 2,
      img: '/images/press/imgTwo.png',
      imgPart: '/images/press/imgPartTwo.png',
      title: 'SingularityNET’s Ben Goertzel has  a grand vision for the future of AI',
    },
    {
      id: 4,
      img: '/images/press/imgFour.png',
      imgPart: '/images/press/imgPart.png',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
    {
      id: 6,
      img: '/images/press/imgTwo.png',
      imgPart: '/images/press/imgPartTwo.png',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
    {
      id: 6,
      img: '/images/press/imgFour.png',
      imgPart: '/images/press/imgPartTwo.png',
      title: 'Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain',
    },
  ];

  return (
    <div className={`${styles.mainContainer} ${'container'}`}>
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
          <img src='/images/press/sources.png' alt='sources' className={styles.imageLogo} />
        </div>
      </div>
      {/* <JoinCommunity /> */}
    </div>
  );
};
export default Press;
