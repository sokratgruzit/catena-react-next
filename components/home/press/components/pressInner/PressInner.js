import React from 'react';

import CoppyLink from './CoppyLink';
import Slider from '../../../../UI/slider/Slider';

export default function PressInner() {
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
  const images = ['/images/pressInner/image.png', '/images/pressInner/secondImage.png'];
  return (
    <div className='text'>
      <h1>SingularityNET’s Ben Goertzel has a grand vision for the future of AI</h1>
      <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />

      {/* <img src='/images/pressInner/image.png' alt='image' /> */}
      <Slider images={images} />
      <h4>
        SingularityNET — an ambitious project to create a decentralized marketplace for AI — has raised a lot of money
        in its token sale. In around 60 seconds after opening the sale to the public, it sold out of the whole amount of
        available tokens (the AGI token), bringing the total raised to $36 million.
      </h4>
      <p>
        However, in this day and age, a startup raising a lot of money in an ICO is not really of interest, at least to
        many. This is part and parcel of the crazy, unregulated, crypto world these days. But what is interesting is
        what SingularityNET actually plans to become.
      </p>
      <h4>In an interview, I asked him how it will all work</h4>
      <p>
        Proprietary marketplaces exist, like the Amazon Web Services for instance. What we’re creating here is a
        decentralized marketplace, more like BitTorrent. There’s no central dictator deciding what gets in there. Anyone
        can put an AI online, wrap it in our API, announce it to the network and any business that needs AI as a service
        can request it.
      </p>
      <p>
        Then you need a good reputation system to grade the best AIs with a high rating. We need blockchain to let us do
        this in a peer to peer, decentralized way. P2P software that is reliable and not easily hackable and involves
        payment, but it would still need a distributed ledger.
      </p>
      <hr />
      <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={true} showCopyButton={true} />
    </div>
  );
}
