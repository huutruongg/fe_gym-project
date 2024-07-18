import React from 'react';
import '../assets/css/Header.css';
import logo from '../assets/images/logo.svg';
import logo_name from '../assets/images/logo-name.svg';

const Header = () => {
  return (
    <header className="header">
      <div className='container'>
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
          <img src={logo_name} alt="Logo Name" className="logo-name" />
        </div>
        <div className='header-right'>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item"><a href="/home">HOME</a></li>
              <li className="nav-item"><a href="/tdee">TDEE</a></li>
              <li className="nav-item"><a href="/blogs">BLOGS</a></li>
              <li className="nav-item"><a href="/guides">VIDEO</a></li>
              <li className="nav-item"><a href="/contact">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
