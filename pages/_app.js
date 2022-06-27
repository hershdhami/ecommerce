import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import React from 'react';

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
