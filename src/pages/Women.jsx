import React from 'react';
import NavBar from '../components/NavBar';
// import ProductList from '../components/ProductList';

const Women = ({ products }) => {
  // const womenProducts = products.filter(product => product.gender === 'Women');
  return (
    <div>
      <NavBar />
      <h1>women</h1>
      {/* <ProductList products={womenProducts} /> */}
    </div>
  );
};

export default Women;
