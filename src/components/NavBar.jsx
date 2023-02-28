// Init
import React from 'react';
import Logo from '../assets/NavBar/Logo.svg';

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="all-contents">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="links-div">
          <ul className="links">
            <div className="link-box">
              <li className="link">Home</li>
            </div>
            <li className="link">Why HPH</li>
            <li className="link">Features</li>
            <li className="link">Pricing</li>
            <li className="link">FAQ</li>
            <li className="link">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
