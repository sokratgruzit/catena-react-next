import React from 'react';

const SeniorDesigner = ({ teamResponsible, title2, head, title, description }) => {
  return (
    <div>
      <h1>{head}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <h2>{title2}</h2>
      {teamResponsible.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
};

export default SeniorDesigner;
