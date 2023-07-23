import styles from '../styles/Partniership.module.css';

export default function Partniership() {
  return (
    <div className={styles.partniership}>
      <h3 className={`${styles.title} font_51`}>Partnership</h3>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          When pairing the Blockstream corporate logo or any other Blockstream logo with another logo, a thin line is
          used to separate the two logos.
        </p>
        <div className={styles.imgWrapper}>
          <img src='/images/guidelines/partnership.png' alt='' />
          <div className={styles.line}></div>
          <h4 className='font_30'>Partners</h4>
        </div>
        <div className={styles.box}>
          <h6 className='font_16'>Visual Balance</h6>
          <p>Ensure that each logo is visually balanced in terms of size.</p>
        </div>
        <div className={styles.box}>
          <h6 className='font_16'>Equal Distance</h6>
          <p>Ensure that the space between the logos and the line are visually equal on both sides of the line.</p>
        </div>
      </div>
      <svg width='1312' height='1476' viewBox='0 0 1312 1476' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.03'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M-118 482.889C-58.1292 320.312 57.0131 183.989 207.259 97.7989C357.505 11.6086 533.275 -18.954 703.783 11.4644C874.29 41.8827 1028.66 131.343 1139.86 264.175C1251.06 397.007 1312 564.742 1312 738C1312 911.258 1251.06 1078.99 1139.86 1211.83C1028.66 1344.66 874.29 1434.12 703.783 1464.54C533.275 1494.95 357.505 1464.39 207.259 1378.2C57.0131 1292.01 -58.1292 1155.69 -118 993.111C-86.9485 984.094 -57.8944 969.253 -32.3857 949.377C71.4442 898.355 257.245 850.978 439.403 945.733C485.955 982.817 543.839 1002.76 603.346 1002.22C638.271 1002.22 672.854 995.34 705.121 981.97C737.387 968.6 766.705 949.004 791.401 924.299C816.097 899.595 835.687 870.266 849.052 837.988C862.417 805.71 869.296 771.115 869.296 736.178C869.296 701.24 862.417 666.645 849.052 634.367C835.687 602.089 816.097 572.761 791.401 548.056C766.705 523.352 737.387 503.755 705.121 490.385C672.854 477.015 638.271 470.134 603.346 470.134C568.413 469.913 533.795 476.737 501.558 490.2C469.322 503.663 440.129 523.487 415.723 548.489C313.714 604.978 157.059 646.889 5.86743 559.423C-26.9569 522.23 -70.0594 495.599 -118 482.889Z'
          fill='black'
        />
      </svg>
    </div>
  );
}
