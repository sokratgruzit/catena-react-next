import styles from '../styles/Fonts.module.css';

export default function Fonts() {
  const fonts = [
    {
      span: 'Lack',
      teaser: 'Font Family',
      svg: '/images/guidelines/Aa.svg',
      alignment: 'Header',
      fonts: 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz',
      num: '1 2 3 4 5 6 7 8 9 0 @ # $ % &',
    },
    {
      span: 'Noto Sans',
      teaser: 'Font Family',
      svg: '/images/guidelines/AaSecond.svg',
      alignment: 'Body',
      fonts: 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz',
      num: '1 2 3 4 5 6 7 8 9 0 @ # $ % &',
    },
  ];

  return (
    <div className={styles.fonts}>
      {fonts.map((item, index) => {
        return (
          <div key={index}>
            <div className={`${styles.line} font-20 ttl`} data-aos="fade-up">
              <span className='font-20'>{item.span}</span>
              {item.teaser}
            </div>
            <div className={styles.content} data-aos="fade-up">
              <img src={item.svg} alt='svg' />
              <div className={styles.definition}>
                <h3 className={`text  font-40 ${item.alignment === 'Header' ? 'ttl' : ''}`}>{item.alignment}</h3>
                <h4 className={`text font-40 ${item.alignment === 'Header' ? 'ttl' : ''} ${styles.font}`}>{item.fonts}</h4>
                <h4 className={`text font-40 ${item.alignment === 'Header' ? 'ttl' : ''} ${styles.num}`}>{item.num}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
