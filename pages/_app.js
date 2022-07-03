import Head from 'next/head';
import { Provider } from "react-redux";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import store from '../store/index';
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

import '../i18nextConf';
import '../styles/globals.css';

function getLibrary(provider, connector) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>CMCX React-Next</title>
        <meta name="description" content="CMCX DAPP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;
