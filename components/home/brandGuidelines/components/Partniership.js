import React from 'react';

export default function Partniership() {
  const data = [
    {
      partnerships: 'Partnerships',
      partnershipsText:
        'When pairing the CORE corporate logo or any other CORE logo with another logo, a thin line is used to separate the two logos.',
      partners: 'Partners',
      partnersItems: [
        {
          title: 'Visual Balance',
          text: 'Ensure that each logo is visually balanced in terms of size.',
        },
        {
          title: 'Equal Distance',
          text: 'Ensure that the space between the logos and the line are visually equal on both sides of the line.',
        },
      ],
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div data-aos='fade-up' className='guidline__flex'>
            <div className='guidline__half'>
              <div className='guidline__lrg-ttl font-51'>{item.partnerships}</div>
            </div>
            <div className='guidline__half'>
              <div className='guidline__paragraph paragraphMt'>{item.partnershipsText}</div>
            </div>
          </div>
          <div data-aos='fade-up' className='guidline__partners'>
            <span className='line'></span>
            <div className='guidline__partners-txt'>{item.partners}</div>
          </div>
          <div data-aos='fade-up' className='guidline__flex'>
            {item.partnersItems.map((list, listIndex) => (
              <div className='guidline__half wdth340' key={listIndex}>
                <div className='guidline__half-ltl-ttl'>{list.title}</div>
                <div className='guidline__half-ltl-dscr'>{list.text}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
