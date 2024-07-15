import React from 'react';
import ProductList from '../components/ProductList';

const Clothing = ({ products }) => {
  const clothingProducts = products.filter(product => product.category === 'Clothing');
  return <ProductList products={clothingProducts} />;
};

export default Clothing;
