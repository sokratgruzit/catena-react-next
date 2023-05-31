import { Button } from '@catena-network/catena-ui-module';
import React from 'react';

import AmbassadorBenefits from './components/AmbassadorBenefits';
import AmbassadorExpectations from './components/AmbassadorExpectations';
import JoinUsSection from './components/JoinUsSection';

const ambassadorInfo = [
  {
    title: 'Build a Better Future',
    description:
      'Help build a borderless, data-responsible economy. Collaborate closely to turn our vision for a better, privacy-first world into a reality.',
  },
  {
    title: 'Earn Rewards',
    description:
      "Receive tokens by completing specific tasks. Take a look at some examples of rewards here. Additionally, every quarter, we'll announce the top 3 Ambassadors worldwide, and if you are one of them, you'll earn even more rewards!",
  },
  {
    title: 'Be Part of the CATENA Network Extended Team',
    description:
      'Join a larger community of blockchain and privacy enthusiasts in the CATENA Network Foundation and Ecosystem.',
  },
  {
    title: 'See It First',
    description:
      'Be the first to know about any network updates and have the opportunity to provide first-hand feedback to our developer team.',
  },
  {
    title: 'Grow Your Reputation and Gain Real-World Experience',
    description:
      'Earn real-world experience in the blockchain field and gain valuable skills that will help grow your career.',
  },
];

const ambassadorApplication = [
  {
    title: 'You’re a blockchain and privacy enthusiast, an influencer, or an expert.',
  },
  {
    title:
      'You’re passionate about blockchain technology and believe that blockchain technology will play a impactful role in the future.',
  },
  {
    title: 'You are already a community leader and have the ability to promote CATENA Network within your group.',
  },
  {
    title: 'You are a content and marketing creator and love using out-of-the-box ideas to build content.',
  },
  {
    title:
      'You are a student of blockchain and would love to gain real-world industry experience and hands-on knowledge of the crypto markets and space.',
  },
  {
    title:
      'You are a student of blockchain and would love to gain real-world industry experience and hands-on knowledge of the crypto markets and space.',
  },
  {
    title:
      'You can still become a CATENA Network ambassador even if you aren’t a crypto guru. Apply and tell us more about why you believe in CATENA Network.',
  },
];

const catenaExepted = [
  {
    title:
      'Promote the CATENA Network Ecosystem through meetups that can be structured to be both technical and non-technical so that anyone can participate.',
  },
  {
    title:
      'As the CATENA Network community grows, we’ll need someone to create captivating content for our blog posts, documents and more. This content will also have to be translated into a number of languages such as Mandarin, German, Spanish, French, Russian, and a few other languages.',
  },
  {
    title: 'Amplify CATENA Network Events and Announcements.',
  },
  {
    title: 'Be a wallet tester on the CATENA Network',
  },
  {
    title:
      'Help us with our global community in multiple languages and on several channels such as Kakao, Telegram, WeChat, etc.',
  },
  {
    title: 'Attract new people to the CATENA Network community by conducting regular meetups.',
  },
  {
    title:
      'There are plenty of rewards to win! All you have to do is complete once-off tasks such as translating blog posts, create virtual stickers, and help build our online presence among other things.',
  },
  {
    title: 'Manage office hours as well as host mini hackathons and trainings.',
  },
  {
    title:
      'Collaborate with various community stakeholders such as foundations, startup incubators, and university groups to co-host events.',
  },
  {
    title:
      'Invite local guest speakers and professors to host interview sessions or sessions within university classes.',
  },
];

const Ambassador = () => {
  return (
    <div style={{ paddingTop: '300px' }}>
      <JoinUsSection
        title='Help build the future and earn rewards'
        text='CATENA Network is a super-performant blockchain ecosystem that will help solve the blockchain trilemma of scalability, interoperability, and usability. The blockchain-powered ecosystem is built around user privacy and lets users take control of their data. We will use our hybrid ecosystem to enhance current technologies and create the technologies of the future, but we can’t do it alone. Join us in our quest to build a better future! Become a CATENA Network ambassador and start earning rewards today!'
      />
      <AmbassadorBenefits ambassadorInfo={ambassadorInfo} title='Why Become an Ambassador' />
      <AmbassadorExpectations
        ambassadorApplication={ambassadorApplication}
        title='Are You Eligible to Become a CATENA Network Ambassador?'
      />
      <AmbassadorExpectations
        ambassadorApplication={catenaExepted}
        title='What is Expected of You'
        description='There isn’t really one standard way to be a CATENA Network ambassador, but here are some examples:'
      />
      <Button
        label={'Button'}
        size={'btn-lg'}
        type={'btn-primary'}
        arrow={'arrow-right'}
        element={'button'}
        disabled={false}
        onClick={() => console.log(prevState => !prevState)}
      />
      <JoinUsSection
        title='Join our community'
        description='Sign up to our newsletter to stay in the loop'
        text='Stay up-to-date with the latest CATENA Network developments such as events, programs and news by joining our social media channels.'
      />
    </div>
  );
};

export default Ambassador;
