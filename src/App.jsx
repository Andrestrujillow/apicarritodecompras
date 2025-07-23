import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Narbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/Products';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
