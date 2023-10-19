import React, { useEffect, useState } from "react";
import styled from "styled-components";
import coupang from "../../assets/headerImg/베이크팡.png";
import { StCategory } from "./stCategory";
import Header from "../../components/header/Header";
import Category from "../../components/header/Category";
import { FaSearch } from "react-icons/fa";
import MyCoupang from "../../components/header/MyCoupang";
import Cart from "../../components/header/Cart";
import { useNavigate } from "react-router-dom"; // useNavigate로 수정
import ItemList from "../../components/main/ItemList";
import { GET_PRODUCT_API } from "../../api/Products";
import axios from "axios";
import { Product } from "../../types/item";
import CateItem from "../../components/category/CateItem";
import { StFilter } from "../../styles/ItemFilter.styled";
import { StSearchBox } from "../../styles/Search.Styled";
import Footer from "../../components/footer/Footer";

const Jam = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();
  const linktoMain = () => {
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`${GET_PRODUCT_API}`)
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        // Error 핸들링
        console.log(error);
      });
  }, []);

  const category = products.filter(
    (item: { category: { categoryId: number } }) =>
      item.category.categoryId === 1
  );

  return (
    <StCategory>
      <Header />
      <header className="header">
        <Category />
        <img className="logo" src={coupang} onClick={linktoMain} />
        <StSearchBox>
          <div className="form">
            <input
              className="input"
              placeholder="찾고 싶은 상품을 검색해보세요!"
            />
            <FaSearch className="search__icon" />
          </div>
        </StSearchBox>

        <MyCoupang />
        <Cart />
      </header>
      <GrayBar>
        <p>베이크팡 홈 {`>`} 잼·버터·스프레드 </p>
      </GrayBar>
      <main>
        <div className="cate__title">잼·버터·스프레드</div>
        <StFilter>
          <div className="filter">
            <button className="bar" value="lowPrice">
              낮은가격순
            </button>
            <button className="bar" value="highPrice">
              높은가격순
            </button>
            <button className="bar" value="new">
              최신순
            </button>
            <button value="click">조회수순</button>
          </div>
        </StFilter>
        <ItemListWrap>
          {category.map((item: any) => (
            <CateItem {...item} />
          ))}
        </ItemListWrap>
      </main>
      <footer>
        <Footer />
      </footer>
    </StCategory>
  );
};

export default Jam;

const GrayBar = styled.div`
  width: 100vw;
  /* margin: auto; */
  height: 2rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  border-top: 0.5px solid #d7d7d7;
  border-bottom: 0.5px solid #d7d7d7;
  p {
    width: 60vw;
    margin: auto;
    font-size: 0.8rem;
    @media screen and (max-width: 768px) {
      width: 80vw;
      font-size: 0.6rem;
    }
  }
`;
const ItemListWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  height: 350px;
`;
