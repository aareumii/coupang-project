import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ItemList from "../../components/MainHome/ItemList";
import Category from "../../components/Header/Category";
import Pagination from "../../components/Header/Pagination";
import coupang from "../../assets/headerImg/베이크팡.png";
import MyCoupang from "../../components/Header/MyCoupang";
import Cart from "../../components/Header/Cart";
import ItemCategory from "../../components/MainHome/ItemCategory";
import Banner from "../../components/MainHome/Banner";
import axios from "axios";
import { StMain } from "./stMain";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/item";
import { GET_PRODUCT_API } from "../../api/Products";
import { StFilter } from "../../styles/ItemFilterStyle";
import { StSearchBox } from "../../styles/searchStyle";

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState();
  const [callbackSearch, setcallbackSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${GET_PRODUCT_API}`)
      .then((response) => {
        console.log("통신결과:", response);
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Error 핸들링
        console.log(error);
      });
  }, []);

  //검색값 셋팅
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

  return (
    <StMain>
      <Header />
      <header className="header">
        <Category />
        <a href="/">
          <img className="logo" src={coupang} />
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
      <Banner />

      <main className="main">
        <ItemCategory />
        <StFilter>
          <div className="filter">
            <button
              className="bar"
              value="lowPrice"
              onClick={(e: any) => {
                setSort(e.target.value);
              }}
            >
              낮은가격순
            </button>
            <button
              className="bar"
              value="highPrice"
              onClick={(e: any) => {
                setSort(e.target.value);
              }}
            >
              높은가격순
            </button>
            <button
              className="bar"
              value="new"
              onClick={(e: any) => {
                setSort(e.target.value);
              }}
            >
              최신순
            </button>
            <button
              value="click"
              onClick={(e: any) => {
                setSort(e.target.value);
              }}
            >
              조회수순
            </button>
          </div>
        </StFilter>
        <ItemListWrap>
          <ItemList sort={sort} products={products} search={callbackSearch} />
        </ItemListWrap>

        <Pagination />
      </main>
      <footer></footer>
    </StMain>
  );
};

export default Main;

const ItemListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
