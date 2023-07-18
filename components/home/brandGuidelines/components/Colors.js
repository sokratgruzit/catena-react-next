import styles from '../styles/Colors.module.css';

export default function Colors() {
  const colorsList = [{ name: 'White' }, { name: 'Blue' }, { name: 'Black' }, { name: 'CORE Red' }];

  return (
    <div>
      {colorsList.map((item, index) => (
        <div key={index}>
          <div data-aos='fade-up' className={`${styles.pT160} ${styles.guidlineFlex}`}>
            <div className={styles.guidlineBgOuter}></div>
            <div className={styles.guidlineHalf}>
              <div className={`${styles.guidlineLrgTtl} ${styles.font51}`}>{item.name}</div>
            </div>
          </div>
          <div data-aos='fade-up' className={styles.guidlineColorScheme}>
            <div
              className={`${styles.guidlineColorSchemeItem} ${item.name === 'White' ? 'white' : ''} ${
                item.name === 'Blue' ? 'blue' : ''
              } ${item.name === 'Black' ? 'black' : ''} ${item.name === 'CORE Red' ? 'red' : ''}`}
              style={{
                background:
                  item.name === 'White'
                    ? '#FFFFFF'
                    : item.name === 'Blue'
                    ? '#0500FF'
                    : item.name === 'Black'
                    ? '#000000'
                    : '#FF7152',
              }}
            >
              <div className={styles.guidlineColorSchemeItemTtl}>{item.name}</div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr}>
                <span className='wdth1'>
                  {item.name === 'White'
                    ? 'FFFFFF'
                    : item.name === 'Blue'
                    ? '0500FF'
                    : item.name === 'Black'
                    ? '000000'
                    : 'FF7152'}
                </span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr} style={{ marginRight: '30px' }}>
                <span className={styles.wdth2}>
                  R={item.name === 'White' ? '255' : item.name === 'Blue' ? '5' : item.name === 'Black' ? '0' : '255'}
                </span>
                <span className={styles.wdth2}>
                  G={item.name === 'White' ? '255' : item.name === 'Blue' ? '0' : item.name === 'Black' ? '0' : '113'}
                </span>
                <span className={styles.wdth2}>
                  B={item.name === 'White' ? '255' : item.name === 'Blue' ? '255' : item.name === 'Black' ? '0' : '82'}
                </span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr}>
                <span className={styles.wdth3}>
                  C={item.name === 'White' ? '0' : item.name === 'Blue' ? '83' : item.name === 'Black' ? '58' : '1'}
                </span>
                <span className={styles.wdth3}>
                  M={item.name === 'White' ? '0' : item.name === 'Blue' ? '74' : item.name === 'Black' ? '46' : '69'}
                </span>
                <span className={styles.wdth3}>
                  Y={item.name === 'White' ? '0' : item.name === 'Blue' ? '0' : item.name === 'Black' ? '41' : '74'}
                </span>
                <span className={styles.wdth3}>
                  K={item.name === 'White' ? '0' : item.name === 'Blue' ? '0' : item.name === 'Black' ? '95' : '0'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
