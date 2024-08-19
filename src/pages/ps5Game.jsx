import React from "react";
import Navbar from "../components/navbar";
import "./ps5Game.scss";
import Carousel from "react-multi-carousel";
import Product from "../components/Product";
import { responsive } from "../components/data";
import { ProductDataPs5 } from "../components/data";

function Ps5Game() {
  const product = ProductDataPs5.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="main__ps5">
      <div className="ps5__container">
        <h2 className="game_heading"> PS5 Game</h2>
        <div className="ps5__parent">
          <div className="carousel__wrapper__game">
            <Carousel showDots={true} responsive={responsive}>
              {product}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ps5Game;
