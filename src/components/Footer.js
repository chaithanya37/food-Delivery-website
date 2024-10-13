import React from 'react';
import '../App.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">fooddel</div>
      <div className="footer-content">
        <p>"Explore a diverse range of cuisines and dishes to satisfy every craving."</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="foot-links">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
        <div className="contact">
          <p>7330961794</p>
          <p>fooddel@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
