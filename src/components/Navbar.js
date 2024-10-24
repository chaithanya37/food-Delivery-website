import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='nav'>
        <ul>
          <li>
          <Link to="/">HOME</Link>
          </li>
          <li>
          <Link to="/menu">MENU</Link>
          </li>
          <li>
          <Link to="/cart">CART</Link>
          </li>
          <li>
          <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <i className="search-icon"></i>
        <i className="cart-icon"></i>
        <button className="btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
