import BugBountyItem from './components/BugBountyItem';
import BugBountyList from './components/BugBountyList';
import BugBountyNumList from './components/BugBountyNumList';
import BugBountyRewards from './components/BugBountyRewards';
import BugBountyTitle from './components/BugBountyTitle';
import {useDispatch} from "react-redux";
import { InView } from 'react-intersection-observer';
import {useEffect, useState} from "react";

function BugBounty() {
  const dispatch = useDispatch();
  const [pageReady, setPageReady] = useState(false);
  let microSchemes;
  if(window.innerWidth > 1240){
    microSchemes = [
      [1,2,9,10,11,12,13,14,20,21,22,23,24],
      [1,2,10,11,12,13,14,22,23,24]
    ];
  };

  if(window.innerWidth < 1240){
    microSchemes = [
      [1,2,5,6,7,8,9,10,11,12,13,14,20,21,22,23,24],
      [1,10,11,12,13,14,22,23,24]
    ];
  };

  const setScheme = (num) => {
    console.log(num);
    dispatch({
      type: "SET_MICHROSCHEME_ARRAY",
      microschemeArray: microSchemes[num]
    });
    console.log(microSchemes[num])
  };
  useEffect(() => {
    setTimeout(() => {
      setPageReady(true);
      dispatch({
        type: "SET_MICHROSCHEME_ARRAY",
        microschemeArray: microSchemes[0]
      });
    }, 400);
  },[]);
  let data = [
    {
      title: 'Eligibility',
      text: 'Any bug that poses a serious vulnerability to the entire network, protocols, implementation, or security, could be eligible for a reward. It is entirely at our discretion to decide whether a bug is serious and significant enough to be eligible.',
    },
  ];
  let reportData = [
    {
      title: 'Report a Bug?',
      text: 'Submission quality largely determines the reward. Including an explanation of how the bug was discovered, how it can be reproduced, and other critical details increases the quality of the submission. Disclosure to any third parties disqualifies bug bounty eligibility. The ideal report includes the following:',
    },
  ];

  let listData = [
    {
      title: 'Examples of Eligible Vulnerabilities:',
      listItem: [
        'Serious production environment vulnerabilities',
        'Vulnerabilities that can cause remote loss of user funds/assets',
        'Privilege escalation',
        'Code/SQL Injection',
        'Cross-Site Request Forgery (CSRF)',
        'Cross-Site Scripting (XSS)',
        'Remote Code Execution',
        'Authentication Bypass',
      ],
    },
  ];

  let list = [
    {
      text: [
        'Content spoofing',
        'Cache-control related issues',
        'Exposure of internal IP address or domains',
        'Bugs already known or already reported by someone else (reward goes to first reporter)',
        'Issues that are not reproducible',
        'Email/SMS bomb',
      ],
    },
    {
      title: 'Ineligible Submission Examples',
      text: [
        'Theoretical vulnerabilities without POC',
        'Any Dos/DDoS activities',
        'Invalid or missing SPF records (incomplete or missing SPF/DKIM/DMARC)',
        'Clickjacking/UI with minimal security impact',
        'Phishing',
        'Tab-nabbing',
      ],
    },
    {
      title: 'Actions to avoid',
      text: [
        'Testing on other users accounts',
        'Automated testing using tools such as scanners',
        'Excessive request attempts that affects the availability of our services to all users',
        'Destruction of data',
        'Disrupt of services',
      ],
    },
  ];

  let numList = [
    {
      listItem: [
        'Description of the issue',
        'Description of the issue’s potential security impact',
        'The affected resource. e.g. URL, GitHub code snippet, transaction',
        'Ideally a proof-of-concept that demonstrates the issue',
        'Email submission to guard@catenamultichain.com and include your CMCX UID',
        'Provide adequate time for CATENA to respond before disclosing Bug to others',
      ],
    },
  ];

  return (
    <div className='pT-180'>
      <InView as="div" onChange={(inView, entry) => (inView && setScheme(0))}>
        <div className='container'>
          <BugBountyTitle animate={pageReady} />
          <BugBountyItem data={data} animate={pageReady}/>
        </div>
        <div className='container_bordered'>
          <div className={`container_bordered-child tYAnimation delay4 ${pageReady ? 'animate' : ''}`}>
            <BugBountyNumList data={listData}/>
            <BugBountyList data={list} />
          </div>
        </div>
      </InView>
      <InView as="div" onChange={(inView, entry) => (inView && setScheme(1))}>
        <div className="container">
          <BugBountyRewards />
          <BugBountyItem data={reportData} animate={pageReady} />
          <BugBountyNumList data={numList} />
        </div >
      </InView>
    </div>
  );
}

export default BugBounty;
