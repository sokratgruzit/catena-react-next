import React from 'react';

const ReverseSvg = props => (
  <svg
    width='13'
    height='16'
    viewBox='0 0 13 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3.5 9V2M3.5 2L1 4.25M3.5 2L6 4.25'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M9.5 7L9.5 14M9.5 14L12 11.75M9.5 14L7 11.75'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);
export default ReverseSvg;
