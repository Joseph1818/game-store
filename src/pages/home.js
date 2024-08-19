import React from "react";
import "./home.css";
import img1 from "./images/PS5_5.webp";
import ps4_logo from "./images/PS4_logo.png";
import ps5_logo from "./images/PS5_logo.png";
import JBL_logo from "./images/JBL_logo.png";
import Xbox_lgo from "./images/Xbox_logo.webp";
import PS4_console from "./images/PS4_img.png";
import PS5_console from "./images/PS5_img1.png";
import XBOX_console from "./images/XBOX_1_IMG.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../components/Product";
import { productData, responsive } from "../components/data";
import Footer from "../components/footer";


function Home() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div>
      {
        <div className="main">
          <section className="section__one">
            <div className="hero">
              <div className="wrapper row">
                <div className="intro-content">
                  <h1 className="hero-title">Special Offer on our PS5</h1>
                  <p className="">
                    Take advantage of our exceptional sales! Don't miss this
                    unique opportunity to benefit from incredible discounts on a
                    wide selection of products.
                  </p>
                  <a href="" className="btn">
                    Buy Now !
                  </a>
                </div>
                <div className="hero__img">
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="carousel__wrapper">
                <Carousel showDots={true} responsive={responsive}>
                  {product}
                </Carousel>
              </div>
            </div>
          </section>
          <section className="section__two">
            <div className="sale_points">
              <div className="sale_point">
                <img className="sales_point--img" src={ps4_logo} alt="" />
                <div className="sales_point--cards">
                  <div className="sales-point--cards--child">
                    <img
                      className="sales_point--img--card"
                      src={PS4_console}
                      alt=""
                    />
                    <h2> $ 400</h2>
                    <p className="sales_point--p">model: PS4 pro </p>
                    <p className="sales_point--p">capacity: 1T </p>
                    <a href="" className="btn sales_point__btn">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
              <div className="sale_point">
                <img className="sales_point--img" src={ps5_logo} alt="" />
                <div className="sales_point--cards">
                  <div className="sales-point--cards--child">
                    <img
                      className="sales_point--img--card__ps5"
                      src={PS5_console}
                      alt=""
                    />
                    <h2> $ 550</h2>
                    <p className="sales_point--p">modèle: PS5 normal </p>
                    <p className="sales_point--p">capacité: 1T </p>
                    <a href="" className="btn sales_point__btn">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
              <div className="sale_point">
                <img className="sales_point--img" src={Xbox_lgo} alt="" />
                <div className="sales_point--cards">
                  <div className="sales-point--cards--child">
                    <img
                      className="sales_point--img--card__xbox"
                      src={XBOX_console}
                      alt=""
                    />
                    <h2> $ 400</h2>
                    <p className="sales_point--p">model: xbox one S </p>
                    <p className="sales_point--p">capacity: 1T </p>
                    <a href="" className="btn sales_point__btn">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      }
    </div>
  );
}

export default Home;
