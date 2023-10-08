import React, { FC } from "react";
import styled from "styled-components";

const BuyerInfo: FC = () => {
  return (
    <Wrap>
      <Title>구매자정보</Title>
      <Table>
        <tbody>
          <tr>
            <th>이름</th>
            <td>홍길동</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>aaa@naver.com</td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>010-1234-5678</td>
          </tr>
        </tbody>
      </Table>
    </Wrap>
  );
};

export default BuyerInfo;

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
  border-top: 2px solid #cecece;
  font-size: 0.875rem;
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
