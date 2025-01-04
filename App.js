// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Import the CartProvider
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Selection from './components/Selection';
import ContactUs from './components/ContactUs';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const App = () => (
  <CartProvider>  {/* Wrap your app with CartProvider */}
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
