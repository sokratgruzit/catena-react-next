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
import store, { persistor } from '../store/index';

import '../styles/globals.css';
import '../styles/style.css';
import '../styles/default.css';
import '../styles/bridge.css';

function getLibrary(provider, connector) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { setLocaleInUrl } = useLanguages();
  const [isInitialized, setIsInitialized] = useState(false);


  useEffect(() => {
    if (!isInitialized) {
      let { query } = router;

      if (query.lang) {
        store.dispatch({
          type: "SET_ACTIVE_LANG",
          activeLang: query.lang
        });
      } else {
        setLocaleInUrl('en');
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
        <meta name='description' content='CATENA DAPP' />
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
              {/*<Footer />*/}
            </Wrapper>
          </PersistGate>
        </Provider>
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;
