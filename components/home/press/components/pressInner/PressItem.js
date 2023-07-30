import React, { useEffect, useState } from 'react';
import Slider from '../../../../UI/slider/Slider';
import CoppyLink from '../pressInner/CoppyLink';
import Years from '../filterWithYears/Years';
import PublicByYears from '../publicByYears/PublicByYears';
import { useSelector } from 'react-redux';
import createAxiosInstance from '../../../../../pages/api/axios';

const PressItem = ({ item }) => {
  const [activeYear, setActiveYear] = useState('');
  const [allPress, setAllPress] = useState([]);
  const [filterData, setFilterData] = useState();
  const activeLang = useSelector(state => state.settings.activeLang);

  const handleYearClick = year => {
    setActiveYear(year);
    const data = allPress.filter(item => {
      const itemYear = item.createdAt.substring(0, 4);
      return itemYear === year;
    });
    setFilterData(data);
  };

  useEffect(() => {
    const axios = createAxiosInstance();
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press`)
      .then(res => {
        setAllPress(res?.data);
      })
      .catch(err => {
        console.log(err?.response);
      });
  }, []);

  useEffect(() => {
    handleYearClick('2023');
  }, [allPress]);

  const sliderImages = [
    `${process.env.NEXT_PUBLIC_URL}/uploads/press/${item.image}`,
    `${process.env.NEXT_PUBLIC_URL}/uploads/press/${item.logo_image}`,
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
    <div>
      <div className='custum-text'>
        <h1>{item.title['en']['press.title']}</h1>
        <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
        <Slider images={sliderImages} />
        <div>{item.description && <p>{item.inner_descr['en']['press.description']}</p>}</div>
        <p>{item.text['en']['press.text']}</p>
        <p>{item.inner_descr['en']['press.description']}</p>
        <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
      </div>
      <Years handleYearClick={handleYearClick} activeYear={activeYear} />
      <PublicByYears filterData={filterData} activeLang={activeLang} />
    </div>
  );
};

export default PressItem;
