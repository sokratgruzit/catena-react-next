import styles from '../styles/MainColors.module.css';

export default function MainColors() {
  const colors = [
    {
      colors: 'Colors',
      colorsText:
        'A colour palette dominated by blue and red, and a wide variety of colours that represent each of our products.',
      colorsList: ['CORE Red', 'Blue', 'White', 'Black'],
    },
  ];
  return (
    <div className='guidline__half-colors'>
      {colors.map((item, index) => {
        return (
          <div key={index}>
            <div className={`${styles.guidlineLrgTtl} ${styles.font51}`}>{item.colors}</div>
            <div className={styles.guidlineBigColorsParagraph}>{item.colorsText}</div>
            <div className={styles.guidlinedBigColors}>
              <div style={{ background: '#FF7152' }}>
                <span>{item.colorsList[0]}</span>
                <p>#FF7152</p>
              </div>
              <div style={{ background: '#0500FF' }}>
                <span>{item.colorsList[1]}</span>
                <p>#0500FF</p>
              </div>
              <div style={{ background: '#ffffff' }}>
                <span style={{ color: ' #00050F' }}>{item.colorsList[2]}</span>
                <p>#00050F</p>
              </div>
              <div style={{ border: '2px solid #151C29', background: ' #00050F' }}>
                <span>{item.colorsList[3]}</span>
                <p>#00050F</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
