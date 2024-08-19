import React, { useState, useRef } from "react";
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
  const [dropdownsOpen, setDropdownsOpen] = useState({
    ps5: false,
    ps4: false,
    user: false,
    cart: false,
  });

  const toggleDropdown = (name) => {
    setDropdownsOpen((prev) => {
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === name ? !prev[name] : false;
        return acc;
      }, {});
      return newState;
    });
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
        <a href="/home">Home</a>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("ps5")}>
            PS5 <FaAngleDown />
          </button>
          {dropdownsOpen.ps5 && (
            <div className="dropdown-content">
              <a href="/ps5Game">Game</a>
              <a href="/ps5Controller">Controller</a>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("ps4")}>
            PS4 <FaAngleDown />
          </button>
          {dropdownsOpen.ps4 && (
            <div className="dropdown-content">
              <a href="/ps4Game">Game</a>
              <a href="/ps4Controller">Controller</a>
            </div>
          )}
        </div>
        <a href="/about">About us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

      <div className="main-container">
        <div
          className="dropdown child-container"
          onClick={() => toggleDropdown("user")}
        >
          <i className="gg-user-add user-add-icon"></i>
          {dropdownsOpen.user && (
            <div className="dropdown-content">
              <a href="/login">Login</a>
            </div>
          )}
        </div>
        <div
          className="dropdown child-container"
          onClick={() => toggleDropdown("cart")}
        >
          <i className="gg-shopping-cart shopping-cart-icon"></i>
          {dropdownsOpen.cart && (
            <div className="dropdown-content">
              <a href="/cart">See Cart</a>
            </div>
          )}
        </div>
      </div>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
