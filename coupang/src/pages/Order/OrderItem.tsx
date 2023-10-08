import React, { FC } from "react";
import styled from "styled-components";

const OrderItem: FC = () => {
  return (
    <TR>
      <td>웰치 제로 샤인머스켓, 24개, 355ml</td>
      <td>수량 5개 / 무료배송</td>
    </TR>
  );
};

export default OrderItem;

const TR = styled.tr`
  width: 100%;
  td:first-child {
    width: 80%;
    font-size: 1rem;
    text-align: left;
    padding: 14px 0 0 14px;
  }
  td:last-child {
    width: 20%;
    font-size: 0.875rem;
    color: #929292;
    text-align: center;
    padding: 14px 0;
  }
`;
