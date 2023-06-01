import styles from '../styles/ColorBanner.module.css';

export default function ColorBanner() {
  return (
    <div className={styles.flDirCol}>
      <div className={`${styles.pB160} ${styles.guidlineColorsContainer}`}>
        <div className={styles.guidlineColorsInner} style={{ background: '#000000' }}>
          <div className={styles.guidlineColorsInnerImg}></div>
          <div className={styles.guidlineColorsInnerDescription}>
            <div className={styles.guidlineColorsInnerDescriptionTitle} style={{ color: '#ffffff' }}>
              On dark
            </div>
            <div className={styles.guidlineColorsInnerDescriptionFloor}>
              <div className={styles.guidlineColorsInnerDescriptionFloorColor} style={{ background: '#FF7152' }}></div>
              <div
                className={styles.guidlineColorsInnerDescriptionFloorDescr}
                style={{ marginLeft: '15px', marginRight: '30px' }}
              >
                <span className='wdth1'>FF7152</span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr} style={{ marginRight: '30px' }}>
                <span className='wdth2'>R=255</span>
                <span className='wdth2'>G=113</span>
                <span className='wdth2'>B=82</span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr}>
                <span className='wdth3'>C=1</span>
                <span className='wdth3'>M=69</span>
                <span className='wdth3'>Y=74</span>
                <span className='wdth3'>K=0</span>
              </div>
            </div>
            <div className={styles.guidlineColorsInnerDescriptionFloor}>
              <div className={styles.guidlineColorsInnerDescriptionFloorColor} style={{ background: '#ffffff' }}></div>
              <div
                className={styles.guidlineColorsInnerDescriptionFloorDescr}
                style={{ marginLeft: '15px', marginRight: '30px' }}
              >
                <span className='wdth1'>FFFFFF</span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr} style={{ marginRight: '30px' }}>
                <span className='wdth2'>R=255</span>
                <span className='wdth2'>G=255</span>
                <span className='wdth2'>B=255</span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr}>
                <span className='wdth3'>C=0</span>
                <span className='wdth3'>M=0</span>
                <span className='wdth3'>Y=0</span>
                <span className='wdth3'>K=0</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.guidlineColorsInner} ${styles.guidlineColorsInnerWhite}`}
          style={{ background: '#ffffff' }}
        >
          <div className={styles.guidlineColorsInnerImg}></div>
          <div className={styles.guidlineColorsInnerDescription}>
            <div className={styles.guidlineColorsInnerDescriptionTitle} style={{ color: '#000000' }}>
              On light
            </div>
            <div className={styles.guidlineColorsInnerDescriptionFloor}>
              <div className={styles.guidlineColorsInnerDescriptionFloorColor} style={{ background: '#FF7152' }}></div>
              <div
                className={styles.guidlineColorsInnerDescriptionFloorDescr}
                style={{ marginLeft: '15px', marginRight: '40px' }}
              >
                <span className='wdth1'>FF7152</span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr} style={{ marginRight: '30px' }}>
                <span className='wdth2'>R=255</span>
                <span className='wdth2'>G=113</span>
                <span className='wdth2'>B=82</span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr}>
                <span className='wdth3'>C=1</span>
                <span className='wdth3'>M=69</span>
                <span className='wdth3'>Y=74</span>
                <span className='wdth3'>K=0</span>
              </div>
            </div>
            <div className={styles.guidlineColorsInnerDescriptionFloor}>
              <div className={styles.guidlineColorsInnerDescriptionFloorColor} style={{ background: '#000000' }}></div>
              <div
                className={styles.guidlineColorsInnerDescriptionFloorDescr}
                style={{ marginLeft: '15px', marginRight: '40px' }}
              >
                <span className='wdth1'>FFFFFF</span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr} style={{ marginRight: '30px' }}>
                <span className='wdth2'>R=0</span>
                <span className='wdth2'>G=0</span>
                <span className='wdth2'>B=0</span>
              </div>
              <div className={styles.guidlineColorsInnerDescriptionFloorDescr}>
                <span className='wdth3'>C=58</span>
                <span className='wdth3'>M=46</span>
                <span className='wdth3'>Y=41</span>
                <span className='wdth3'>K=95</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
