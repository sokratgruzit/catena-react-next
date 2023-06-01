import React from 'react';

export default function Token({ content }) {
  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
