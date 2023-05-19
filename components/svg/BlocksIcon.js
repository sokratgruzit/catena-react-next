import React from 'react';

const BlocksIcon = ({ className, ...props }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='white'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <g clipPath='url(#clip0_628_1202)'>
        <mask id='mask0_628_1202' maskUnits='userSpaceOnUse' x='0' y='0' width='18' height='18'>
          <path d='M0 0H18V18H0V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_628_1202)'>
          <path d='M0.685087 7.95L7.65109 12.1275C8.0587 12.3727 8.5254 12.5022 9.00109 12.5022C9.47677 12.5022 9.94347 12.3727 10.3511 12.1275L17.3171 7.95C17.5238 7.82601 17.6949 7.65059 17.8137 7.44081C17.9325 7.23104 17.995 6.99408 17.995 6.753C17.995 6.51192 17.9325 6.27496 17.8137 6.06518C17.6949 5.85541 17.5238 5.67999 17.3171 5.556L10.3511 1.37325C9.94355 1.12781 9.47682 0.998123 9.00109 0.998123C8.52535 0.998123 8.05862 1.12781 7.65109 1.37325L0.685087 5.55075C0.47851 5.67478 0.30756 5.85018 0.188875 6.05988C0.0701903 6.26957 0.0078125 6.50642 0.0078125 6.74737C0.0078125 6.98833 0.0701903 7.22518 0.188875 7.43487C0.30756 7.64457 0.47851 7.81997 0.685087 7.944V7.95ZM8.80834 3.3C8.86657 3.2651 8.93319 3.24667 9.00109 3.24667C9.06898 3.24667 9.1356 3.2651 9.19384 3.3L14.9396 6.75L9.19459 10.2C9.13626 10.235 9.0695 10.2536 9.00146 10.2536C8.93342 10.2536 8.86666 10.235 8.80834 10.2L3.06334 6.75L8.80834 3.3Z' />
          <path d='M9.9645 14.1225C9.67314 14.2973 9.33976 14.3896 9 14.3896C8.66024 14.3896 8.32686 14.2973 8.0355 14.1225L1.704 10.3245C1.5333 10.222 1.33846 10.1667 1.13938 10.1642C0.940296 10.1616 0.744106 10.2119 0.570839 10.31C0.397573 10.4081 0.253436 10.5504 0.153148 10.7224C0.0528594 10.8944 1.13528e-05 11.0899 0 11.289C1.10752e-05 11.4832 0.0503046 11.6741 0.145986 11.8431C0.241667 12.0122 0.379476 12.1535 0.546 12.2535L6.8775 16.05C7.51828 16.4358 8.25207 16.6396 9 16.6396C9.74793 16.6396 10.4817 16.4358 11.1225 16.05L17.454 12.2512C17.5862 12.1781 17.7022 12.079 17.7953 11.96C17.8883 11.841 17.9564 11.7044 17.9956 11.5585C18.0347 11.4126 18.044 11.2603 18.023 11.1107C18.002 10.9611 17.9511 10.8172 17.8733 10.6877C17.7955 10.5582 17.6924 10.4457 17.5702 10.3569C17.448 10.2681 17.3091 10.2049 17.1619 10.1709C17.0147 10.1369 16.8622 10.133 16.7134 10.1592C16.5646 10.1855 16.4227 10.2414 16.296 10.3237L9.9645 14.1225Z' />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_628_1202'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BlocksIcon;
