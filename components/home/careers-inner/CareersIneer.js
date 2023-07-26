// import { Button } from '@catena-network/catena-ui-module';
// import React from 'react';

// const CareersInner = ({ data }) => {
//   console.log(data);
//   return (
//     <div style={{ paddingTop: '150px', backgroundColor: '#fff2e4' }}>
//       <span>{data.title}</span>
//       <div>
//         {data.senorUx.map((senor, index) => (
//           <p key={index}>{senor.title}</p>
//         ))}
//       </div>
//       <div>
//         {data.jobInfo.map((job, index) => (
//           <div key={index}>
//             <div>{job.title}</div>
//             <div>{job.value}</div>
//           </div>
//         ))}
//       </div>
//       {/* <div>
//         <Button
//           label={'Button'}
//           size={'btn-lg'}
//           type={'btn-primary'}
//           arrow={'arrow-right'}
//           element={'button'}
//           disabled={true}
//           onClick={() => console.log('hi')}
//         />
//       </div> */}
//       <h2>Responsibilities</h2>
//       <ul>
//         {data.designPresentations.map((presentation, index) => (
//           <li key={index}>{presentation.title}</li>
//         ))}
//       </ul>

//       <h2>Requirements:</h2>
//       <ul>
//         {data.requirements.map((requirement, index) => (
//           <li key={index}>{requirement.title}</li>
//         ))}
//       </ul>

//       <h2>Benefits:</h2>
//       <ul>
//         {data.benefitsList.map((benefit, index) => (
//           <li key={index}>{benefit.title}</li>
//         ))}
//       </ul>

//       <h2>CATENA Multichain:</h2>
//       <ul>
//         {data.coreMultichain.map((core, index) => (
//           <li key={index}>{core.title}</li>
//         ))}
//       </ul>

//       <h2>Team Countries:</h2>
//       <ul>
//         {data.teamCountries.map((country, index) => (
//           <li key={index}>{country.title}</li>
//         ))}
//       </ul>

//       <h2>Text:</h2>
//       <ul>
//         {data.txt.map((text, index) => (
//           <li key={index}>{text.title}</li>
//         ))}
//       </ul>

//       <h2>Job Type:</h2>
//       <ul>
//         {data.jobType.map((type, index) => (
//           <li key={index}>
//             {type.title}: {type.value}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CareersInner;

import { Button } from '@catena-network/catena-ui-module';
import React, { useState } from 'react';

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

const CareersIneer = () => {
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
    <div style={{ paddingTop: '150px', backgroundColor: '#fff2e4' }}>
      <SeniorDesigner
        teamResponsible={teamResponsible}
        head='Senior UX Designer'
        title='Front-end Engineer role'
        title2='As a member of the team,'
        title3='you will be responsible for'
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
