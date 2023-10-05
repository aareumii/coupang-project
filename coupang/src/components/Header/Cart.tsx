import React from "react";
import cart from "../../assets/headerImg/cart.svg";
import styled from "styled-components";

const Cart = () => {
  return (
    <IconWrapper>
      <img src={cart} />
      <p>장바구니</p>
    </IconWrapper>
  );
};

export default Cart;

const IconWrapper = styled.div`
  cursor: pointer;
  margin-left: 10px;
  img {
    width: 50px;
    height: 30px;
    padding-bottom: 5px;
  }
  p {
    font-size: 0.6rem;
    text-align: center;
  }
`;
