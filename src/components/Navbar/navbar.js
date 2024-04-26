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
} from "react-icons/fa"; // Importing FaAngleDown for dropdown icon

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
        <a href="#">Home</a>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Consoles <FaAngleDown /> {/* Dropdown icon */}
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">PS5</a>
              <a href="#">Xbox 1</a>
              <a href="#">PS4</a>
              <a href="#">Nintendo Switch</a>
            </div>
          )}
        </div>
        {/* Add similar dropdown buttons for "Games" and "Latest Release" */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Games <FaAngleDown />
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Action</a>
              <a href="#">Adventure</a>
              <a href="#">Racing</a>
            </div>
          )}
        </div>
        <a href="#">Latest Release</a>
        <a href="#">Reviews</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

      <div className="main-container">
        <div className="dropdown child-container" onClick={toggleDropdown}>
          <i className="gg-user-add user-add-icon"></i>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">SignUp</a>
              <a href="#">Login</a>
            </div>
          )}
        </div>
        <div className="dropdown child-container" onClick={toggleDropdown}>
          <i class="gg-shopping-cart shopping-cart-icon"></i>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">View cart</a>
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
