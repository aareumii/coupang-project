import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import bakepang from "../../assets/bakepang.png";

const OrderResult: FC = () => {
  // URL 파라미터에서 success 값을 가져옴
  const urlSearchParams = new URLSearchParams(window.location.search);
  const isSuccess = urlSearchParams.get("success");
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
            <h2>주문완료</h2>
          </TitleWrap>
          <StepWrap>
            <div>
              <span>01</span>
              <p>장바구니</p>
            </div>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <div>
              <span>02</span>
              <p>주문/결제</p>
            </div>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <ResultStep>
              <span>03</span>
              <p>주문완료</p>
            </ResultStep>
          </StepWrap>
        </HeaderWrap>
        <ResultWrap>
          {isSuccess === "true" ? (
            <p className="success">고객님의 상품 주문이 완료되었습니다.</p>
          ) : (
            <p className="failure">고객님의 주문을 완료할 수 없습니다.</p>
          )}
          <ButtonWrap>
            <Link to={"/"}>
              <ContinueButton>홈화면으로</ContinueButton>
            </Link>
          </ButtonWrap>
        </ResultWrap>
      </Container>
    </Wrap>
  );
};

export default OrderResult;

const Wrap = styled.div`
  width: calc(100vw-(100vw - 100%));
  height: 100%;
  min-height: 650px;
  padding: 10px 0;
  margin: 0 auto;
  background-color: #f2f2f2;
  @media screen and (max-width: 768px) {
    padding: 0;
    background-color: transparent;
    overflow-x: hidden;
  }
`;

const Logo = styled.div`
  width: calc(72vw + 80px);
  margin: 0 auto;
  padding: 20px 0 10px;
  img {
    width: 140px;
    margin-left: 20px;
  }
  @media screen and (max-width: 1024px) {
    width: calc(80vw + 80px);
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
const Container = styled.div`
  width: 72vw;
  border: 1px solid #e0e0e0;
  margin: 0 auto 70px;
  padding: 40px 39px;
  background: #fff;
  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
  @media screen and (max-width: 768px) {
    width: 87vw;
    border: none;
    border-top: 1px solid #e0e0e0;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  padding: 20px 0 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #2f2f2f;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  color: #2f2f2f;
  font-size: 1.6rem;
  font-weight: 500;
  font-weight: bold;
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

const ResultStep = styled.div`
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

const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 0;
  font-size: 1.5rem;
  font-weight: 700;
  .success {
    color: #4b4b4b;
  }
  .failure {
    color: #ff0000;
  }
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
