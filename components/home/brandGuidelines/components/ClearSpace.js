import styles from '../styles/ClearSpace.module.css';

export default function ClearSpace() {
  const data = [
    {
      clearSpace: 'Clear Space',
      andPositioning: '& Positioning',
      clearSpaceText:
        'The logo should always be surrounded by generous white space. The minimum required space around the logo is equivalent to the radius of the symbol.',
    },
  ];
  return (
    <div className={styles.container}>
      <img className={styles.vector} src='/images/guidelines/Vector.png' alt='' />
      <div className={styles.logoLine}>
        <svg width='35' height='23' viewBox='0 0 35 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g opacity='0.3'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22.9995 22.9716C25.1013 22.9718 27.163 22.3966 28.9605 21.3085C30.758 20.2204 32.2226 18.6611 33.195 16.7999C34.1675 14.9388 34.6106 12.847 34.4763 10.7519C34.342 8.65686 33.6354 6.63863 32.4333 4.91655C31.2311 3.19446 29.5795 1.8344 27.6577 0.984159C25.736 0.133915 23.6177 -0.173989 21.533 0.0939057C19.4484 0.361801 17.4771 1.19525 15.8334 2.50368C14.1897 3.81211 12.9365 5.54547 12.21 7.51541C12.876 7.71133 13.4815 8.07229 13.9704 8.56473C15.5604 9.44389 18.0022 10.0962 20.3589 8.73489C20.8188 8.21818 21.4008 7.82471 22.052 7.59037C22.7032 7.35603 23.4028 7.28828 24.0869 7.39331C24.7711 7.49833 25.418 7.77279 25.9687 8.19164C26.5193 8.61049 26.9563 9.1604 27.2395 9.7912C27.5228 10.422 27.6435 11.1136 27.5905 11.8029C27.5374 12.4922 27.3125 13.1573 26.9361 13.7375C26.5597 14.3177 26.0438 14.7945 25.4355 15.1244C24.8273 15.4544 24.146 15.6269 23.4538 15.6264C22.5549 15.6225 21.6803 15.3346 20.9552 14.8039C19.3367 14.0099 16.4406 13.2725 13.6012 14.7472C13.1881 15.0717 12.7155 15.3126 12.21 15.4562C13.023 17.6607 14.4934 19.5631 16.4226 20.907C18.3519 22.2508 20.6474 22.9714 22.9995 22.9716Z'
              fill='#4D555C'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22.2899 7.54379C21.3566 5.01353 19.5619 2.89187 17.2199 1.55045C14.878 0.209036 12.1382 -0.266624 9.48047 0.206791C6.82272 0.680206 4.41646 2.07251 2.68315 4.13983C0.949839 6.20716 0 8.81769 0 11.5142C0 14.2107 0.949839 16.8212 2.68315 18.8885C4.41646 20.9559 6.82272 22.3482 9.48047 22.8216C12.1382 23.295 14.878 22.8193 17.2199 21.4779C19.5619 20.1365 21.3566 18.0149 22.2899 15.4846C21.8058 15.3443 21.353 15.1133 20.9554 14.804C19.3369 14.0099 16.4408 13.2725 13.6014 14.7472C12.8758 15.3244 11.9736 15.6348 11.046 15.6264C10.5016 15.6264 9.96257 15.5193 9.45962 15.3112C8.95667 15.1031 8.49968 14.7981 8.11474 14.4137C7.7298 14.0292 7.42444 13.5727 7.21611 13.0704C7.00779 12.568 6.90056 12.0296 6.90056 11.4858C6.90056 10.9421 7.00779 10.4037 7.21611 9.90131C7.42444 9.39895 7.7298 8.9425 8.11474 8.55801C8.49968 8.17353 8.95667 7.86854 9.45962 7.66045C9.96257 7.45237 10.5016 7.34527 11.046 7.34527C11.5905 7.34183 12.1301 7.44804 12.6326 7.65757C13.1351 7.86709 13.5901 8.17563 13.9705 8.56475C15.5606 9.44391 18.0024 10.0962 20.3591 8.73491C20.8804 8.16761 21.5486 7.75538 22.2899 7.54379Z'
              fill='#162029'
            />
          </g>
        </svg>
        <p className={styles.logoP}>Logo</p>
      </div>
      <img className={styles.mainLogo} src='/images/guidelines/mainLogo.png' alt='' />
      {data.map((item, index) => (
        <div className={styles.wrapper} key={index}>
          <div className={styles.guidlineFlex}>
            <div className={`${styles.guidlineLrgTtl} ${styles.font51}`}>
              <span className='font_51'>{item.clearSpace}</span>
              <span className='font_51'>{item.andPositioning}</span>
            </div>
            <div className={`${styles.guidlineParagraph} ${styles.paragraphMt}`}>{item.clearSpaceText}</div>
          </div>
          <img className={styles.positoningLogo} src='/images/guidelines/positoningLogo.png' alt='' />
        </div>
      ))}
    </div>
  );
}
