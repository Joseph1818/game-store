import React from "react";
import "./Product.scss";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2 className="pruduct--name">{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
