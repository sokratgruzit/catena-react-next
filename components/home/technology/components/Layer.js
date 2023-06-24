import styles from '../styles/Layer.module.css';

function Layer() {
  const layersData = [
    {
      coreLayersTitle: 'Layers',
      coreLayers: ['Application', 'Blockchain', 'Network', 'Hardware'],
    },
  ];

  return (
    <div className={styles.technoLayersContainer}>
      {layersData.map((item, index) => {
        return (
          <div
            key={index}
            data-aos='fade-up'
            className={styles.technoLayersFloor}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className={styles.technoLayersTitleContainer}>
              <div className={styles.technoLayersTitle}>{item.coreLayers[0]}</div>
              <div className={styles.technoLayersDescr}>Aura</div>
            </div>
            <div className={styles.technoLayersIcons}>
              <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M50 30V25C50 22.2386 47.7614 20 45 20V20C42.2386 20 40 22.2386 40 25V30'
                  stroke='white'
                  strokeWidth='3'
                />
                <rect x='35.5' y='30.5' width='19' height='19' rx='3.5' stroke='white' strokeWidth='3' />
                <path
                  d='M6 3H8C10.7614 3 13 5.23858 13 8V21C13 23.7614 10.7614 26 8 26H6'
                  stroke='white'
                  strokeWidth='3'
                />
                <line x1='19' y1='19.5' x2='30' y2='19.5' stroke='white' strokeWidth='3' />
                <line x1='5' y1='14.5' x2='13' y2='14.5' stroke='white' strokeWidth='3' />
                <line x1='19' y1='24.5' x2='30' y2='24.5' stroke='white' strokeWidth='3' />
                <line x1='19' y1='29.5' x2='30' y2='29.5' stroke='white' strokeWidth='3' />
                <circle cx='3.5' cy='3.5' r='3.5' fill='#FF7152' />
                <circle cx='3.5' cy='14.5' r='3.5' fill='#FF7152' />
                <circle cx='3.5' cy='25.5' r='3.5' fill='#FF7152' />
                <rect x='13.5' y='10.5' width='22' height='28' rx='3.5' stroke='white' strokeWidth='3' />
                <path d='M40.9999 39.6569L44.5354 43.1924L50.1923 37.5355' stroke='white' strokeWidth='3' />
              </svg>
              <div className={styles.line}></div>
              <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M50 30V25C50 22.2386 47.7614 20 45 20V20C42.2386 20 40 22.2386 40 25V30'
                  stroke='white'
                  strokeWidth='3'
                />
                <rect x='35.5' y='30.5' width='19' height='19' rx='3.5' stroke='white' strokeWidth='3' />
                <path
                  d='M6 3H8C10.7614 3 13 5.23858 13 8V21C13 23.7614 10.7614 26 8 26H6'
                  stroke='white'
                  strokeWidth='3'
                />
                <line x1='19' y1='19.5' x2='30' y2='19.5' stroke='#FF7152' strokeWidth='3' />
                <line x1='5' y1='14.5' x2='13' y2='14.5' stroke='white' strokeWidth='3' />
                <line x1='19' y1='24.5' x2='30' y2='24.5' stroke='#FF7152' strokeWidth='3' />
                <line x1='19' y1='29.5' x2='30' y2='29.5' stroke='#FF7152' strokeWidth='3' />
                <circle cx='3.5' cy='3.5' r='3.5' fill='white' />
                <circle cx='3.5' cy='14.5' r='3.5' fill='white' />
                <circle cx='3.5' cy='25.5' r='3.5' fill='white' />
                <rect x='13.5' y='10.5' width='22' height='28' rx='3.5' stroke='white' strokeWidth='3' />
                <path d='M40.9999 39.6569L44.5354 43.1924L50.1923 37.5355' stroke='white' strokeWidth='3' />
              </svg>
              <div className={styles.line}></div>
              <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M50 30V25C50 22.2386 47.7614 20 45 20V20C42.2386 20 40 22.2386 40 25V30'
                  stroke='#FF7152'
                  strokeWidth='3'
                />
                <rect x='35.5' y='30.5' width='19' height='19' rx='3.5' stroke='white' strokeWidth='3' />
                <path
                  d='M6 3H8C10.7614 3 13 5.23858 13 8V21C13 23.7614 10.7614 26 8 26H6'
                  stroke='white'
                  strokeWidth='3'
                />
                <line x1='19' y1='19.5' x2='30' y2='19.5' stroke='white' strokeWidth='3' />
                <line x1='5' y1='14.5' x2='13' y2='14.5' stroke='white' strokeWidth='3' />
                <line x1='19' y1='24.5' x2='30' y2='24.5' stroke='white' strokeWidth='3' />
                <line x1='19' y1='29.5' x2='30' y2='29.5' stroke='white' strokeWidth='3' />
                <circle cx='3.5' cy='3.5' r='3.5' fill='white' />
                <circle cx='3.5' cy='14.5' r='3.5' fill='white' />
                <circle cx='3.5' cy='25.5' r='3.5' fill='white' />
                <rect x='13.5' y='10.5' width='22' height='28' rx='3.5' stroke='white' strokeWidth='3' />
                <path d='M40.9999 39.6569L44.5354 43.1924L50.1923 37.5355' stroke='white' strokeWidth='3' />
              </svg>
              <div className={styles.line}></div>
              <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M50 30V25C50 22.2386 47.7614 20 45 20V20C42.2386 20 40 22.2386 40 25V30'
                  stroke='white'
                  strokeWidth='3'
                />
                <rect x='35.5' y='30.5' width='19' height='19' rx='3.5' stroke='white' strokeWidth='3' />
                <path
                  d='M6 3H8C10.7614 3 13 5.23858 13 8V21C13 23.7614 10.7614 26 8 26H6'
                  stroke='white'
                  strokeWidth='3'
                />
                <line x1='19' y1='19.5' x2='30' y2='19.5' stroke='white' strokeWidth='3' />
                <line x1='5' y1='14.5' x2='13' y2='14.5' stroke='white' strokeWidth='3' />
                <line x1='19' y1='24.5' x2='30' y2='24.5' stroke='white' strokeWidth='3' />
                <line x1='19' y1='29.5' x2='30' y2='29.5' stroke='white' strokeWidth='3' />
                <circle cx='3.5' cy='3.5' r='3.5' fill='white' />
                <circle cx='3.5' cy='14.5' r='3.5' fill='white' />
                <circle cx='3.5' cy='25.5' r='3.5' fill='white' />
                <rect x='13.5' y='10.5' width='22' height='28' rx='3.5' stroke='white' strokeWidth='3' />
                <path d='M40.9999 39.6569L44.5354 43.1924L50.1923 37.5355' stroke='#FF7152' strokeWidth='3' />
              </svg>
            </div>
            <div data-aos='fade-up' className={styles.technoLayersFloor}>
              <div className={styles.technoLayersTitleContainer}>
                <div className={styles.technoLayersTitle}>{item.coreLayers[1]}</div>
                <div className={styles.technoLayersDescr}>Catena</div>
              </div>
              <div className={styles.technoLayersIcons}>
                <svg
                  className='line-svg'
                  width='603'
                  height='40'
                  viewBox='0 0 603 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g filter='url(#filter0_d)'>
                    <path
                      d='M590.707 20.7071C591.098 20.3166 591.098 19.6834 590.707 19.2929L584.343 12.9289C583.953 12.5384 583.319 12.5384 582.929 12.9289C582.538 13.3195 582.538 13.9526 582.929 14.3431L588.586 20L582.929 25.6569C582.538 26.0474 582.538 26.6805 582.929 27.0711C583.319 27.4616 583.953 27.4616 584.343 27.0711L590.707 20.7071ZM12 21L590 21V19L12 19V21Z'
                      fill='url(#paint0_linear)'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_d'
                      x='0'
                      y='0.635986'
                      width='603'
                      height='38.7279'
                      filterUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                    >
                      <feFlood floodOpacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation='6' />
                      <feColorMatrix type='matrix' values='0 0 0 0 0.607843 0 0 0 0 0.6 0 0 0 0 1 0 0 0 0.4 0' />
                      <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                      <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
                    </filter>
                    <linearGradient
                      id='paint0_linear'
                      x1='590'
                      y1='21.005'
                      x2='12'
                      y2='21.005'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#9B99FF' />
                      <stop offset='1' stopColor='#9B99FF' stopOpacity='0' />
                    </linearGradient>
                  </defs>
                </svg>

                <svg width='62' height='62' viewBox='0 0 62 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect x='1.5' y='1.5' width='22' height='22' rx='4.5' stroke='#FF7152' strokeWidth='3' />
                  <line x1='12.5' y1='17' x2='12.5' y2='29' stroke='#FF7152' strokeWidth='3' />
                  <line x1='22' y1='12.5' x2='29' y2='12.5' stroke='#FF7152' strokeWidth='3' />
                  <rect
                    x='60.5'
                    y='60.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='rotate(-180 60.5 60.5)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='49.5' y1='45' x2='49.5' y2='33' stroke='white' strokeWidth='3' />
                  <line x1='40' y1='49.5' x2='33' y2='49.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='1.5'
                    y='-1.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='matrix(-1 0 0 1 62 3)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='49.5' y1='22' x2='49.5' y2='29' stroke='white' strokeWidth='3' />
                  <line x1='46' y1='12.5' x2='33' y2='12.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='-1.5'
                    y='1.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='matrix(1 0 0 -1 3 62)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='12.5' y1='40' x2='12.5' y2='33' stroke='white' strokeWidth='3' />
                  <line x1='16' y1='49.5' x2='29' y2='49.5' stroke='white' strokeWidth='3' />
                </svg>
                <div className={styles.line}></div>
                <svg width='62' height='62' viewBox='0 0 62 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect x='1.5' y='1.5' width='22' height='22' rx='4.5' stroke='white' strokeWidth='3' />
                  <line x1='12.5' y1='17' x2='12.5' y2='29' stroke='white' strokeWidth='3' />
                  <line x1='22' y1='12.5' x2='29' y2='12.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='60.5'
                    y='60.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='rotate(-180 60.5 60.5)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='49.5' y1='45' x2='49.5' y2='33' stroke='white' strokeWidth='3' />
                  <line x1='40' y1='49.5' x2='33' y2='49.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='1.5'
                    y='-1.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='matrix(-1 0 0 1 62 3)'
                    stroke='#FF7152'
                    strokeWidth='3'
                  />
                  <line x1='49.5' y1='22' x2='49.5' y2='29' stroke='#FF7152' strokeWidth='3' />
                  <line x1='46' y1='12.5' x2='33' y2='12.5' stroke='#FF7152' strokeWidth='3' />
                  <rect
                    x='-1.5'
                    y='1.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='matrix(1 0 0 -1 3 62)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='12.5' y1='40' x2='12.5' y2='33' stroke='white' strokeWidth='3' />
                  <line x1='16' y1='49.5' x2='29' y2='49.5' stroke='white' strokeWidth='3' />
                </svg>
                <div className={styles.line}></div>
                <svg width='62' height='62' viewBox='0 0 62 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect x='1.5' y='1.5' width='22' height='22' rx='4.5' stroke='white' strokeWidth='3' />
                  <line x1='12.5' y1='17' x2='12.5' y2='29' stroke='white' strokeWidth='3' />
                  <line x1='22' y1='12.5' x2='29' y2='12.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='60.5'
                    y='60.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='rotate(-180 60.5 60.5)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='49.5' y1='45' x2='49.5' y2='33' stroke='white' strokeWidth='3' />
                  <line x1='40' y1='49.5' x2='33' y2='49.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='1.5'
                    y='-1.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='matrix(-1 0 0 1 62 3)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='49.5' y1='22' x2='49.5' y2='29' stroke='white' strokeWidth='3' />
                  <line x1='46' y1='12.5' x2='33' y2='12.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='-1.5'
                    y='1.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='matrix(1 0 0 -1 3 62)'
                    stroke='#FF7152'
                    strokeWidth='3'
                  />
                  <line x1='12.5' y1='40' x2='12.5' y2='33' stroke='#FF7152' strokeWidth='3' />
                  <line x1='16' y1='49.5' x2='29' y2='49.5' stroke='#FF7152' strokeWidth='3' />
                </svg>
                <div className={styles.line}></div>
                <svg width='62' height='62' viewBox='0 0 62 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect x='1.5' y='1.5' width='22' height='22' rx='4.5' stroke='white' strokeWidth='3' />
                  <line x1='12.5' y1='17' x2='12.5' y2='29' stroke='white' strokeWidth='3' />
                  <line x1='22' y1='12.5' x2='29' y2='12.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='60.5'
                    y='60.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='rotate(-180 60.5 60.5)'
                    stroke='#FF7152'
                    strokeWidth='3'
                  />
                  <line x1='49.5' y1='45' x2='49.5' y2='33' stroke='#FF7152' strokeWidth='3' />
                  <line x1='40' y1='49.5' x2='33' y2='49.5' stroke='#FF7152' strokeWidth='3' />
                  <rect
                    x='1.5'
                    y='-1.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='matrix(-1 0 0 1 62 3)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='49.5' y1='22' x2='49.5' y2='29' stroke='white' strokeWidth='3' />
                  <line x1='46' y1='12.5' x2='33' y2='12.5' stroke='white' strokeWidth='3' />
                  <rect
                    x='-1.5'
                    y='1.5'
                    width='22'
                    height='22'
                    rx='4.5'
                    transform='matrix(1 0 0 -1 3 62)'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <line x1='12.5' y1='40' x2='12.5' y2='33' stroke='white' strokeWidth='3' />
                  <line x1='16' y1='49.5' x2='29' y2='49.5' stroke='white' strokeWidth='3' />
                </svg>
              </div>
            </div>
            <div data-aos='fade-up' className={styles.technoLayersFloor}>
              <div className={styles.technoLayersTitleContainer}>
                <div className={styles.technoLayersTitle}>{item.coreLayers[2]}</div>
                <div className={styles.technoLayersDescr}>Origo</div>
              </div>
              <div className={styles.technoLayersIcons}>
                <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='25' cy='51' r='3.5' stroke='white' strokeWidth='3' />
                  <path d='M25 38.5V48' stroke='white' strokeWidth='3' />
                  <circle cx='25' cy='6' r='4.5' stroke='white' strokeWidth='3' />
                  <circle cx='50' cy='22' r='4.5' stroke='white' strokeWidth='3' />
                  <circle cx='6' cy='49' r='4.5' stroke='white' strokeWidth='3' />
                  <circle cx='8' cy='20' r='3.5' stroke='white' strokeWidth='3' />
                  <path d='M25 10.5V20.5' stroke='white' strokeWidth='3' />
                  <path d='M11 22L17.5 26.5' stroke='white' strokeWidth='3' />
                  <path d='M47 23L34.5 27' stroke='white' strokeWidth='3' />
                  <path d='M19 35.5L9 46' stroke='white' strokeWidth='3' />
                  <circle cx='25.5' cy='29.5' r='9' stroke='#FF7152' strokeWidth='3' />
                </svg>
              </div>
            </div>
            <div data-aos='fade-up' className={styles.technoLayersFloor}>
              <div className={styles.technoLayersTitleContainer}>
                <div className={styles.technoLayersTitle}>{item.coreLayers[3]}</div>
                <div className={styles.technoLayersDescr}>Layer -1</div>
              </div>
              <div className={styles.technoLayersIcons}>
                <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect x='8.5' y='8.5' width='39' height='39' rx='4.5' stroke='white' strokeWidth='3' />
                  <rect x='17.5' y='17.5' width='21' height='21' rx='4.5' stroke='#FF7152' strokeWidth='3' />
                  <line x1='14.5' y1='-6.55671e-08' x2='14.5' y2='10' stroke='white' strokeWidth='3' />
                  <line y1='14.5' x2='10' y2='14.5' stroke='white' strokeWidth='3' />
                  <line x1='46' y1='14.5' x2='56' y2='14.5' stroke='white' strokeWidth='3' />
                  <line y1='23.5' x2='10' y2='23.5' stroke='white' strokeWidth='3' />
                  <line x1='17' y1='25.5' x2='27' y2='25.5' stroke='#FF7152' strokeWidth='3' />
                  <line x1='46' y1='23.5' x2='56' y2='23.5' stroke='white' strokeWidth='3' />
                  <line y1='32.5' x2='10' y2='32.5' stroke='white' strokeWidth='3' />
                  <line x1='29' y1='30.5' x2='39' y2='30.5' stroke='#FF7152' strokeWidth='3' />
                  <line x1='46' y1='32.5' x2='56' y2='32.5' stroke='white' strokeWidth='3' />
                  <line y1='41.5' x2='10' y2='41.5' stroke='white' strokeWidth='3' />
                  <line x1='46' y1='41.5' x2='56' y2='41.5' stroke='white' strokeWidth='3' />
                  <line x1='14.5' y1='46' x2='14.5' y2='56' stroke='white' strokeWidth='3' />
                  <line x1='23.5' y1='-6.55671e-08' x2='23.5' y2='10' stroke='white' strokeWidth='3' />
                  <line x1='23.5' y1='46' x2='23.5' y2='56' stroke='white' strokeWidth='3' />
                  <line x1='32.5' y1='-6.55671e-08' x2='32.5' y2='10' stroke='white' strokeWidth='3' />
                  <line x1='32.5' y1='46' x2='32.5' y2='56' stroke='white' strokeWidth='3' />
                  <line x1='41.5' y1='-6.55671e-08' x2='41.5' y2='10' stroke='white' strokeWidth='3' />
                  <line x1='41.5' y1='46' x2='41.5' y2='56' stroke='white' strokeWidth='3' />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Layer;
