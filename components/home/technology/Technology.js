import Cart from './components/Cart';
import Features from './components/Features';
import Layer from './components/Layer';
import Promo from './components/Promo';
import Tabs from './components/Tabs';
import Token from './components/Token';

export default function Technology() {
  const tabs = [
    {
      title: 'CATENA',
      heading: 'CATENA',
      content:
        'CATENA blockchain is a combination of all the latest frameworks and advanced programming languages into one cutting-edge solution.',
    },
    {
      title: 'Apeirogon',
      heading: 'Apeirogon',
      content:
        'It is built on top of our in-house Apeirogon blockchain framework - a next-generation framework for enterprise-grade blockchain innovation that is highly compatible with Solidity, Simplicity, and CX. Apeirogon allows any development team to easily build a custom blockchain for their own use case with custom parameter settings such as token supply and token name. It also allows you to add customised protocols to your blockchain and can communicate with both public and private blockchains through its built-in public bridges. ',
    },
    {
      title: 'Wasm',
      heading: 'WebAssembly',
      content:
        'Apeirogon is compiled to WebAssembly which is a super performant virtual environment that provides a way to run code written in multiple languages on the web at near native speed. WebAssembly is a fast, efficient, and safe binary instruction format for a stack-based virtual machine. It is a popular choice for the major web browser providers such as Google, Apple, Microsoft, and Mozilla, who all implement it in their web browsers. ',
    },
    {
      title: 'Libp2p',
      heading: 'Libp2p',
      content:
        "Apeirogon's ecosystem uses a state-of-the-art, peer-to-peer network platform called libp2p which is a modular system of protocols, specifications and libraries that enable the development of peer-to-peer network applications and is positioned to be the standard for future decentralized applications.",
    },
    {
      title: 'Rust',
      heading: 'Programming Languages',
      content:
        'To bring it all together, we use Rust, Haskell, C++,  and Golang to program everything. These programming languages are the most advanced in the market and provide high speeds and robust performance. All of this combined makes the Apeirogon framework a high-speed, and robust solution.',
    },
    {
      title: 'C++',
      heading: 'Programming Languages',
      content:
        'To bring it all together, we use Rust, Haskell, C++,  and Golang to program everything. These programming languages are the most advanced in the market and provide high speeds and robust performance. All of this combined makes the Apeirogon framework a high-speed, and robust solution.',
    },
  ];

  return (
    <div className='container'>
      <Promo />
      <Tabs tabs={tabs} />
      <Cart titpeSpanOne={'Network'} titpeSpanTwo={'Structure'} />
      <Layer />
      <Token />
      <Cart titpeSpanOne={'Consesus'} titpeSpanTwo={'Structure'} />
      <Features />
    </div>
  );
}
