import '../styles/globals.css';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import React from 'react';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
