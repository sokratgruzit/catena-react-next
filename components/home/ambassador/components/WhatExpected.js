import styles from '../css/WhatExpected.module.css';

const WhatExpected = () => {
  return (
    <div className={`${styles.heder} container`}>
      <h1 className={`${styles.mainTiTle} ttl  font-40`}>What is Expected of You</h1>

      <div className={`${styles.ulTxt}  text`}>
        <h4 className={`${styles.TiTle} `}>
          There isn’t really one standard way to be a CATENA ambassador, but here are some examples:
        </h4>
        <ul>
          <li>
            Promote the CATENA Ecosystem through meetups that can be structured to be both technical and non-technical
            so that anyone can participate.
          </li>
        </ul>
        <ul>
          <li>
            As the CATENA community grows, we’ll need someone to create captivating content for our blog posts,
            documents and more. This content will also have to be translated into a number of languages such as
            Mandarin, German, Spanish, French, Russian, and a few other languages.
          </li>
        </ul>
        <ul>
          <li>Amplify CATENA Events and Announcements.</li>
        </ul>
        <ul>
          <li>Be a wallet tester on the CATENA</li>
        </ul>
        <ul>
          <li>
            Help us with our global community in multiple languages and on several channels such as Kakao, Telegram,
            WeChat, etc.
          </li>
        </ul>
        <ul>
          <li>Attract new people to the CATENA community by conducting regular meetups.</li>
        </ul>
        <ul>
          <li>
            There are plenty of rewards to win! All you have to do is complete once-off tasks such as translating blog
            posts, create virtual stickers, and help build our online presence among other things.
          </li>
        </ul>
        <ul>
          <li>Manage office hours as well as host mini hackathons and trainings.</li>
        </ul>
        <ul>
          <li>
            Collaborate with various community stakeholders such as foundations, startup incubators, and university
            groups to co-host events.
          </li>
        </ul>
        <ul>
          <li>
            Invite local guest speakers and professors to host interview sessions or sessions within university classes.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatExpected;
