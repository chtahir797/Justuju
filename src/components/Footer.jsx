// Footer.jsx
import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <nav className="footer-navbar">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="#">Book Now</a>
      </nav>

      <div className="copyright">
        <p>&copy; {currentYear} Justuju. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
