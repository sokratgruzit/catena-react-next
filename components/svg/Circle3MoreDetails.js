import React from 'react';

const Circle3MoreDetails = ({ className, ...props }) => {
  return (
    <svg
      width='3'
      height='15'
      viewBox='0 0 3 15'
      fill='white'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path d='M1.5 3C1.89782 3 2.27936 2.84196 2.56066 2.56066C2.84196 2.27936 3 1.89782 3 1.5C3 1.10218 2.84196 0.720644 2.56066 0.43934C2.27936 0.158035 1.89782 0 1.5 0C1.10218 0 0.720645 0.158035 0.43934 0.43934C0.158036 0.720644 0 1.10218 0 1.5C0 1.89782 0.158036 2.27936 0.43934 2.56066C0.720645 2.84196 1.10218 3 1.5 3Z' />
      <path d='M1.5 9.00001C1.89782 9.00001 2.27936 8.84197 2.56066 8.56067C2.84196 8.27936 3 7.89783 3 7.50001C3 7.10218 2.84196 6.72065 2.56066 6.43935C2.27936 6.15804 1.89782 6.00001 1.5 6.00001C1.10218 6.00001 0.720645 6.15804 0.43934 6.43935C0.158036 6.72065 0 7.10218 0 7.50001C0 7.89783 0.158036 8.27936 0.43934 8.56067C0.720645 8.84197 1.10218 9.00001 1.5 9.00001Z' />
      <path d='M1.5 15C1.89782 15 2.27936 14.842 2.56066 14.5606C2.84196 14.2793 3 13.8978 3 13.5C3 13.1022 2.84196 12.7206 2.56066 12.4393C2.27936 12.158 1.89782 12 1.5 12C1.10218 12 0.720645 12.158 0.43934 12.4393C0.158036 12.7206 0 13.1022 0 13.5C0 13.8978 0.158036 14.2793 0.43934 14.5606C0.720645 14.842 1.10218 15 1.5 15Z' />
    </svg>
  );
};

export default Circle3MoreDetails;
