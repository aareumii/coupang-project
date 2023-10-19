import styled from "styled-components";

interface ButtonProps {
  type?: "white" | "blue";
}

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
  /* letter-spacing: -2px;
  .cart-icon {
    font-size: 1.85rem;
    color: #656565;
    margin-right: 5px;
  } */
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

const CurrentStep = styled.div`
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

const EmptyCartWrap = styled.div`
  width: 100%;
  min-height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  text-align: center;
  margin-bottom: 30px;
  background-color: #f4f6fa;
  p {
    font-size: 1.125rem;
    font-weight: 700;
    color: #55575f;
  }
`;

const ShoppingButton = styled.button`
  font-size: 1.25rem;
  font-weight: 700;
  display: inline-block;
  margin: 30px auto 0;
  width: 200px;
  line-height: 18px;
  border: 2px solid #0073e9;
  border-radius: 4px;
  padding: 15px 0;
  text-align: center;
  background-color: #0073e9;
  color: #fff;
  cursor: pointer;
`;

const TableWrap = styled.div`
  background: #fafafa;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* padding: 80px 0 20px; */
`;

// const ContinueButton = styled.button`
//   font-size: 1.375rem;
//   font-weight: 700;
//   display: inline-block;
//   margin: 10px;
//   width: 216px;
//   line-height: 18px;
//   border: 2px solid #0073e9;
//   border-radius: 4px;
//   padding: 22px 0 19px;
//   text-align: center;
//   background-color: #fff;
//   color: #0073e9;
//   cursor: pointer;
// `;

// const BuyButton = styled.button`
//   font-size: 1.375rem;
//   font-weight: 700;
//   display: inline-block;
//   margin: 10px;
//   width: 216px;
//   line-height: 18px;
//   border: 2px solid #0073e9;
//   border-radius: 4px;
//   padding: 22px 0 19px;
//   text-align: center;
//   background-color: #0073e9;
//   color: #fff;
//   cursor: pointer;
// `;

const Button = styled.button<ButtonProps>`
  font-size: 1.375rem;
  font-weight: 700;
  display: inline-block;
  width: 216px;
  line-height: 18px;
  border: 2px solid #0073e9;
  border-radius: 4px;
  padding: 22px 0 19px;
  text-align: center;
  cursor: pointer;

  background-color: ${(props) => (props.type === "white" ? "#fff" : "#0073e9")};
  color: ${(props) => (props.type === "white" ? "#0073e9" : "#fff")};
`;
