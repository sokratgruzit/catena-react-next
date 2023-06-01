import styles from '../styles/Partniership.module.css';

export default function Partniership() {
  const data = [
    {
      partnerships: 'Partnerships',
      partnershipsText:
        'When pairing the CORE corporate logo or any other CORE logo with another logo, a thin line is used to separate the two logos.',
      partners: 'Partners',
      partnersItems: [
        {
          title: 'Visual Balance',
          text: 'Ensure that each logo is visually balanced in terms of size.',
        },
        {
          title: 'Equal Distance',
          text: 'Ensure that the space between the logos and the line are visually equal on both sides of the line.',
        },
      ],
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div data-aos='fade-up' className={styles.guidlineFlex}>
            <div className={styles.guidlineHalf}>
              <div className={`${styles.guidlineLrgTtl} ${styles.font51}`}>{item.partnerships}</div>
            </div>
            <div className={styles.guidlineHalf}>
              <div className={`${styles.guidlineParagraph} ${styles.paragraphMt}`}>{item.partnershipsText}</div>
            </div>
          </div>
          <div data-aos='fade-up' className={styles.guidlinePartners}>
            <span className={styles.line}></span>
            <div className={styles.guidlinePartnersTxt}>{item.partners}</div>
          </div>
          <div data-aos='fade-up' className='guidlineFlex'>
            {item.partnersItems.map((list, listIndex) => (
              <div className={`${styles.guidlineHalf} ${styles.wdth340}`} key={listIndex}>
                <div className={styles.guidlineHalfLtlTtl}>{list.title}</div>
                <div className={styles.guidlineHalfLtlDscr}>{list.text}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
