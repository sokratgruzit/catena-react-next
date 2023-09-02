import { Web3ReactProvider } from '@web3-react/core';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Web3 from 'web3';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLanguages from '../hooks/useLanguages';
import { socket } from "./api/socket";

import Header from '../components/layout/Header';
import Microscheme from '../components/UI/microscheme/Microscheme';
import Wrapper from '../components/layout/Wrapper';
import Footer from '../components/layout/Footer';
import store, { persistor } from '../store/index';
import AOS from "aos";
import "aos/dist/aos.css";

import '../styles/globals.css';
import '../styles/style.css';
import '../styles/default.css';
import '../styles/bridge.css';

function getLibrary(provider, connector) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { handleLanguageChange } = useLanguages();
  const [isInitialized, setIsInitialized] = useState(false);
  const [fixedFooter, setFixedFooter] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (
      router.asPath == '/overview/' || 
      router.asPath == '/overview' || 
      router.asPath == '/' || 
      router.asPath == '/overview/technology' 
    ) {
      setFixedFooter(true);
    } else {
      setFixedFooter(false);
    }
  }, [router]);

  useEffect(() => {
    if (!isInitialized) {
      let { query, locale } = router;

      if (query.lang) {
        store.dispatch({
          type: "SET_ACTIVE_LANG",
          activeLang: query.lang
        });
      } else if (locale) {
        handleLanguageChange(locale);
      } else {
        handleLanguageChange('en');
      }

      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    socket.on('connection', () => {
      console.log('Connected to WebSocket server');
    });

    socket.emit('join', 'Hello from the client');

    socket.on('message', (message) => {
      console.log('Message received: ', message);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  });

  socket.on('join', (message) => {
  }, []);

  return (
    <div>
      <Head>
        <title>CATENA</title>
        <meta name='description' content='Generated by Catena team' />
        <meta name='referrer' content='no-referrer-when-downgrade' />
        <meta property='og:site_name' content='CATENA' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='CATENA' />
        <meta
            property='og:description'
            content='CATENA is a PoS blockchain 3.0 framework focused on Interoperability, Scalability, and Usability.'
        />
        <meta property='og:url' content='https://catena.network/' />
        <meta
            property='og:image'
            content='https://catena-react-next.onrender.com/og_meta_tag.jpeg'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Catena' />
        <meta
            name='twitter:description'
            content='Catena  is a PoS blockchain 3.0 framework focused on Interoperability, Scalability, and Usability.'
        />
        <meta name='twitter:url' content='https://catena.network/' />
        <meta name='twitter:site' content='@Catena' />
        <meta
            name='twitter:image'
            content='https://wallet-landing-next.vercel.app/og_meta_tag.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Wrapper>
              <div className='noise-parent'>
                <div className='noise'></div>
              </div>
              <Microscheme lvl={[1, 2]} />
              <Header />
              <Component {...pageProps} />
              <Footer active={!fixedFooter} fixed={fixedFooter}/>
            </Wrapper>
          </PersistGate>
        </Provider>
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;
