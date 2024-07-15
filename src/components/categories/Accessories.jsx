import React from 'react';
import ProductList from '../components/ProductList';

const Accessories = ({ products }) => {
  const accessoriesProducts = products.filter(product => product.category === 'Accessories');
  return <ProductList products={accessoriesProducts} />;
};

export default Accessories;
