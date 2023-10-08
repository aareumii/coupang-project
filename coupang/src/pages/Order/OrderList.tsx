import React, { FC } from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";

const OrderList: FC = () => {
  return (
    <Wrap>
      {/* cart에서 선택된 상품들 length로 배송 건수 나타내기 */}
      <Title>배송 2건</Title>
      <Table>
        <tbody>
          {/* OrderItem으로 cart에서 선택된 상품들 map을 통해 list로 보여주기 */}
          <OrderItem />
          <OrderItem />
        </tbody>
      </Table>
    </Wrap>
  );
};

export default OrderList;

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #373b3f;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid #e5e5e5;
  tr {
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }
  th {
    width: 120px;
    font-weight: bold;
    text-align: right;
    padding: 14px 10px;
    border-right: 1px solid #ebebeb;
    background-color: #f4f4f4;
  }
  td {
    text-align: left;
    padding: 14px 10px;
  }
`;
