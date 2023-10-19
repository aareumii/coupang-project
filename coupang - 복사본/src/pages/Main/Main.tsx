import React from "react";
import Header from "../../components/Header/Header";
import ItemList from "../../components/Header/ItemList";
import Category from "../../components/Header/Category";
import SearchBar from "../../components/Header/SearchBar";
import Pagination from "../../components/Header/Pagination";
import styled from "styled-components";
import coupang from "../../assets/headerImg/Bakepang.png";
import MyCoupang from "../../components/Header/MyCoupang";
import Cart from "../../components/Header/Cart";

const main = () => {
  const navigate = useNavigate();
  const linktoMain = () => {
    navigate("/");
  };
  return (
    <StMain>
      <Header />
      <header className="header">
        <Category />
        <img className="logo" src={coupang} onClick={linktoMain} />
        <SearchBar />
        <MyCoupang />
        <Cart />
      </header>
      <main>
        <ItemList />
        <Pagination />
      </main>
    </StMain>
  );
};

export default main;

const StMain = styled.div`
  position: relative;
  .header {
    width: 72vw;
    margin: auto;
    display: flex;
    /* gap: 50px; */
    align-items: center;
  }
  .logo {
    padding: 15px 15px;
    width: 170px;
    height: 40px;
    cursor: pointer;
  }
`;
