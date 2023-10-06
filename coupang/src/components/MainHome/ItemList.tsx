import React, { useEffect, useState } from "react";
import styled from "styled-components";
import 식빵 from "../../assets/mainImg/식빵.jpg";
// import axios from "axios";

interface Products {
  id: string;
  name: string;
  url: string;
  price: number;
}

const ItemList = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://beddadd9-0132-40eb-89ec-91621065a7c6.mock.pstmn.io/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  };

  return (
    <ItemListWrap>
      {products.map((products) => {
        return (
          <ItemCardWrap>
            <ItemCard key={products.id}>
              <div className="item__img">
                <img src={products.url} />
              </div>
              <div className="itme__contents">
                <a href="#" className="item__name">
                  {products.name}
                </a>
                <span className="item__price">{products.price}원</span>
              </div>
            </ItemCard>
          </ItemCardWrap>
        );
      })}
    </ItemListWrap>
  );
};

export default ItemList;

const ItemListWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 20px;
  width: 100%;
  height: 330px;

  .item__img {
    text-align: center;
    img {
      margin-top: 10px;
      width: 180px;
      height: 180px;
    }
  }
`;

const ItemCardWrap = styled.div`
  margin-top: 30px;
  width: 25%;
  height: 100%;

  border-bottom: 1px solid #f0f0f0;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const ItemCard = styled.div`
  padding: 0 10px;
  .itme__contents {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  span {
    margin: 10px 10px;
  }

  a {
    text-decoration: none;
    outline: none;
  }
  .item__name {
    padding: 0 10px;
    font-size: small;
  }
  .item__price {
  }
`;
