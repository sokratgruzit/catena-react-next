import styles from '../styles/ProductLogos.module.css';

export default function ProductLogos() {
  const product = [
    {
      logo: 'Full-color Logo',
      logoImg: '/images/guidelines/firstMain.png',
    },
    {
      logo: 'Full-color Logo',
      logoImg: '/images/guidelines/secondMain.png',
    },
    {
      logo: 'Monochrome Logo',
      logoImg: '/images/guidelines/thirdMain.png',
    },
    {
      logo: 'Monochrome Logo',
      logoImg: '/images/guidelines/fourthMain.png',
    },
  ];
  return (
    <div className={styles.wrapper}>
      {product.map((item, index) => {
        return (
          <div
            key={index}
            data-aos='fade-up'
            className={`${styles.logoVariantsContainer} ${styles.guidlineFlex} ${styles.pT160}`}
          >
            <h5 className={`${styles.guidlineHalfTtl} ${styles.font51}`}>{item.logo}</h5>

            <img className={styles.image} src={item.logoImg} alt={item.logo} />
          </div>
        );
      })}
    </div>
  );
}
