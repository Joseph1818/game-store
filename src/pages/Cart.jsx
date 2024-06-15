import React from "react";
import "./Cart.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import cartImg from "./images/cart_shopping.png";

const Cart = () => {
  return (
    <div className="main_cart">
      <Navbar />
      <div className="cart_container">
        <p className="cart_title">Shopping Cart</p>
        <div className="cart_parent">
          <div className="cart_child">
            <div className="cart_img_div">
              {" "}
              <img
                className="sales_point--img--card__xbox"
                src={cartImg}
                alt=""
              />
            </div>
            <div className="cart_text_p">
              <p>Your Shopping cart is empty</p>
            </div>
            <div className="cart_button">
              <a href="/home" className="cart_btn">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
