import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Launches from './pages/Launches';
import Sale from './pages/Sale';
import Brands from './pages/Brands';
import Header from './components/Header';
import Footer from './components/Footer';
const Allroutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men"element={<Men/>} />
        <Route path="/women"element={<Women/>} />
        <Route path="/launches"element={<Launches/>} />
        <Route path="/sale"element={<Sale/>} />
        <Route path="/brands"element={<Brands/>} />
    </Routes>
    </div>
  )
}

export default Allroutes

