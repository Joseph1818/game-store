import React, { useState } from "react";
import { useRef } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FaBars,
  FaTimes,
  FaAngleDown,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo">
        <h3>Console Kingdom</h3>
      </div>
      <nav ref={navRef}>
        <a href="#">Acceuil</a>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            PS5 <FaAngleDown /> {/* Dropdown icon */}
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Jeux</a>
              <a href="#">Manettes</a>
            </div>
          )}
        </div>
        {/* Add similar dropdown buttons for "Games" and "Latest Release" */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            PS4 <FaAngleDown />
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Jeux</a>
              <a href="#">Manettes</a>
            </div>
          )}
        </div>
        <a href="#">Autres Accesoirs</a>
        <a href="#">À propos de nous</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

      <div className="main-container">
        <div className="dropdown child-container" onClick={toggleDropdown}>
          <i className="gg-user-add user-add-icon"></i>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Se connecter</a>
              <a href="#">S'inscrire</a>
            </div>
          )}
        </div>
        <div className="dropdown child-container" onClick={toggleDropdown}>
          <i class="gg-shopping-cart shopping-cart-icon"></i>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Voir le panier</a>
            </div>
          )}
        </div>
      </div>
      <button className="nav-btn">
        <FaBars onClick={showNavBar} />
      </button>
    </header>
  );
};

export default Navbar;
