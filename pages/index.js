import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = () => {
  return (
    <div>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>

      <FooterBanner />
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, banner }
  }
}

export default Home;