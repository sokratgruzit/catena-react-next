import { useState } from 'react';

import styles from '../css/WhatExpected.module.css';

const WhatExpected = () => {
  const Tlt = [
    {
      ttl: ' Promote the CATENA Ecosystem through meetups that can be structured to be both technical and non-technicalso that anyone can participate.',
    },
    {
      ttl: ' As the CATENA community grows, we’ll need someone to create captivating content for our blog posts,documents and more. This content will also have to be translated into a number of languages such asMandarin, German, Spanish, French, Russian, and a few other languages.',
    },
    {
      ttl: 'Amplify CATENA Events and Announcements.',
    },
    {
      ttl: 'Be a wallet tester on the CATENA',
    },
    {
      ttl: 'Help us with our global community in multiple languages and on several channels such as Kakao, Telegram,WeChat, etc.',
    },
    {
      ttl: 'Attract new people to the CATENA community by conducting regular meetups.',
    },
    {
      ttl: 'There are plenty of rewards to win! All you have to do is complete once-off tasks such as translating blogposts, create virtual stickers, and help build our online presence among other things.',
    },
    {
      ttl: 'Manage office hours as well as host mini hackathons and trainings.',
    },
    {
      ttl: 'Collaborate with various community stakeholders such as foundations, startup incubators, and universitygroups to co-host events.',
    },
    {
      ttl: 'Invite local guest speakers and professors to host interview sessions or sessions within university classes.',
    },
  ];
  return (
    <div className={`${styles.heder} container`}>
      <h1 className={`${styles.mainTiTle} ttl  font-40`} data-aos='fade-up'>
        What is Expected of You
      </h1>
      <div className={`${styles.ulTxt}  text`} data-aos='fade-up'>
        <h4 className={`${styles.TiTle} `}>
          There isn’t really one standard way to be a CATENA ambassador, but here are some examples:
        </h4>
        {Tlt.map((item, index) => {
          return (
            <ul>
              <li>{item.ttl}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default WhatExpected;
