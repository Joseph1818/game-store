import React from "react";
import "./home.css";
import img1 from "./images/PS5_5.webp";
import ps4_logo from "./images/PS4_logo.png";
import ps5_logo from "./images/PS5_logo.png";
import JBL_logo from "./images/JBL_logo.png";

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
                  <img src={img1} />
                </div>
              </div>
            </div>
          </section>
          <section className="section__two">
            <div className="sale_points">
              <div className="sale_point">
                <h2>PS4</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="sale_point">
                <h2>PS5</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="sale_point">
                <h2>Other Accesoires</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </section>
        </div>
      }
    </div>
  );
}

export default Home;
