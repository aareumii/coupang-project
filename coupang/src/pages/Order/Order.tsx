import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  resetOrder,
  deleteSelected,
  resetSelectedItems,
  deleteOrderedItems,
} from "../../redux/slice/cartSlice";
import { RootState } from "../../redux/store/store";
import { MdArrowForwardIos } from "react-icons/md";
import bakepang from "../../assets/bakepang.png";
import BuyerInfo from "./BuyerInfo";
import ShipInfo from "./ShipInfo";
import OrderList from "./OrderList";
import Payment from "./Payment";
import { CartItemType } from "../../types/cart";
import { UserType } from "../../types/user";
import { postOrder } from "../../api/order"; //getUserData 추가
import Footer from "../../components/footer/Footer";

const Order: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserType | null>(null);
  const directOrderItem = useSelector((state: RootState) => state.cart.order);
  const [selectedItems, setSelectedItems] = useState<CartItemType[]>([]);
  const [totalOrderAmount, setTotalOrderAmount] = useState<number>(0);
  const [hasOrdered, setHasOrdered] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://3c2167fb-e55d-4327-8405-a650c719e040.mock.pstmn.io/user/profile"
      )
      .then((res) => {
        const data = res.data;
        setUserData(data);
      })
      .catch((error) => {
        console.error("사용자 정보 가져오는 중 오류발생", error);
      });
  }, []);

  // useEffect(() => {
  //   getUserData()
  //     .then((res) => {
  //       // const data = res.data;
  //       console.log(res);
  //       setUserData(res);
  //     })
  //     .catch((error) => {
  //       console.error("사용자 정보를 불러오던 중 오류 발생", error);
  //     });
  // }, []);

  useEffect(() => {
    if (directOrderItem.length > 0) {
      setSelectedItems(directOrderItem);
      const totalAmount = directOrderItem.reduce(
        (acc, item) => acc + item.amount * item.productPrice,
        0
      );
      setTotalOrderAmount(totalAmount);
    } else {
      const savedOrderItem = sessionStorage.getItem("directOrderItem");
      const savedSelectedItems = sessionStorage.getItem("selectedItems");
      const savedTotalOrderAmount = sessionStorage.getItem("totalOrderAmount");

      if (savedOrderItem) {
        const parsedOrderItem: CartItemType = JSON.parse(savedOrderItem);
        setSelectedItems([parsedOrderItem]);
        const totalAmount =
          parsedOrderItem.amount * parsedOrderItem.productPrice;
        setTotalOrderAmount(totalAmount);
      } else if (savedSelectedItems) {
        const parsedItems: CartItemType[] = JSON.parse(savedSelectedItems);
        setSelectedItems(parsedItems);
        if (savedTotalOrderAmount) {
          const parsedTotalOrderAmount = JSON.parse(savedTotalOrderAmount);
          setTotalOrderAmount(parsedTotalOrderAmount);
        }
      }
    }
  }, [directOrderItem]);

  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userData) {
      console.error("사용자 데이터가 없습니다.");
      return;
    }
    console.log("Ordering the following items:", selectedItems);
    postOrder(selectedItems.map((item) => item.cartProductId))
      .then((res) => {
        console.log(res, "주문 성공");
        dispatch(resetOrder());
        dispatch(deleteOrderedItems(selectedItems));
        navigate("/order/result?success=true");
      })
      .catch((error) => {
        console.error("주문 중 오류 발생", error);
        navigate("/order/result?success=false");
      });
    setHasOrdered(true);
    sessionStorage.clear();
  };

  useEffect(() => {
    return () => {
      if (!hasOrdered) {
        sessionStorage.removeItem("directOrderItem");
      }
    };
  }, [hasOrdered]);

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
            <h2>주문/결제</h2>
          </TitleWrap>
          <StepWrap>
            <div>
              <span>01</span>
              <p>장바구니</p>
            </div>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <OrderStep>
              <span>02</span>
              <p>주문/결제</p>
            </OrderStep>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <div>
              <span>03</span>
              <p>주문완료</p>
            </div>
          </StepWrap>
        </HeaderWrap>
        <Form onSubmit={handlePayment}>
          {userData && (
            <ContentsWrap>
              <BuyerInfo userData={userData} />
              <ShipInfo userData={userData} />
              <OrderList selectedItems={selectedItems} />
              <Payment
                userData={userData}
                selectedItems={selectedItems}
                totalOrderAmount={totalOrderAmount}
              />
            </ContentsWrap>
          )}
          <AgreeBox>
            <input type="checkbox" required />
            <span>
              위 주문 내용을 확인하였으며, 회원 본인은 개인정보 이용 및
              제공(해외직구의 경우 국외제공) 및 결제에 동의합니다.
            </span>
          </AgreeBox>
          <ButtonWrap>
            <PaymentButton type="submit">결제하기</PaymentButton>
          </ButtonWrap>
        </Form>
      </Container>
    </Wrap>
  );
};

export default Order;

const Wrap = styled.div`
  width: calc(100vw-(100vw - 100%));
  height: 100%;
  padding: 10px 0;
  margin: 0 auto;
  background-color: #f2f2f2;
  @media screen and (max-width: 768px) {
    padding: 0;
    background-color: transparent;
  }
`;

const Logo = styled.div`
  width: calc(72vw + 80px);
  margin: 0 auto;
  padding: 20px 0 10px;
  img {
    width: 140px;
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

const OrderStep = styled.div`
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

const Form = styled.form`
  width: 100%;
`;

const ContentsWrap = styled.div``;

const AgreeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  span {
    font-size: 0.875rem;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PaymentButton = styled.button`
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
