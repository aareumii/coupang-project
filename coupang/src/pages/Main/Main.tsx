import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ItemList from "../../components/MainHome/ItemList";
import Category from "../../components/Header/Category";
// import SearchBar from "../../components/Header/SearchBar";
import Pagination from "../../components/Header/Pagination";
import coupang from "../../assets/headerImg/베이크팡.png";
import MyCoupang from "../../components/Header/MyCoupang";
import Cart from "../../components/Header/Cart";
import ItemCategory from "../../components/MainHome/ItemCategory";
import ItemFilter from "../../components/MainHome/ItemFilter";
import Banner from "../../components/MainHome/Banner";
import axios from "axios";
import { StMain } from "./stMain";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/item";
import { GET_PRODUCT_API } from "../../api/Products";

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  // const getProducts = () => {
  //   axios
  //     .get(GET_PRODUCT_API)
  //     .then((response) => {
  //       console.log(response.data);
  //       setProducts(response.data.product.slice(0, 20));
  //     })
  //     .catch((error) => {
  //       // Error 핸들링
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    axios
      .get(`${GET_PRODUCT_API}`)
      .then((response) => {
        console.log("통신결과:", response);
        setProducts(response.data.product);
        console.log(response.data.product);
      })
      .catch((error) => {
        // Error 핸들링
        console.log(error);
      });
  }, []);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let keyword = e.currentTarget.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const searched = products.filter((item: { name: string }) =>
    item.name.includes(userInput)
  );
  const linktoMain = () => {
    navigate("/");
  };

  return (
    <StMain>
      <Header />
      <header className="header">
        <Category />
        <img className="logo" src={coupang} onClick={linktoMain} />
        <SearchBox>
          <div className="form">
            <input
              className="input"
              placeholder="찾고 싶은 상품을 검색해보세요!"
              onChange={getValue}
              onKeyDown={handleKeyDown}
            />
            <FaSearch className="search__icon" />
          </div>
        </SearchBox>

        <MyCoupang />
        <Cart />
      </header>
      <Banner />

      <main className="main">
        <ItemCategory />
        <ItemFilter />
        <ItemListWrap>
          {searched.map((item: any) => (
            <ItemList {...item} />
          ))}
        </ItemListWrap>

        <Pagination />
      </main>
      <footer></footer>
    </StMain>
  );
};

export default Main;

const SearchBox = styled.div`
  position: relative;

  width: 640px;
  height: 30px;
  margin: 0 5px;

  border: 0.1rem solid #4285f4;
  .input {
    width: 90%;
    height: 90%;
    border: none;
    display: block;

    &:focus {
      outline: none;
    }
  }
  .search__icon {
    color: #4285f4;
    height: 100%;
  }
  .form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
const ItemListWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  height: 330px;
`;
