import React from 'react';

const FAQRow = ({ question, toggleExpand, expandRow }) => {
  return (
    <div onClick={toggleExpand}>
      <p>{question}</p>
    </div>
  );
};

export default FAQRow;
