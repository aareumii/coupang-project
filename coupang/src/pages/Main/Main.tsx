import React from "react";
import Header from "../../components/Header/Header";
import ItemList from "../../components/MainHome/ItemList";
import Category from "../../components/Header/Category";
import SearchBar from "../../components/Header/SearchBar";
import Pagination from "../../components/Header/Pagination";
import styled from "styled-components";
import coupang from "../../assets/headerImg/베이크팡.png";
import MyCoupang from "../../components/Header/MyCoupang";
import Cart from "../../components/Header/Cart";
import ItemCategory from "../../components/MainHome/ItemCategory";
import ItemFilter from "../../components/MainHome/ItemFilter";
import Banner from "../../components/MainHome/Banner";

const main = () => {
  return (
    <StMain>
      <Header />
      <header className="header">
        <Category />
        <img className="logo" src={coupang} />
        <SearchBar />
        <MyCoupang />
        <Cart />
      </header>
      <Banner />

      <main className="main">
        <ItemCategory />
        <ItemFilter />
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
    padding-top: 25px;
    z-index: 20;
    position: relative;
    margin-bottom: 30px;
  }
  .logo {
    padding-left: 100px;

    width: 150px;
    height: 40px;
    cursor: pointer;
  }
  .main {
    width: 60vw;
    margin: auto;
    padding-top: 40px;
    padding-left: 160px;
  }
`;
