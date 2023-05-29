import React from 'react';

const JobDetails = props => {
  const { jobType } = props;

  return (
    <div>
      {jobType.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            {item.value && <p className='ltl'>{item.value}</p>}
            {item.list && (
              <ul>
                {item.list.map(language => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default JobDetails;
