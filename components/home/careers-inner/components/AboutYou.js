import React from 'react';

const AboutYou = ({ head, aboutSalary, aboutRange, title2 }) => {
  return (
    <div>
      <h2>{head}</h2>
      <ul>
        {aboutSalary.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
      <div>
        <h2>{title2}</h2>
        {aboutRange.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item.title}</li>
              <li>{item.value}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default AboutYou;
