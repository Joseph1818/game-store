import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"; // Assuming your CSS is stored here
import { FaUserPlus } from "react-icons/fa"; // User add icon
import { FaShoppingCart } from "react-icons/fa"; // Shopping cart icon

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Console Kingdom</h3>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Ps5">PS5</Link>
        <Link to="/Ps4">PS4</Link>
        <Link to="/About">About</Link>
        <div className="main-container">
          <div className="child-container">
            <Link to="/Login" className="user-add-icon">
              <FaUserPlus />
            </Link>
          </div>
          <div className="child-container">
            <Link to="/cart" className="shopping-cart-icon">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
      <button className="nav-btn">☰</button>
    </header>
  );
};

export default Header;
