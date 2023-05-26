import Link from 'next/link';
import React from 'react';

const JoinUsSection = props => {
  const { title, description, text } = props;

  return (
    <div>
      <h2 className='font-51'>{title}</h2>
      <p>{text}</p>
      <Link element='Community' href='/community'>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default JoinUsSection;
