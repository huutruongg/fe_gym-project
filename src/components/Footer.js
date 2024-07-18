import React from 'react';
import '../assets/css/Footer.css';
import logo from '../assets/images/logo.svg';
import logo_name from '../assets/images/logo-name.svg';
import youtube_icon from '../assets/images/youtube.svg'
import discord_icon from '../assets/images/discord.svg'
import instagram_icon from '../assets/images/instagram.svg'


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="logo" />
          <img src={logo_name} alt="Logo Name" className="logo-name" />
        </div>
        <div className='footer-info'>
          <div className="footer-links">
            <div className="link-title">About</div>
            <div className="link-item">Product</div>
            <div className="link-item">Resource</div>
            <div className="link-item">Term & Condition</div>
          </div>
          <div className="footer-contact">
            <div className="link-title">Contact</div>
            <a
              className="link-item"
              href="tel:+012 3456789"
            >
              +012 3456789
            </a>
            <a
              className="link-item"
              href="mailto:ApkLib@gmail.com"
            >
              fitnessclub@gmail.com
            </a>
            <div className="social-links">
              <a className='link-item' href="#">
                <img src={youtube_icon} alt="youtube" />
              </a>
              <a className='link-item' href="#">
                <img src={discord_icon} alt="discord" />
              </a>
              <a className='link-item' href="#">
                <img src={instagram_icon} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;