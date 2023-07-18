import { Button } from '@catena-network/catena-ui-module';
import React from 'react';

const CareersInner = ({ data }) => {
  console.log(data);
  return (
    <div>
      <span>{data.title}</span>
      <div>
        {data.senorUx.map((senor, index) => (
          <p key={index}>{senor.title}</p>
        ))}
      </div>
      <div>
        {data.jobInfo.map((job, index) => (
          <div key={index}>
            <div>{job.title}</div>
            <div>{job.value}</div>
          </div>
        ))}
      </div>
      <div>
        <Button
          label={'Button'}
          size={'btn-lg'}
          type={'btn-primary'}
          arrow={'arrow-right'}
          element={'button'}
          disabled={true}
          onClick={() => console.log('hi')}
        />
      </div>
      <h2>Responsibilities</h2>
      <ul>
        {data.designPresentations.map((presentation, index) => (
          <li key={index}>{presentation.title}</li>
        ))}
      </ul>

      <h2>Requirements:</h2>
      <ul>
        {data.requirements.map((requirement, index) => (
          <li key={index}>{requirement.title}</li>
        ))}
      </ul>

      <h2>Benefits:</h2>
      <ul>
        {data.benefitsList.map((benefit, index) => (
          <li key={index}>{benefit.title}</li>
        ))}
      </ul>

      <h2>CATENA Multichain:</h2>
      <ul>
        {data.coreMultichain.map((core, index) => (
          <li key={index}>{core.title}</li>
        ))}
      </ul>

      <h2>Team Countries:</h2>
      <ul>
        {data.teamCountries.map((country, index) => (
          <li key={index}>{country.title}</li>
        ))}
      </ul>

      <h2>Text:</h2>
      <ul>
        {data.txt.map((text, index) => (
          <li key={index}>{text.title}</li>
        ))}
      </ul>

      <h2>Job Type:</h2>
      <ul>
        {data.jobType.map((type, index) => (
          <li key={index}>
            {type.title}: {type.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareersInner;
