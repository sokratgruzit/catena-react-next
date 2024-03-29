import Listed from './components/listed/Listed';
import Plain from './components/plain/Plain';
import RevercedTitle from './components/revercedTitle/RevercedTitle';
import JoinCommunity from '../events/components/JoinCommunity';
import styles from './Community.module.css';
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import {useEffect, useState} from "react";

const devCommunity = [
  {
    title: 'Strong knowledge of the basics of Blockchain development, i.e. its characteristics and popular platforms',
  },
  {
    title: 'Awareness of the points of failure in the overall system',
  },
  {
    title: 'Expertise at top Blockchain programming languages',
  },
  {
    title: 'Familiarity with the popular cryptocurrencies',
  },
  {
    title: 'A background in web development, networking, security, cryptography and mathematics',
  },
];

const grantProgramme = [
  {
    title: 'Tools for development and deployment (e.g. IDEs, SDKs for side chains)',
  },
  {
    title: 'Runtime Modules related to interoperability, governance and consensus',
  },
  {
    title: 'Ecosystem developers like wallets and exchanges.',
  },
  {
    title: 'Monitoring, such as block explorers and off-chain data services',
  },
  {
    title: 'Distributed file system developers',
  },
  {
    title: 'Bridge integrators',
  },
];

const vision = {
  title: 'Vision',
  text: 'Our goal is to make a lasting contribution to the blockchain ecosystem by not only addressing the current limitations of blockchain technology through our hybrid software solution, but by also growing the global blockchain community. We here at CATENA Project believe in a truly peer-to-peer community and are actively involved in our community through our hosted events, our grant programme, and our collaborations. We aim to build a truly community-centric platform by instilling a community-first behaviour within the core beliefs of our team.',
};

const events = {
  title: 'Events',
  text: 'We are actively involved in our community through outreach and hosted events. We host several events throughout the year: most notably our Hackathon event that we run annually to attract the programming talent that our growing community has to offer. We also take it upon ourselves to educate the public on the benefits, risks, and uses of blockchain technology.',
};

const teams = {
  title: 'Teams',
  text: 'Our team also shares our passion for blockchain technology and is open to collaborate with other blockchain projects, where aside from sharing our technical knowledge, we will sponsor and organize webinars and conferences for these other projects, building a larger developer community. By integrating and collaborating with different Blockchain platforms and DeFI projects, Teams can tap into the support of the broader community of followers that we are looking to build.',
};

const blockchain = {
  title: 'A truly community-driven blockchain',
  text: 'CATENA project is centred around our community — our management and developer teams are also chosen by our community through voting done using our native token on our platform, and funding for the project comes from contributions made by our community. Apart from that, any changes proposed to our blockchain or platform will be voted for or against by our community, creating a truly community-driven blockchain.',
};

const community = {
  title: 'Developer Community',
  text: 'To be involved in CATENA developer community, a person or team must have the following qualifications:.',
};

const grant = {
  title: 'Grant Programme',
  text: 'We offer a grant programme which users can use to get funding for their projects. The funding for the grant comes from the contributions made by our community. We provide grant funding for the following:',
};

const Community = () => {
  const dispatch = useDispatch();
  const [pageReady, setPageReady] = useState(false);
  let microSchemes;
  if(window.innerWidth > 1240){
    microSchemes = [
      [8,9,10,11,12,13,14,15,22,23,24],
      [1,2,3,10,11,12,13,14,15,22,23,24],
    ];
  }

  if(window.innerWidth < 1240){
    microSchemes = [
      [1,2,3,5,6,7,8,9,10,11,12,13,14,22,23,24],
      [1,2,7,8,9,10,11,12,13,14,21,22,23,24]
    ];
  }

  const setScheme = (num) => {
    console.log(num);
    dispatch({
      type: "SET_MICHROSCHEME_ARRAY",
      microschemeArray: microSchemes[num]
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setPageReady(true);
      dispatch({
        type: "SET_MICHROSCHEME_ARRAY",
        microschemeArray: microSchemes[0]
      });
    }, 400);
  },[]);
  return (
    <div className={`pT-180 ${styles.community}`}>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(0))}>
          <div className='container' >
            <h1 className={`font-90 ttl tYAnimation ${pageReady ? 'animate' : ''}`} style={{color: "#162029"}} >Community</h1>
          </div>
          <RevercedTitle data={vision} animate={pageReady}/>
          <Plain data={blockchain} />
          <div className='pT-100'>
            <RevercedTitle data={events} />
          </div>
        </InView>
      <InView as="div" onChange={(inView, entry) => (inView && setScheme(1))}>
        <div className='pT-100' data-aos="fade-up">
          <RevercedTitle data={teams} />
        </div>
        <Plain data={community} />
        <Listed titles={devCommunity} />
        <Plain data={grant} />
        <Listed titles={grantProgramme} />
      </InView>
      {/* <JoinCommunity /> */}
    </div>
  );
};

export default Community;
