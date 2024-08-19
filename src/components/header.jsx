import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaUserPlus, FaShoppingCart, FaBars } from "react-icons/fa";
import { useRef, useState } from "react";

const Header = () => {
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

  const hideNavBarOnLinkClick = () => {
    if (window.innerWidth <= 768) {
      showNavBar();
    }
  };

  return (
    <header>
      <div className="logo">
        <h3>Console Kingdom</h3>
      </div>
      <nav ref={navRef}>
        <Link to="/" onClick={hideNavBarOnLinkClick}>
          Home
        </Link>
        <Link to="/Ps5" onClick={hideNavBarOnLinkClick}>
          PS5
        </Link>
        <Link to="/Ps4" onClick={hideNavBarOnLinkClick}>
          PS4
        </Link>
        <Link to="/About" onClick={hideNavBarOnLinkClick}>
          About
        </Link>
      </nav>
      <div className="main-container">
        <div className="child-container">
          <Link
            to="/Login"
            className="user-add-icon"
            onClick={hideNavBarOnLinkClick}
          >
            <FaUserPlus />
          </Link>
        </div>
        <div className="child-container">
          <Link
            to="/cart"
            className="shopping-cart-icon"
            onClick={hideNavBarOnLinkClick}
          >
            <FaShoppingCart />
          </Link>
        </div>
      </div>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
