import React from "react";
import Slider from "react-slick";
import Item from "./item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyCarousel.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const products = [
  {
    id: 1,
    imageurl:
      "https://5.imimg.com/data5/SELLER/Default/2023/6/317136830/LY/TG/CK/97262289/xbox-core-wireless-controller-carbon-black-500x500.jpg",
    name: "Xbox Black controller",
    description: "Xbox Controller",
    price: "R1199.99",
    onBuyClick: () => alert("Bought Item 2"),
  },
  {
    id: 2,
    imageurl:
      "https://m.media-amazon.com/images/I/51LCwQxwLEL._AC_UF1000,1000_QL80_.jpg",
    description: "PS5 headset",
    price: "R1999.99",
    onBuyClick: () => alert("Bought Item 3"),
  },
  {
    id: 3,
    imageurl:
      "https://multimedia.bbycastatic.ca/multimedia/products/400x400/175/17553/17553188.jpg",
    name: " The Last of Us remast...",
    description: "The Last of Us PS4",
    price: "R1699.99",
    onBuyClick: () => alert("Bought Item 4"),
  },
  {
    id: 4,
    imageurl:
      "https://www.soundandcinema.co.za/wp-content/uploads/2022/09/JBL_BOOMBOX_2_HERO_020_x1.jpg",
    name: "JBL Boombox 2",
    description: "JBL Bombox 2",
    price: "R3999.99",
    onBuyClick: () => alert("Bought Item 5"),
  },
  {
    id: 5,
    imageurl:
      "https://media.takealot.com/covers_tsins/35537449/5026555284080-1-pdpxl.jpg",
    name: "GTA 5 Xbox One",
    description: "GTA 5 Xbox One",
    price: "R999.99",
    onBuyClick: () => alert("Bought Item 6"),
  },
  {
    id: 6,
    imageurl:
      "https://media.takealot.com/covers_images/c7edd9effb994fdca78db8cbe3c00fd7/s-pdpxl.file",
    name: "JBL Boombox",
    description: "JBL Camo",
    price: "R4999.99",
    onBuyClick: () => alert("Bought Item 7"),
  },
  {
    id: 7,
    imageurl:
      "https://cdn.awsli.com.br/600x450/365/365753/produto/2487761517899208571.jpg",
    image: "image8.jpg",
    description: "FC 24 PS5",
    price: "R899",
    onBuyClick: () => alert("Bought Item 8"),
  },
];

function MyCarousel() {
  return (
    <div className="carouselCard">
      <Slider {...settings}>
        {products.map((product) => (
          <Item
            key={product.id}
            image={product.imageurl}
            description={product.description}
            price={product.price}
            onBuyClick={product.onBuyClick}
          />
        ))}
      </Slider>
    </div>
  );
}

export default MyCarousel;
