const PaginationButtonSvg = ({ className, disabled, pageCountTokens }) => (
  <svg
    width='8'
    height='14'
    viewBox='0 0 8 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M7 13L1 7L7 1'
      stroke={pageCountTokens === disabled ? 'rgba(255,255,255,0.3)' : 'white'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default PaginationButtonSvg;
