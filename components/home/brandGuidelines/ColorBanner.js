import React from 'react';

export default function ColorBanner() {
  const bannerData = [
    {
      logo: '/images/guideLines/Logo.png',
      themesone: [' FF7152', 'R=255', 'G=113', 'B=82', 'C=1', 'M=69', 'Y=74', 'K=0'],
      themesTwo: ['FFFFFF', 'R=0', 'G=0', 'B=0', 'C=58', 'M=46', 'Y=41', 'K=95'],
    },
    {
      logo: '/images/guideLines/Logo.png',
      themesone: ['FF7152', 'R=255', 'G=113', 'B=82', 'C=1', 'M=69', 'Y=74', 'K=0'],
      themesTwo: ['FF7152', 'R=255', 'G=113', 'B=82', 'C=1', 'M=69', 'Y=74', 'K=0'],
    },
  ];
  return (
    <div>
      {bannerData.map((item, index) => (
        <div key={index}>
          <img src={item.logo} alt='logo' />
          <div>
            {item.themesone.map((theme, index) => (
              <span key={index}>{theme} </span>
            ))}
          </div>
          <div>
            {item.themesTwo.map((theme, index) => (
              <span key={index}>{theme} </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
