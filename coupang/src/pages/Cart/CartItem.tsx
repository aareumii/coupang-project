import React, { FC } from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import itemImg from "../../assets/itemImg.jpg";

const CartItem: FC = () => {
  return (
    <>
      <tr>
        <td rowSpan={2}>
          <input type="checkbox" />
        </td>
        <td rowSpan={2}>
          <img src={itemImg} alt="임시 이미지" />
        </td>
        <ProductInfo colSpan={3}>상품명, 설명</ProductInfo>
        <PriceInfo rowSpan={2}>14,000</PriceInfo>
        <PriceInfo rowSpan={2}>무료</PriceInfo>
      </tr>
      <tr>
        <ProductInfo>상품가격</ProductInfo>
        <td>
          <AmountBox>
            <button>
              <MdKeyboardArrowUp />
            </button>
            <p>4</p>
            <button>
              <MdKeyboardArrowDown />
            </button>
          </AmountBox>
        </td>
        <td>
          <DeleteButton>X</DeleteButton>
        </td>
      </tr>
    </>
  );
};

export default CartItem;

const ProductInfo = styled.td`
  text-align: left;
  font-size: 0.875rem;
`;

const PriceInfo = styled.td`
  text-align: center;
  font-size: 0.875rem;
`;

const AmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #767676;
  font-size: 1rem;
  &:hover {
    button {
      opacity: 1;
    }
  }
  button {
    font-size: 1.25rem;
    border: none;
    background-color: transparent;
    transform: translateY(2px);
    padding: 0;
    cursor: pointer;
    opacity: 0;
  }
`;

const DeleteButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 1px solid #a6a6a6;
  font-size: 1rem;
  color: #a6a6a6;
  cursor: pointer;
`;