import React from "react";
import Navbar from "../components/navbar";
import "./ps5Game.scss";
import Carousel from "react-multi-carousel";

function Ps5Game() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="main__ps5">
      <Navbar />
      <div className="ps5__container">
        <p className="ps5__title"> PS5 Game</p>
        <div className="ps5__parent">
          <Carousel responsive={responsive}></Carousel>
        </div>
      </div>
    </div>
  );
}

export default Ps5Game;
