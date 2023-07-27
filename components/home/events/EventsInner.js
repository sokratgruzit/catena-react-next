import React from 'react';
import Slider from '../../UI/slider/Slider';
import CoppyLink from '../press/components/pressInner/CoppyLink';

export default function EventsInner() {
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
  const images = [
    '/images/eventsInner/image.png',
    '/images/eventsInner/secondImage.png',
    '/images/eventsInner/thirdImage.png',
  ];
  return (
    <div className='custum-text'>
      <h1>How the Blockchain Could Break Big Tech’s Hold on A.I.</h1>

      <span>
        <button>Digital</button>
        <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={false} showCopyButton={true} />
      </span>

      <Slider images={images} />

      <h4>
        Blockchain and AI, two of the most common buzzwords that abound today in the industry, have their own scientific
        potentials that can be explored.
      </h4>
      <p>
        AI or Artificial Intelligence has been around for quite some time. It is basically an intelligent machine that
        feeds on the troves of data stored online. AI has helped revolutionized several sectors of the industry with its
        ability to forecast solutions based on past trends. In a similar fashion, blockchain has become the go to
        solution nowadays. The idea of a decentralized public ledger has taken the tech world by storm. Initially,
        limited to cryptocurrency, blockchain has now proven its worth in various industries such as agriculture,
        entertainment, asset management etc.
      </p>
      <p>However, the real magic lies in uniting these two popular concepts into a singular idea.</p>
      <h4>When blockchain enters in Big Tech</h4>
      <p>
        The idea of pairing blockchain and AI together might seem farcical at first, but a growing crop entrepreneurs
        and academicians is showing interest in this area. Even though the whole theory remains obscure right now, the
        potential to develop is enormous. AI experts around the world believe that blockchain can help tackle some of
        the most pressing issues concerning AI currently. Chief of these problems is data hoarding by internet behemoths
        such as Google and Facebook.
      </p>
      <img src='/images/eventsInner/secondImage.png' alt='image' />
      <p>
        Dawn Song, a computer science professor at the University of California, and Ben Goertzel, chief scientist at
        Hanson Robotics are some of the big names who have put forward compelling cases of uniting the two concepts. AI
        experts believe that blockchain is a crucial tool in breaking the oligopoly these few massive companies have
        built in the market.
      </p>
      <h4>Machine learning, blockchain and AI for big tech</h4>
      <p>
        The future of machine learning lies in giving users more control over their data, instead of relying on these
        companies. Some startups have already begun their journeys towards this goal. At the most basic level, startups
        are looking to emulate the bitcoin ecosystem for data as well. Their aim is to create a marketplace where data
        is traded instead of currency. This can virtually erase the hegemony of the top companies allowing free access
        to the much needed information.
      </p>
      <h2>Integration of blockchain and AI</h2>
      <p>
        The integration of blockchain into artificial intelligence will usher in the era of free and open access to
        data. Peer to peer data exchange across an open registry can technically revolutionize AI. Another potential
        benefit of this venture is the heightened security that it offers.
      </p>
      <p>
        1.3 zettabytes of data will be distributed across a network of ledgers spread across the globe. During crisis
        and natural calamities, destruction of one site will neither affect the storage nor the ability to share data.
        Hacking into the system to corrupt or possibly steal the data will be practically impossible, keeping data out
        of reach of cronies.
      </p>
      <img src='/images/eventsInner/thirdImage.png' alt='image' />
      <p>
        Disclaimer: This is a guest post. Content of the article is author’s work and opinion. It should NOT be viewed
        as an investment advice by EtherWorld.co. Readers are suggested to do their research before investing into any
        project.
      </p>
      <hr />
      <span>
        <button>Digital</button>
        <CoppyLink data={data} currentPageURL={getCurrentPageURL} showDetails={false} showCopyButton={true} />
      </span>
    </div>
  );
}
