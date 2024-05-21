import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      {
        <div className="container">
          <div className="intro-content">
            <div className="promo__parrent">
              <div className="grid">
                <div className="col">
                  <h1 className="hero-title">Special 0ffre sur nos PS5</h1>
                  <p className="hero-text">
                    Profitez de nos soldes exceptionnelles ! Ne manquez pas
                    cette opportunité unique de bénéficier de réductions
                    incroyables sur une large sélection de produits.
                  </p>
                  <a href="" className="btn">
                    Acheter maintenant !{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Home;
