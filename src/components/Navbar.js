import React from 'react';
import '../App.css';
import logo from '../images/logo.jpeg';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ logo } alt="logo"/>
      </div>
      <ul className="nav-links">
        <li>HOME</li>
        <li>MENU</li>
        <li>CART</li>
        <li>CONTACT US</li>
      </ul>
      <div className="nav-icons">
        <i className="search-icon"></i>
        <i className="cart-icon"></i>
        <button className="btn">sign in</button>
      </div>
    </nav>
  );
}
export default Navbar;
