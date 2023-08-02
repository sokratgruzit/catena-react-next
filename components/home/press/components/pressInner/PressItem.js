import React, { useEffect, useState } from 'react';
import Slider from '../../../../UI/slider/Slider';
import CoppyLink from '../pressInner/CoppyLink';
import Years from '../filterWithYears/Years';
import PublicByYears from '../publicByYears/PublicByYears';
import { useSelector } from 'react-redux';
import createAxiosInstance from '../../../../../pages/api/axios';

const PressItem = ({ item, slug }) => {
  const [activeYear, setActiveYear] = useState('');
  const [allPress, setAllPress] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeLang = useSelector(state => state.settings.activeLang);

  const fetchData = () => {
    const axios = createAxiosInstance();
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press`)
      .then(res => {
        const filteredData = res?.data.filter(pressItem => pressItem.slug !== slug);
        setAllPress(filteredData);
      })
      .catch(err => {
        console.log(err?.response);
      });
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  useEffect(() => {
    if (allPress.length > 0) {
      handleYearClick('2023');
      setLoading(false);
    }
  }, [allPress]);

  const handleYearClick = year => {
    setActiveYear(year);
    const data = allPress.filter(item => {
      const itemYear = item.createdAt.substring(0, 4);
      return itemYear === year && item.slug !== slug;
    });
    setFilterData(data);
  };

  const sliderImages = [
    `${process.env.NEXT_PUBLIC_URL}/uploads/press/${item.image}`,
    `${process.env.NEXT_PUBLIC_URL}/uploads/press/${item.logo_image}`,
  ];

  const getCurrentPageURL = () => {
    return window.location.href;
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='custum-text'>
            <h1>{item.title['en']['press.title']}</h1>
            <CoppyLink
              data={[
                {
                  time: item.createdAt.substring(11, 19),
                  month: item.createdAt.substring(5, 10),
                  year: parseInt(item.createdAt.substring(0, 4)),
                  slug: item.slug,
                },
              ]}
              currentPageURL={getCurrentPageURL}
              showDetails={true}
              showCopyButton={true}
            />
            <Slider images={sliderImages} />
            <div>{item.description && <p>{item.inner_descr['en']['press.description']}</p>}</div>
            <p>{item.text['en']['press.text']}</p>
            <p>{item.inner_descr['en']['press.description']}</p>
            <CoppyLink
              data={[
                {
                  time: item.createdAt.substring(11, 19),
                  month: item.createdAt.substring(5, 10),
                  year: parseInt(item.createdAt.substring(0, 4)),
                  slug: item.slug,
                },
              ]}
              currentPageURL={getCurrentPageURL}
              showDetails={true}
              showCopyButton={true}
            />
          </div>
          <Years handleYearClick={handleYearClick} activeYear={activeYear} />
          <PublicByYears filterData={filterData} activeLang={activeLang} />
        </>
      )}
    </div>
  );
};

export default PressItem;
