import React from 'react';

export default function Features() {
  const content = [
    {
      title: 'CORE Universal Block Explorer',
      text: [
        'CORE has a universal block Explorer that allows anyone to view blocks on any CORE-connected chain as well as all of the major public chains such as Bitcoin, Ethereum, etc.',
        'CORE grants anyone a simple solution to search a multitude of blockchains.',
      ],
    },
    {
      title: 'Transaction Privacy Protection Layer',
      text: [
        'CORE transaction privacy protection layer (TPPL) adds an extra layer of security and privacy when transacting on its blockchain. This is a universal layer that is applied to every CORE-connected chain and can be applied to the major public blockchains.',
      ],
    },
    {
      title: 'Seamless Access to Off-Chain Data',
      text: [
        'Oracles are an exciting innovation in the decentralized application space. They are a streamlined data sharing solution between the decentralized and physical world',
        "CORE provides an efficient and simple access point for developers to retrieve off-chain data, similar to Oracles. CORE's data solution enables decentralized-apps and smart contracts on the CORE chain to use data from other CORE-linked chains and the the major blockchains.",
      ],
    },
    {
      title: 'Universal blockchain Access API for Developers',
      text: [
        "CORE's universal API is a cross-chain, enterprise-ready, development solution that allows developers to easily develop blockchain apps on both CORE-linked blockchains and the major blockchains.",
      ],
    },
  ];

  return (
    <div>
      <h1>
        <span>Other</span>
        <span>Features</span>
      </h1>

      {content.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.title}</h4>

            <ol>
              {item.text.map((text, index) => {
                return <li key={index}>{text}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
