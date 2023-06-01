import React from 'react';

export default function LogoUsages() {
  const incorrectUsageList = [
    'Do not change the size relationship of the symbol and the wordmark.',
    'Do not make the logo a single colour.',
    'Do not alter the colour of the symbol or the wordmark.',
    'Do not add effects such as drop shadows, gradients or glow.',
    'Do not use as a mask or holding shape for imagery.',
    'Do not place onto backgrounds with insufficient contrast to the logo.',
    'Do not rotate, skew, or shear.',
    'Do not distort proportions.',
    'Do not add text closely to the logotype to create another logo.',
  ];
  return (
    <div>
      {incorrectUsageList.map((item, index) => (
        <div key={index}>
          <div data-aos='fade-up' className='guidline__table pB-160'>
            <div className='guidline__table-item'>
              <div className='guidline__table-item-ttl'>{item}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
