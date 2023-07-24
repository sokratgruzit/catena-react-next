import React from "react";
import Card from "../../../UI/card/Card";
import styles from "../css/Boxs.module.css";

const Boxs = () => {
  const eventsArr = [
    {
      id: 1,
      img: "/images/event/Group.png",
      imgPart: "/images/event/txt.png",
      imgPartTwo: "/images/event/digital.png",
      title: "How the Blockchain Could Break Big Tech’s Hold on A.I.",
    },
    {
      id: 2,
      img: "/images/event/Grouptwo.png",
      imgPart: "/images/event/img.png",
      imgPartTwo: "/images/event/digital.png",
      title: "SingularityNET’s Ben Goertzel has a grand vision for the future of AI",
    },
    {
      id: 3,
      img: "/images/event/Groupthree.png",
      imgPart: "/images/event/img.png",
      imgPartTwo: "/images/event/digital.png",
      title: "SingularityNET’s Ben Goertzel has a grand vision for the future of AI",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.mainContainer} container`}>
        <div className={styles.titleContainer}>
          <p className={styles.titlePartyOne}>Catena</p>
          <p className={styles.titlePartyTwo}>Events</p>
        </div>
        <div className={`${styles.titleDesc}`}>
          <p className="title font-40">Braced dissected sheep, kermani halts, boy note. Quis raucous fall gown, euismod creatures spent, uproar tidings.</p>
        </div>
        <div className={`${styles.mapContainer} `}>
          <Card dataArr={eventsArr} />
        </div>
      </div>
    </div>
  );
};

export default Boxs;
