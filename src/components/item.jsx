import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80%;
  background-color: #f0f0f0;
  color: #000;
  margin: 0 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin-bottom: 15px;
`;
const Description = styled.div`
  font-size: 1em;
  margin-bottom: 15px;
`;
const Price = styled.div`
  font-size: 1em;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #00008b;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #000064;
  }
`;

const Item = ({ image, description, price, onBuyClick }) => {
  return (
    <StyledItem>
      <Image src={image} alt="Product" />
      <Description>{description}</Description>
      <Price>{price}</Price>
      <Button onClick={onBuyClick}>Buy</Button>
    </StyledItem>
  );
};

export default Item;
