import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import createAxiosInstance from '../../../pages/api/axios';
import CoppyLink from '../../../components/home/press/components/pressInner/CoppyLink';
import Slider from '../../../components/UI/slider/Slider';

const InnerPage = ({ allPress }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pressItem, setPressItem] = useState(null);
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    if (slug && allPress) {
      const pressItemData = allPress.find(item => item.slug === slug);
      setPressItem(pressItemData);
      setSliderImages([pressItemData?.image || '']);
    }
  }, [slug, allPress]);

  console.log(allPress);

  if (!pressItem) {
    return <div>ITEM NOT FOUND</div>;
  }

  const { title, description, image, text } = pressItem;

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
    <div className='container' style={{ paddingTop: '200px', paddingBottom: '100px' }}>
      <div className='custum-text'>
        <h1>{title?.en}</h1>
        <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
        <Slider images={sliderImages} />

        <p>{description?.en}</p>

        {text?.en?.press?.content?.map((contentItem, contentIndex) => {
          return (
            <div key={contentIndex}>
              <h4>{contentItem.teaser}</h4>
              {Array.isArray(contentItem.text) ? (
                contentItem.text.map((textItem, textIndex) => <p key={textIndex}>{textItem}</p>)
              ) : (
                <p>{contentItem.text}</p>
              )}
            </div>
          );
        })}
        <hr />

        {image && <img src={image} alt={title?.en} />}

        <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
      </div>
    </div>
  );
};

export default InnerPage;

export async function getServerSideProps() {
  try {
    const axios = createAxiosInstance();
    const response = await axios.get('http://localhost:4003/press/get-all-press');
    const allPress = response?.data || [];
    return { props: { allPress } };
  } catch (error) {
    console.error('Error fetching press data:', error);
    return { props: { allPress: [] } };
  }
}
