import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import bakepang from "../../assets/headerImg/Bakepang.png";
import CartItem from "./CartItem";
import { CartItemType } from "../../types/types"

const Cartpage: FC = () => {
  const cartItems: CartItemType[] = [];

  return (
    <Wrap>
      <Logo>
        <Link to={"/"}>
          <img src={bakepang} alt="로고" />
        </Link>
      </Logo>
      <Container>
        <HeaderWrap>
          <TitleWrap>
            <TiShoppingCart className="cart-icon" />
            <h2>장바구니</h2>
          </TitleWrap>
          <StepWrap>
            <CartStep>
              <span>01</span>
              <p>장바구니</p>
            </CartStep>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <div>
              <span>02</span>
              <p>주문/결제</p>
            </div>
          </StepWrap>
        </HeaderWrap>
        <TableWrap>
          <CartAmount>
            {/* 장바구니에 담긴 총 상품 개수 = api로 받아온 배열의 legnth */}
            {/* <p>장바구니 상품 &#40; {cartItems.length} &#41;</p> */}
            <p>장바구니에 담긴 상품 &#40; {cartItems.length} &#41;</p> 
          </CartAmount>
          <CartItemTable>
            <colgroup>
              <col width="1%" />
              <col width="10%" />
              <col width="55%" />
              <col width="10%" />
              <col width="4%" />
              <col width="10%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={2} className="allcheck-input">
                  <input type="checkbox" className="allcheck" />
                  <span>전체선택</span>
                </th>
                <th colSpan={3}>상품정보</th>
                <th>상품금액</th>
                <th>배송비</th>
              </tr>
            </thead>
            <tbody>
              {/* 장바구니 api 받아와서 map으로 보여주기 */}
              {cartItems.map((item: CartItemType) => (
               <CartItem
                key={item.productId}
                data={item}
              />
              ))}
            </tbody>
          </CartItemTable>
        </TableWrap>
        <SelectWrap>
          <input type="checkbox" className="allcheck" />
          <p>전체선택</p>
          <button>선택삭제</button>
        </SelectWrap>
        <PriceWrap>
          <TotalPriceWrap>
            <p>총 상품가격</p>
            <Price>0</Price>
            <p>원</p>
          </TotalPriceWrap>
          <CalculateSign>+</CalculateSign>
          <TotalShippingPriceWrap>
            <p>총 배송비</p>
            <Price>0</Price>
            <p>원</p>
          </TotalShippingPriceWrap>
          <CalculateSign>=</CalculateSign>
          <TotalSumPriceWrap>
            <p>총 주문금액</p>
            <SumPrice>0</SumPrice>
            <p>원</p>
          </TotalSumPriceWrap>
        </PriceWrap>
        <ButtonWrap>
          <Link to={"/"}>
            <ContinueButton>계속 쇼핑하기</ContinueButton>
          </Link>
          <Link to={"/order"}>
            <BuyButton>구매하기</BuyButton>
          </Link>
        </ButtonWrap>
      </Container>
    </Wrap>
  );
};

export default Cartpage;

const Wrap = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 0 auto;
  background-color: #f2f2f2;
`;

const Logo = styled.div`
  width: calc(72vw + 80px);
  margin: 0 auto;
  padding: 20px 0 10px;
  img {
    width: 140px;
  }
`;
const Container = styled.div`
  width: 72vw;
  border: 1px solid #e0e0e0;
  margin: 0 auto 70px;
  padding: 40px 39px;
  background: #fff;
`;

const HeaderWrap = styled.div`
  width: 100%;
  padding: 20px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  color: #2f2f2f;
  font-size: 1.6rem;
  font-weight: 500;
  font-weight: bold;
  letter-spacing: -2px;
  .cart-icon {
    font-size: 1.85rem;
    color: #656565;
    margin-right: 5px;
  }
`;

const StepWrap = styled.div`
  display: flex;
  color: #d4d4d4;
  span {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 2px;
  }
  p {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const CartStep = styled.div`
  span {
    font-size: 1rem;
    color: #299fe0;
    font-weight: bold;
  }
  p {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: bold;
    color: #000;
  }
`;

const TableWrap = styled.div`
  background: #fafafa;
`;

const CartAmount = styled.div`
  width: 100%;
  background-color: #eaeaea;
  padding: 30px 0;
  margin-bottom: 10px;
  text-align: center;
  p {
    font-weight: 700;
    font-size: 1rem;
    color: #55575f;
  }
`;

const CartItemTable = styled.table`
  width: 100%;
  text-align: center;
  thead {
    height: 40px;
    line-height: 40px;
    font-size: 0.875rem;
    color: #111111;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    .allcheck-input {
      text-align: left;
      padding-left: 10px;
      input {
        margin-right: 10px;
      }
    }
  }
  tbody {
    background-color: #fff;
    tr {
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
      td {
        vertical-align: middle;
        padding: 10px;
        img {
          width: 75px;
          height: 75px;
          padding: 5px;
          text-align: center;
          vertical-align: center;
        }
      }
    }
  }
`;

const SelectWrap = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  margin-top: 20px;
  p {
    margin-left: 10px;
    font-size: 0.8125rem;
    cursor: pointer;
  }
  button {
    display: inline-block;
    margin-left: 10px;
    padding: 4px 5px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 0.75rem;
    color: #111;
    font-weight: 500;
    background-color: #fff;
    cursor: pointer;
  }
`;

const PriceWrap = styled.div`
  width: 100%;
  margin: 30px 0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #c8c8c8;
  text-align: center;
`;

const TotalPriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  p {
    font-size: 0.875rem;
    line-height: 17px;
    color: #555;
    text-align: center;
  }
`;

const CalculateSign = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #666;
`;

const Price = styled.div`
  padding: 0 4px 0 5px;
  font: 700 17px/17px tahoma;
  color: #111;
`;

const TotalShippingPriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  p {
    font-size: 0.875rem;
    line-height: 17px;
    color: #555;
    text-align: center;
  }
`;
const TotalSumPriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  p {
    font-size: 0.875rem;
    line-height: 17px;
    color: #555;
    text-align: center;
  }
`;

const SumPrice = styled.div`
  padding: 0 4px 0 5px;
  font: 700 20px/20px tahoma;
  color: #ea0000;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 80px 0 20px;
`;

const ContinueButton = styled.button`
  font-size: 1.375rem;
  font-weight: 700;
  display: inline-block;
  margin: 10px;
  width: 216px;
  line-height: 18px;
  border: 2px solid #0073e9;
  border-radius: 4px;
  padding: 22px 0 19px;
  text-align: center;
  background-color: #fff;
  color: #0073e9;
  cursor: pointer;
`;

const BuyButton = styled.button`
  font-size: 1.375rem;
  font-weight: 700;
  display: inline-block;
  margin: 10px;
  width: 216px;
  line-height: 18px;
  border: 2px solid #0073e9;
  border-radius: 4px;
  padding: 22px 0 19px;
  text-align: center;
  background-color: #0073e9;
  color: #fff;
  cursor: pointer;
`;