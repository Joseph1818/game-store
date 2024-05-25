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

function Home() {
  return (
    <div>
      {
        <div className="main">
          <section className="section__one">
            <div className="hero">
              <div className="wrapper row">
                <div className="intro-content">
                  <h1 className="hero-title">Special 0ffre sur nos PS5</h1>
                  <p className="">
                    Profitez de nos soldes exceptionnelles ! Ne manquez pas
                    cette opportunité unique de bénéficier de réductions
                    incroyables sur une large sélection de produits.
                  </p>
                  <a href="" className="btn">
                    Acheter maintenant !
                  </a>
                </div>
                <div className="hero__img">
                  <img src={img1} alt="" />
                </div>
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
                    <p className="sales_point--p">Modele: PS4 pro </p>
                    <p className="sales_point--p">Capacite: 1T </p>
                    <a href="" className="btn sales_point__btn">
                      Acheter
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
                    <p className="sales_point--p">Modele: PS5 normal </p>
                    <p className="sales_point--p">Capacite: 1T </p>
                    <a href="" className="btn sales_point__btn">
                      Acheter
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
                    <p className="sales_point--p">Modele: xbox one S </p>
                    <p className="sales_point--p">Capacite: 1T </p>
                    <a href="" className="btn sales_point__btn">
                      Acheter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      }
    </div>
  );
}

export default Home;
