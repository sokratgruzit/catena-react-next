import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CoppyLink from '../../../components/home/press/components/pressInner/CoppyLink';
import Slider from '../../../components/UI/slider/Slider';

const pressData = [
  {
    slug: 'vision-for-future-ai',
    title: 'SingularityNET’s Ben Goertzel has a grand vision for the future of AI',
    content: [
      {
        teaser:
          ' SingularityNET — an ambitious project to create a decentralized marketplace for AI — has raised a lot of money in its token sale. In around 60 seconds after opening the sale to the public, it sold out of the whole amount of available tokens (the AGI token), bringing the total raised to $36 million.',
        text: ' However, in this day and age, a startup raising a lot of money in an ICO is not really of interest, at least to many. This is part and parcel of the crazy, unregulated, crypto world these days. But what is interesting is what SingularityNET actually plans to become.',
      },
      {
        teaser: 'In an interview, I asked him how it will all work',
        text: [
          ' Proprietary marketplaces exist, like the Amazon Web Services for instance. What we’re creating here is a decentralized marketplace, more like BitTorrent. There’s no central dictator deciding what gets in there. Anyone can put an AI online, wrap it in our API, announce it to the network and any business that needs AI as a service can request it.',
          'Then you need a good reputation system to grade the best AIs with a high rating. We need blockchain to let us do this in a peer to peer, decentralized way. P2P software that is reliable and not easily hackable and involves payment, but it would still need a distributed ledger.',
        ],
      },
    ],
  },
  {
    slug: 'ai-future-computing',
    title: 'AI Is The Future Of Computing, And SingularityNET Is The Future Of A.I',
    content: [
      {
        teaser:
          ' SingularityNET — an ambitious project to create a decentralized marketplace for AI — has raised a lot of money in its token sale. In around 60 seconds after opening the sale to the public, it sold out of the whole amount of available tokens (the AGI token), bringing the total raised to $36 million.',
        text: ' However, in this day and age, a startup raising a lot of money in an ICO is not really of interest, at least to many. This is part and parcel of the crazy, unregulated, crypto world these days. But what is interesting is what SingularityNET actually plans to become.',
      },
      {
        teaser: 'In an interview, I asked him how it will all work',
        text: [
          ' Proprietary marketplaces exist, like the Amazon Web Services for instance. What we’re creating here is a decentralized marketplace, more like BitTorrent. There’s no central dictator deciding what gets in there. Anyone can put an AI online, wrap it in our API, announce it to the network and any business that needs AI as a service can request it.',
          'Then you need a good reputation system to grade the best AIs with a high rating. We need blockchain to let us do this in a peer to peer, decentralized way. P2P software that is reliable and not easily hackable and involves payment, but it would still need a distributed ledger.',
        ],
      },
    ],
  },
  {
    slug: 'ai-multi-chain-network',
    title: 'This AI Powered Multi-Chain Network Is Building an Internetof Blockchains',
    content: [
      {
        teaser:
          ' SingularityNET — an ambitious project to create a decentralized marketplace for AI — has raised a lot of money in its token sale. In around 60 seconds after opening the sale to the public, it sold out of the whole amount of available tokens (the AGI token), bringing the total raised to $36 million.',
        text: ' However, in this day and age, a startup raising a lot of money in an ICO is not really of interest, at least to many. This is part and parcel of the crazy, unregulated, crypto world these days. But what is interesting is what SingularityNET actually plans to become.',
      },
      {
        teaser: 'In an interview, I asked him how it will all work',
        text: [
          ' Proprietary marketplaces exist, like the Amazon Web Services for instance. What we’re creating here is a decentralized marketplace, more like BitTorrent. There’s no central dictator deciding what gets in there. Anyone can put an AI online, wrap it in our API, announce it to the network and any business that needs AI as a service can request it.',
          'Then you need a good reputation system to grade the best AIs with a high rating. We need blockchain to let us do this in a peer to peer, decentralized way. P2P software that is reliable and not easily hackable and involves payment, but it would still need a distributed ledger.',
        ],
      },
    ],
  },
];

const InnerPage = () => {
  const router = useRouter();
  const { slug, img } = router.query;
  const pressItem = pressData.find(item => item.slug === slug);

  const [sliderImages, setSliderImages] = useState([img || '']);

  useEffect(() => {
    setSliderImages([img || '']);
  }, [img]);

  if (!pressItem) {
    return <div style={{ marginTop: '200px', marginLeft: '40%' }}>Press item not found.</div>;
  }

  const data = [
    {
      time: '0:13 PM GMT+3',
      month: ' October 26',
      year: 2021,
    },
  ];

  const getCurrentPageURL = () => {
    return window.location.href;
  };

  return (
    <div className='container' style={{ paddingTop: '200px', paddingBottom: '100px' }}>
      <div className='text'>
        <h1>{pressItem.title}</h1>
        <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
        <Slider images={sliderImages} />
        {pressItem.content?.map((contentItem, contentIndex) => {
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
        <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
      </div>
    </div>
  );
};

export default InnerPage;
