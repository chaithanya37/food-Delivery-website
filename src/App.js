import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Menu from './components/menu';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.name === item.name);
      if (existingItem) {
        return prevItems.map(i =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (item) => {
    setCartItems(prevItems =>
      prevItems.filter(i => i.name !== item.name)
    );
  };

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(item);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(i =>
        i.name === item.name
          ? { ...i, quantity: newQuantity }
          : i
      )
    );
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/menu" 
          element={<Menu addToCart={addToCart} />} 
        />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          } 
        />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;