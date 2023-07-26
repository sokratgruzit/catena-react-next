import { Web3ReactProvider } from '@web3-react/core';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Web3 from 'web3';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import store, { persistor } from '../store/index';

import '../styles/globals.css';
import '../styles/style.css';
import '../styles/default.css';
import '../styles/bridge.css';

function getLibrary(provider, connector) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>CMCX React-Next</title>
        <meta name='description' content='CMCX DAPP' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;