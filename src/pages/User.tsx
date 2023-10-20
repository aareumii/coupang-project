import React from "react";
<<<<<<< HEAD
import Header from "../components/header/Header";
import Category from "../components/header/Category";
import { StSearchBox } from "../styles/Search.Styled";
import { FaSearch } from "react-icons/fa";
import MyCoupang from "../components/header/MyCoupang";
import Cart from "../components/header/Cart";
import bakepang from "../assets/headerImg/Bakepang.png";
import { useState } from "react";
import styled from "styled-components";

import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import PaymentManagement from "./PaymentManagement";
import SalesListPage from "./SalesListPage";
import PurchaseListPage from "./PurchaseListPage";
import CartPage from "./CartPage";
import NotFound from "./NotFound";
import Login from "../pages/LoginPage/LogIn";
import LogoutButton from "../pages/LoginPage/LogoutButton";

import { Outlet } from "react-router-dom";

=======
import Header from "../components/haed/TopNav";
import Category from "../components/haed/Category";
import { StSearchBox } from "../styles/Search.Styled";
import { FaSearch } from "react-icons/fa";
import MyCoupang from "../components/haed/MyCoupang";
import Cart from "../components/haed/Cart";
import bakepang from "../assets/headerImg/Bakepang.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
const User = () => {
  // const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("");
  const [callbackSearch, setcallbackSearch] = useState("");
<<<<<<< HEAD
  const [showSalesList, setShowSalesList] = useState(false);
  const [showCart, setShowCart] = useState(false);
=======
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
  const navigate = useNavigate();
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  //검색 내용 입력 후 엔터키 눌렀을때
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let keyword = e.currentTarget.value;
      navigate(`/?q=${keyword}`);
      setcallbackSearch(search);
    }
  };

<<<<<<< HEAD
  const handleLoginClick = () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      // 토큰이 있으면 이미 로그인된 상태
      alert("로그인 상태입니다.");
    } else {
      console.log("사용자가 로그인되지 않았습니다.");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    console.log("로그아웃 되었습니다.");
  };

  const toggleSalesList = () => {
    setShowSalesList(!showSalesList);
    setShowCart(false); // 판매목록을 표시할 때 장바구니 목록 숨기기
  };

  const toggleCart = () => {
    setShowCart(!showCart);
    setShowSalesList(false); // 장바구니 목록을 표시할 때 판매목록 숨기기
  };

=======
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
  return (
    <Container>
      <Header />
      <header className="header">
        <Category />
        <a href="/">
          <img className="logo" src={bakepang} alt="베이크팡" />
        </a>

        <StSearchBox>
          <div className="form">
            <input
              className="input"
              placeholder="찾고 싶은 상품을 검색해보세요!"
              onChange={getValue}
              onKeyDown={handleKeyDown}
            />
            <FaSearch className="search__icon" />
          </div>
        </StSearchBox>

        <MyCoupang />
        <Cart />
      </header>
      <Menu>
        <LeftMenu>
          <MyMenuTitle>
            <div>
              <span>MY쿠팡</span>
            </div>
          </MyMenuTitle>
          <MyMenu>
            <h2>쿠팡메뉴</h2>
            <nav>
              <div>
                <p>My 쇼핑</p>
<<<<<<< HEAD

                <span onClick={toggleCart}>장바구니 목록</span>
                <span onClick={toggleSalesList}>판매목록</span>
                {/* <span>
                  <StyledLink to="cartlist">장바구니 목록</StyledLink>
                </span>
                <span>
                  <StyledLink to="saleslist">판매목록</StyledLink>
                </span> */}
                <span>
                  <StyledLink to="orderlist">구매목록</StyledLink>
                </span>
              </div>
              <div>
                <p>My 정보</p>
                <span>
                  <StyledLink to="userinfo">개인정보확인</StyledLink>
                </span>
                <span>
                  <StyledLink to="bakepay">결제수단·페이관리</StyledLink>
                </span>
              </div>
              <ButtonWrap>
                <button onClick={handleLoginClick}>로그인</button>
=======
                <span>판매목록</span>
                <span>구매목록</span>
              </div>
              <div>
                <p>My 정보</p>
                <span>판매목록</span>
                <span>구매목록</span>
              </div>
              <ButtonWrap>
                <button>로그인</button>
                <button>로그아웃</button>
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
              </ButtonWrap>
            </nav>
          </MyMenu>
        </LeftMenu>
        <RightMenu>
          <ul>
            <li>
              <p>미사용티켓</p>
              <div>
<<<<<<< HEAD
                <span className="large-number">0</span>장
=======
                <span>0장</span>
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
              </div>
            </li>
            <li>
              <p>배송중</p>
              <div>
<<<<<<< HEAD
                <span className="large-number">0</span>개
=======
                <span>0개</span>
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
              </div>
            </li>
            <li>
              <p>할인쿠폰</p>
              <div>
<<<<<<< HEAD
                <span className="large-number">0</span>장
=======
                <span>0장</span>
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
              </div>
            </li>
            <li>
              <p>쿠페이 머니</p>
              <div>
<<<<<<< HEAD
                <span className="large-number">0</span>원
              </div>
            </li>
          </ul>
          {showSalesList && <SalesListPage />}
          {showCart && <CartPage />}
        </RightMenu>
      </Menu>
      <Content>
        <Routes>
          <Route path="userinfo" element={<UserInfo />} />
          <Route path="bakepay" element={<PaymentManagement />} />
          <Route path="orderlist" element={<PurchaseListPage />} />
          {/* <Route path="saleslist" element={<SalesListPage />} />
          <Route path="cartlist" element={<CartPage />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      {/* <Content>
        <Routes>
          <Route path="/user/*" element={<Outlet />}>
            <Route path="userinfo" element={<UserInfo />} />
            <Route path="bakepay" element={<PaymentManagement />} />
            <Route path="orderlist" element={<PurchaseListPage />} />
            <Route path="saleslist" element={<SalesListPage />} />
            <Route path="cartlist" element={<CartPage />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Content> */}
=======
                <span>쿠팡 캐시</span>
              </div>
            </li>
          </ul>
        </RightMenu>
      </Menu>
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
    </Container>
  );
};

