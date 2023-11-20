import React, { useState } from 'react';
import { FiMenu, FiSearch, FiLogIn } from 'react-icons/fi'; 
import {  FaRegArrowAltCircleRight } from 'react-icons/fa';
import logo from './images/1686f70156-removebg-preview.png'
import './Navbar.css'
const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="navbar">
      <div className="flex-side">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-container" onClick={toggleSubMenu}>
          <FiMenu size={24} />
          {showSubMenu && (
            <div className="submenu">
             <div>chatgpt 3.5</div>
              <div>chatgpt4.0</div>
              <div>AI & ML</div>
              <div>UPDATES</div>
              <div>news</div>
              <div>upcomming</div>
              <div>news</div>
              <div>technaloy</div>
              <div>products</div>
              <div>gpt store</div>
            </div>
          )}
        </div>
      </div>

      <div className="center-flex">
      <div className="text-menu"> REASEARCH</div>
        <div className="text-menu">API</div>
        <div className="text-menu">CHATGPT</div>
        <div className="text-menu"> SAFETY</div>
        <div className="text-menu"> COMPANY</div>
      </div>

      <div className="flex-side">
        <div className="search">
          <FiSearch size={24} />
        </div>
        
        <div className="login">
        <FiLogIn size={24} />
        </div>
        <div className="border-button">
          <span>CHATGPT </span>
          <FaRegArrowAltCircleRight id="erroo" size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
