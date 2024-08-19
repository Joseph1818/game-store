import React from "react";
import "./ps5Game.scss";
import Carousel from "react-multi-carousel";
import Product from "../components/Product";
import { responsive } from "../components/data";
import { ProductPs4Controller } from "../components/data";

function Ps4Controller() {

  const product = ProductPs4Controller.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div>
      <div className="ps5__container">
        <h2 className="game_heading"> PS4 Controller</h2>
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

export default Ps4Controller;