export default User;

const Container = styled.div`
  position: relative;
  width: 75vw;

  margin: 0 auto;
  /* overflow-x: hidden;
  overflow-y: hidden; */

  .header {
    width: 75vw;
    margin: auto;
    display: flex;
    /* gap: 50px; */
    align-items: center;
    justify-content: center;
    /* padding-top: 25px; */
    z-index: 20;
    position: relative;
    margin-bottom: 20px;
    /* margin-bottom: 30px; */
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }
  .logo {
    margin-left: 20px;
    padding-right: 10px;
    width: 170px;
    height: 50px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 60px;
      height: 30px;
      margin-left: 5px;
      padding-right: 2px;
    }
  }
`;

<<<<<<< HEAD
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: blue;
  }
  &.active {
    color: blue;
  }
`;

const Content = styled.main`
  //   grid-row: 3 / 4;
  //   grid-column: 2 / 2;
  background-color: #fff;
  padding: 1rem;
  //   margin-top: 6rem;
  margin-left: 1rem;
  text-align: left;
  width: 100%;
  flex-grow: 1;
  display: flex;
`;

=======
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
const LeftMenu = styled.div`
  width: 15%;
`;

const MyMenuTitle = styled.div`
  height: 122px;
  padding: 1px;
  background: rgb(40, 109, 180);
  text-align: center;
  box-sizing: border-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  div {
    box-sizing: border-box;
    span {
      width: 95px;
      height: 30px;
      color: rgb(255, 255, 255);
      text-indent: inherit;
      text-align: center;
      font-size: 32px;
      font-weight: 400;
      letter-spacing: -2px;
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
`;

const MyMenu = styled.div`
  background-color: rgb(249, 249, 249);
  border-width: 0px 1px 1px;
  border-style: solid;
  border-color: rgb(225, 228, 230);
  border-image: initial;
  color: rgb(17, 17, 17);
  padding: 10px 0px;
  margin-bottom: 10px;
  h2 {
    overflow: hidden;
    height: 1px;
    width: 1px;
    position: absolute;
    text-indent: -9999px;
    text-align: left;
  }
  nav {
    margin-top: 10px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #ddd;
      width: 80%;
      margin: 0 auto;
      &:last-child {
        border-bottom: none;
      }
      p {
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
        color: rgb(17, 17, 17);
        margin: 20px 0;
      }
      span {
        display: block;
        font-size: 13px;
        line-height: 16px;
        margin: 10px 0;
        &:last-child {
          margin-bottom: 20px;
        }
      }
    }
  }
`;

const ButtonWrap = styled.div`
  padding: 20px 0;
  button {
    width: 100px;
    border: none;
    font-size: 15px;
    line-height: 16px;
    padding: 10px;
    margin: 5px 0;
    cursor: pointer;
  }
`;

const RightMenu = styled.div`
  height: auto;
  margin-bottom: 40px;
  width: 85%;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(130, 188, 226);
    color: rgb(255, 255, 255);

    height: 122px;
    font-weight: 100;
    font-style: normal;
    box-sizing: border-box;
    font-family: robotoThinNumber, roboto, "Courier New", Tahoma, NanumGothic,
      MalgunGothic, 돋움, dotum, sans-serif;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      min-width: 20%;
      height: 120px;
      padding: 30px 0 10px 20px;

      border-right: 2px solid #fff;

      box-sizing: border-box;
      &:last-child {
        border-right: none;
      }
      p {
        display: block;
        margin-bottom: 13px;
        height: 21px;
        color: rgb(255, 255, 255);
        font-size: 15px;
        font-weight: bold;
        text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px;
        font-family: AppleSDGothicNeo;
      }
      div {
        span {
          color: rgb(255, 255, 255);
          font-size: 30px;
          line-height: 60px;
          cursor: pointer;
        }
      }
    }
  }
`;
