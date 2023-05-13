import React from 'react';

const Benefits = (props) => {
  const { benefitsArr, title } = props;

  return (
    <div>
        <h2>{title}</h2>
      {benefitsArr.map((item) => {
        return (
          <ul key={item.title}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Benefits;
