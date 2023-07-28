import React from 'react';
import Slider from '../../../../UI/slider/Slider';
import CoppyLink from '../pressInner/CoppyLink';

const PressItem = ({ item }) => {
  const sliderImages = [
    `http://localhost:4003/uploads/press/${item.image}`,
    `http://localhost:4003/uploads/press/${item.logo_image}`,
  ];

  const data = [
    {
      time: '0:13 PM GMT+3',
      month: 'October 26',
      year: 2021,
    },
  ];

  const getCurrentPageURL = () => {
    return window.location.href;
  };

  return (
    <div className='custum-text'>
      <h1>{item.title['en']['press.title']}</h1>
      <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
      <Slider images={sliderImages} />
      <div>{item.description && <p>{item.inner_descr['en']['press.description']}</p>}</div>
      <p>{item.text['en']['press.text']}</p>
      <p>{item.inner_descr['en']['press.description']}</p>
      <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
    </div>
  );
};

export default PressItem;
