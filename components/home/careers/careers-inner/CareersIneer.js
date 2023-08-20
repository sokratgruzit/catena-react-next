import React, { useState } from 'react';
import { Button } from '@catena-network/catena-ui-module';

import AboutYou from './components/aboutYou/AboutYou';
import SeniorDesigner from './components/seniorDesigner/SeniorDesigner';
import SubmitAplication from './components/submitAplication/SubmitAplication';
import { StringToHtml } from '../../../UI/StringToHtml/StringToHtml';

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

  console.log(item.responsibilities, 'ra')
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
      <div className='container' style={{display: 'flex', flexDirection: 'column', gap: '80px'}}>
        <h2 className={` font-40 ttl`}>{item.title['en']['openPosition.title']}</h2>
        <StringToHtml data={item.summary['en']['openPosition.summary']} />
        <div style={{display: 'flex', width: "100%", justifyContent: 'space-around'}}>
          <div>
            <h4>Reference</h4>
            <p>{item.reference}</p>
          </div>
          <div>
            <h4>Job Type</h4>
            <p>{item.type}</p>
          </div>
          <div>
            <h4>Remote</h4>
            <p>{item.remote}</p>
          </div>
        </div>
        <div>
          <h4>Department</h4>
            <p>{item.department}</p>
        </div>
        <StringToHtml data={item.responsibilities['en']['openPosition.responsibilities']} />
        <StringToHtml data={item.requirements['en']['openPosition.requirements']} />
        <StringToHtml data={item.benefits['en']['openPosition.benefits']} />
        <StringToHtml data={item.worcking_at_catena['en']['openPosition.worcking_at_catena']} />
        <StringToHtml data={item.how_we_work['en']['openPosition.how_we_work']} />
        <StringToHtml data={item.about_catena['en']['openPosition.about_catena']} />
        <div style={{display: 'flex', flexDirection: 'column',gap: '20px', width: "100%", justifyContent: 'space-around'}}>
          <div>
            <h4>Job Level</h4>
            <p>{item.job_level}</p>
          </div>
          <div>
            <h4>Languages</h4>
            <p>{item.languages}</p>
          </div>
          <div>
            <h4>Featured</h4>
            <p>{item.featured}</p>
          </div>
        </div>
        


        {/* <SeniorDesigner
          teamResponsible={teamResponsible}
          head={item.title['en']['openPosition.title']}
          title='Front-end Engineer role'
          title2='As a member of the team,you will be responsible for'
          description='We are looking for an experienced front-end engineer to join as a member of the core engineering team. As a front-end engineer, you will have an extensive impact over the product, the UI/UX, and the technology.'
        />
        <AboutYou
          aboutSalary={aboutSalary}
          aboutRange={aboutRange}
          head='About You'
          title2='Salary Ranges'
        /> */}
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
    </div>
  );
};

export default CareersIneer;
