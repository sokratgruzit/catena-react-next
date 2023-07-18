import styles from '../styles/LogoVariations.module.css';

export default function LogoVariations() {
  const logosVariations = [
    {
      logo: 'Full-color Logo',
      logoImg: '/images/guidelines/firstVariation.png',
    },
    {
      logo: 'Full-color Logo',
      logoImg: '/images/guidelines/secondVariation.png',
    },
    {
      logo: 'Monochrome Logo',
      logoImg: '/images/guidelines/thirdVariation.png',
    },
    {
      logo: 'Monochrome Logo',
      logoImg: '/images/guidelines/fourthVariation.png',
    },
  ];
  return (
    <div className={styles.variations}>
      <h3 className={styles.title}>Logo Variations</h3>
      <div className={styles.wrapper}>
        {logosVariations.map((item, index) => {
          return (
            <div
              key={index}
              data-aos='fade-up'
              className={`${styles.logoVariantsContainer} ${styles.guidlineFlex} ${styles.pT160}`}
            >
              <img className={styles.image} src={item.logoImg} alt='' />
              <h5 className={`${styles.guidlineHalfTtl} ${styles.font51}`}>{item.logo}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
