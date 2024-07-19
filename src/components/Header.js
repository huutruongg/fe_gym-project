import React from 'react';
import { Link } from 'react-router-dom';
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
              <li className="nav-item"><Link to="/home">HOME</Link></li>
              <li className="nav-item"><Link to="/tdee">TDEE</Link></li>
              <li className="nav-item"><Link to="/blogs">BLOGS</Link></li>
              <li className="nav-item"><Link to="/guides">GUIDES</Link></li>
              <li className="nav-item"><Link to="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
