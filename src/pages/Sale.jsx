import React from 'react';
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';

const Sale = ({ products }) => {
  // const saleProducts = products.filter(product => product.onSale);
  return (
    <div>
      <NavBar />
      <h1>sale</h1>
      {/* <ProductList products={saleProducts} /> */}
    </div>
  );
};

export default Sale;
