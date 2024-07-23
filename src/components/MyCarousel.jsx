import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./MyCarousel.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const products = [
  {
    id: 1,
    imageurl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6381/6381722_sd.jpg;maxHeight=640;maxWidth=550",
    name: "RED PS4 Controller",
    price: "$79.99",
    onBuyClick: () => alert("Bought Item 1"),
  },
  {
    id: 2,
    imageurl:
      "https://5.imimg.com/data5/SELLER/Default/2023/6/317136830/LY/TG/CK/97262289/xbox-core-wireless-controller-carbon-black-500x500.jpg",
    name: "Xbox Black controller",
    price: "$79.99",
    onBuyClick: () => alert("Bought Item 2"),
  },
  {
    id: 3,
    imageurl:
      "https://m.media-amazon.com/images/I/51LCwQxwLEL._AC_UF1000,1000_QL80_.jpg",
    price: "$99.99",
    onBuyClick: () => alert("Bought Item 3"),
  },
  {
    id: 4,
    imageurl:
      "https://multimedia.bbycastatic.ca/multimedia/products/400x400/175/17553/17553188.jpg",
    name: " The Last of Us remast...",
    price: "$99.99",
    onBuyClick: () => alert("Bought Item 4"),
  },
  {
    id: 5,
    imageurl:
      "https://www.soundandcinema.co.za/wp-content/uploads/2022/09/JBL_BOOMBOX_2_HERO_020_x1.jpg",
    name: "JBL Boombox 2",
    price: "$99.99",
    onBuyClick: () => alert("Bought Item 5"),
  },
  {
    id: 6,
    imageurl:
      "https://cdn.awsli.com.br/600x450/365/365753/produto/2487761517899208571.jpg",
    name: "FC 24 PS5 New ",
    price: "$99.99",
    onBuyClick: () => alert("Bought Item 6"),
  },
  {
    id: 7,
    imageurl:
      "https://media.takealot.com/covers_images/c7edd9effb994fdca78db8cbe3c00fd7/s-pdpxl.file",
    name: "JBL Boombox ",
    price: "$499.99",
    onBuyClick: () => alert("Bought Item 7"),
  },
  {
    id: 8,
    imageurl:
      "https://cdn.awsli.com.br/600x450/365/365753/produto/2487761517899208571.jpg",
    image: "image8.jpg",
    price: "$80",
    onBuyClick: () => alert("Bought Item 8"),
  },
];

function MyCarousel() {
  return (
    <>
      <div className="carouselCard">
        <Carousel breakPoints={breakPoints}>
          {products.map((product) => (
            <Item
              key={product.id}
              image={product.imageurl}
              price={product.price}
              onBuyClick={product.onBuyClick}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default MyCarousel;
