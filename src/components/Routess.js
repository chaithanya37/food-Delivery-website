import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Menu from './menu';
import Cart from './Cart';
import ContactForm from './ContactForm';
import SignIn from './SignIn';

const Routess = () => {
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

  // Pass cartItems length to Navbar through a prop
  React.useEffect(() => {
    const navbar = document.querySelector('nav'); // Adjust selector as needed
    if (navbar) {
      navbar.setAttribute('data-cart-count', cartItems.length);
    }
  }, [cartItems.length]);

  return (
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
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default Routess;