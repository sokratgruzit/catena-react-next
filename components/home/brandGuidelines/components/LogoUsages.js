import styles from '../styles/LogoUsages.module.css';

export default function LogoUsages() {
  const incorrectUsageList = [
    {
      img: '/images/guidelines/firstUsage.png',
      text: 'Do not change the size relationship of the symbol and the wordmark.',
    },
    { img: '/images/guidelines/secondUsage.png', text: 'Do not use the logomark colors on the wordmark' },
    { img: '/images/guidelines/thirdUsage.png', text: 'Do not alter the colour of the symbol or the wordmark.' },
    { img: '/images/guidelines/fourthUsage.png', text: 'Do not add effects such as drop shadows, gradients or glow.' },
    {
      img: '/images/guidelines/fifthUsage.png',
      text: 'Do not place onto backgrounds with insufficient contrast to the logo.',
    },
    { img: '/images/guidelines/sixthUsage.png', text: 'Do not use a bordered logomark with a wordmark' },
  ];
  return (
    <div>
      <h3 className={`${styles.title} font-40 ttl pT-140`} data-aos="fade-up">Incorrect Usage</h3>
      <div className={styles.wrapper}>
        {incorrectUsageList.map((item, index) => (
          <div key={index} className={styles.guidlineTableItem} data-aos="fade-up">
            <div className={styles.imageWrapper}>
              <img src={item.img} alt='' />
            </div>
            <p className={styles.guidlineTableItemTtl}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
