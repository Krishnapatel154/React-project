import React from 'react';
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';

const Men = ({ products }) => {
  // const menProducts = products.filter(product => product.gender === 'Men');
  return (
    <div>
      <NavBar />
      <h1>men</h1>
      {/* <ProductList products={menProducts} /> */}
    </div>
  );
};

export default Men;
