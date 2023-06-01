import React from 'react';

export default function ColorPalette() {
  return (
    <div>
      <div data-aos='fade-up' className='guidline__color-circle-container'>
        <div className='guidline__color-circle-item'>
          <div className='guidline__color-circle' style={{ background: '#817EFF' }}></div>
          <div className='guidline__color-circle-title'>817EFF</div>
        </div>
        <div className='guidline__color-circle-item'>
          <div className='guidline__color-circle' style={{ background: '#D5D5FF' }}></div>
          <div className='guidline__color-circle-title'>D5D5FF</div>
        </div>
        <div className='guidline__color-circle-item'>
          <div className='guidline__color-circle' style={{ background: '#FFBB95' }}></div>
          <div className='guidline__color-circle-title'>FFBB95</div>
        </div>
        <div className='guidline__color-circle-item'>
          <div className='guidline__color-circle' style={{ background: '#FF8D4D' }}></div>
          <div className='guidline__color-circle-title'>FF8D4D</div>
        </div>
        <div className='guidline__color-circle-item'>
          <div className='guidline__color-circle' style={{ background: '#E2DD5D' }}></div>
          <div className='guidline__color-circle-title'>E2DD5D</div>
        </div>
        <div className='guidline__color-circle-item'>
          <div className='guidline__color-circle' style={{ background: '#4ECB6A' }}></div>
          <div className='guidline__color-circle-title'>4ECB6A</div>
        </div>
        <div className='guidline__color-circle-item'>
          <div className='guidline__color-circle' style={{ background: '#99FFB0' }}></div>
          <div className='guidline__color-circle-title'>99FFB0</div>
        </div>
      </div>
      <div data-aos='fade-up' className='pB-160 right guidline__color-circle-container'>
        <div className='guidline__color-circle-item'>
          <div
            className='guidline__color-circle'
            style={{
              background: 'rgb(255,142,117)',
              background: 'linearGradient(0deg, rgba(255,142,117,1) 0%, rgba(255,142,117,1) 100%)',
            }}
          ></div>
          <div className='guidline__color-circle-title'>FF8E75 → 9F402B</div>
        </div>
        <div className='guidline__color-circle-item'>
          <div
            className='guidline__color-circle'
            style={{
              background: 'rgb(138,136,255)',
              background: 'linearGradient(180deg, rgba(138,136,255,1) 0%, rgba(5,0,255,1) 100%)',
            }}
          ></div>
          <div className='guidline__color-circle-title'>8A88FF → 0500FF</div>
        </div>
        <div className='guidline__color-circle-item'>
          <div
            className='guidline__color-circle'
            style={{
              background: 'rgb(213,213,255)',
              background: 'linearGradient(180deg, rgba(213,213,255,1) 0%, rgba(139,139,198,1) 100%)',
            }}
          ></div>
          <div className='guidline__color-circle-title'>D5D5FF → 8B8BC6</div>
        </div>
      </div>
    </div>
  );
}
