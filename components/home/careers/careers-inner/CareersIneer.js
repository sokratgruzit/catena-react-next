import React, { useState } from 'react';
import { Button } from '@catena-network/catena-ui-module';

import AboutYou from './components/aboutYou/AboutYou';
import SeniorDesigner from './components/seniorDesigner/SeniorDesigner';
import SubmitAplication from './components/submitAplication/SubmitAplication';

const teamResponsible = [
  {
    title:
      'Building dynamic user interfaces to analyze the depth of information in crypto, from user education to smart contract integrations',
  },
  {
    title: 'Maintaining a high bar for code quality, reusability, and readability',
  },
  {
    title: 'Collaborating with product, research, and design to create a useful and delightful user experience',
  },
];

const aboutSalary = [
  {
    title: '3+ years experience with modern front-end technologies including React and TypeScript',
  },
  {
    title: 'A passion for shipping high-quality product that delights users',
  },
  {
    title: 'Interest in building data analytical tools, and a desire to empower users to do more',
  },
];

const aboutRange = [
  {
    title: 'Associate',
    value: '$125,000 - $150,000',
  },
  {
    title: 'Mid',
    value: '$150,000 - $175,000',
  },
  {
    title: 'Senior',
    value: '$175,000 - $200,000+',
  },
];

const CareersIneer = ({ item }) => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [submitHeight, setSubmitHeight] = useState('0px');


  const handleButtonClick = () => {
    if (showSubmit) {
      setSubmitHeight('0px');
    } else {
      setSubmitHeight('2500px');
    }

    setShowSubmit(!showSubmit);
  };

  return (
    <div className='pT-180'>
      <SeniorDesigner
        teamResponsible={teamResponsible}
        head={item.title['en']['career.title']}
        title='Front-end Engineer role'
        title2='As a member of the team,you will be responsible for'
        description='We are looking for an experienced front-end engineer to join as a member of the core engineering team. As a front-end engineer, you will have an extensive impact over the product, the UI/UX, and the technology.'
      />
      <AboutYou
        aboutSalary={aboutSalary}
        aboutRange={aboutRange}
        head='About You'
        title2='Salary Ranges'
      />
      <div className='container' style={{ margin: '50px 0' }}>
        {!showSubmit && <Button
          onClick={handleButtonClick}
          label={'Apply this job now'}
          size={'btn-lg'}
          type={'btn-primary'}
          arrow={'arrow-right'}
          element={'button'}
        />}
      </div>
      <div style={{ maxHeight: submitHeight, transition: '0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99)', overflow: 'hidden', marginBottom: '50px' }}>
        {showSubmit && <SubmitAplication title='Submit Your Application' />}
      </div>
    </div>
  );
};

export default CareersIneer;
