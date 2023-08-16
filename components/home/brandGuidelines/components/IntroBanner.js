import { useState } from 'react';
import { Button } from '@catena-network/catena-ui-module';

import styles from '../styles/IntroBanner.module.css';

export default function IntroBanner(props) {
  const [firstAnimation, setFirstAnimation] = useState(false);
  // const [active, setActive] = useState(false);
  const visibilityChanged = () => {};
  const handleFirstAnimation = () => {
    setTimeout(() => {
      setFirstAnimation(true);
    }, 100);
  };

  const handleDownload = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Error fetching the file:', error);
      });
  };

  const itemData = [
    {
      links: [{ url: '/images/guidelines/firstUsage.png', text: 'Download image 1' }],
    },
  ];

  const data = [
    {
      brand: 'brand',
      guidelines: 'Guidelines',
    },
  ];
  return (
    <div className={`oAnimation ${styles.container} ${props.animate ? 'animate' : ''}`}>
      <div className={`container ${styles.mainContainerDescription}`}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.left}>
              <h1 className={`tYAnimation ${props.animate ? 'animate' : ''}`}>
                <span className='font-90 ttl'>{item.brand}</span>
                <span className='font-90 ttl'>{item.guidelines}</span>
              </h1>
              <div className={`${styles.mainContainerDownload} tYAnimation delay1 ${props.animate ? 'animate' : ''}`}>
                {itemData.map((item, index) => (
                  <div className='item' key={index}>
                    {item.links.map((link, linkIndex) => (
                      <Button
                        onClick={() => handleDownload(link.url, link.text)}
                        key={linkIndex}
                        label={'Download all logos'}
                        size={'btn-lg'}
                        type={'btn-primary'}
                        arrow={false}
                        element={'button'}
                        disabled={false}
                        className={styles.orangeBtn}
                      />
                    ))}
                  </div>
                ))}
                <div className={styles.mainContainerDownloadText}>{item.downloadAs}PDF, EPS & SVG</div>
              </div>
            </div>
          );
        })}
        <svg
          className={`oAnimation delay1 ${props.animate ? 'animate' : ''}`}
          width='830'
          height='1400'
          viewBox='0 0 830 1400'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.35'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1356.24 457.82C1299.45 303.683 1190.25 174.437 1047.76 92.7217C905.26 11.0059 738.556 -17.97 576.844 10.8692C415.132 39.7084 268.721 124.524 163.257 250.46C57.7934 376.396 0 535.423 0 699.687C0 863.95 57.7934 1022.98 163.257 1148.91C268.721 1274.85 415.132 1359.67 576.844 1388.5C738.556 1417.34 905.26 1388.37 1047.76 1306.65C1190.25 1224.94 1299.45 1095.69 1356.24 941.553C1326.79 933.005 1299.23 918.934 1275.04 900.09C1176.56 851.717 1000.35 806.799 827.586 896.635C783.435 931.794 728.538 950.703 672.1 950.191C638.977 950.191 606.177 943.667 575.575 930.991C544.973 918.315 517.167 899.736 493.745 876.314C470.323 852.892 451.744 825.086 439.068 794.484C426.392 763.882 419.868 731.083 419.868 697.959C419.868 664.836 426.392 632.036 439.068 601.434C451.744 570.832 470.323 543.026 493.745 519.604C517.167 496.182 544.973 477.603 575.575 464.927C606.177 452.251 638.977 445.727 672.1 445.727C705.231 445.517 738.063 451.988 768.637 464.751C799.211 477.515 826.898 496.31 850.045 520.014C946.792 573.571 1095.37 613.306 1238.76 530.38C1269.89 495.119 1310.77 469.87 1356.24 457.82Z'
            fill='url(#paint0_linear_204_1950)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_204_1950'
              x1='774.5'
              y1='0.273309'
              x2='-123.983'
              y2='309.306'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#00FFF0' />
              <stop offset='1' stopColor='#E96B6B' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
