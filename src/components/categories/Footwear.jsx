import React from 'react';
import ProductList from '../components/ProductList';

const Footwear = ({ products }) => {
  const footwearProducts = products.filter(product => product.category === 'Footwear');
  return <ProductList products={footwearProducts} />;
};

export default Footwear;
