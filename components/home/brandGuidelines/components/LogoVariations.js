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
      <h3 className={`${styles.title} font_51`}>Logo Variations</h3>
      <div className={styles.wrapper}>
        {logosVariations.map((item, index) => {
          const shouldShowSVG = window.innerWidth <= 1023 || index < 2;
          return (
            <div
              key={index}
              data-aos='fade-up'
              className={`${styles.logoVariantsContainer} ${styles.guidlineFlex} ${styles.pT160}`}
            >
              <img className={styles.image} src={item.logoImg} alt='' />
              <h5 className={`${styles.guidlineHalfTtl} ${styles.font51}`}>{item.logo}</h5>

              {shouldShowSVG && (
                <svg width='450' height='2' viewBox='0 0 450 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <line
                    opacity='0.1'
                    y1='1.25'
                    x2='450'
                    y2='1.25'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeDasharray='10 10'
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
