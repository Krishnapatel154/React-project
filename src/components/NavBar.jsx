import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/launches">Launches</Link></li>
        <li><Link to="/sale">Sale</Link></li>
        <li><Link to="/brands">Brands</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
