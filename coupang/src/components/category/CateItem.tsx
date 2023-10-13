import React from "react";
import styled from "styled-components";
import 평점 from "../../assets/mainImg/평점.png";
import 로켓 from "../../assets/mainImg/로켓배송.png";

interface propsType {
  id: number;
  name: string;
  price: number | string;
  stockQuantity: number;
  categoryId: number;
  categoryName: string;
  registerDate: string;
  img1: string;
  img2: string;
  img3: string;
}

const CateItem = (props: propsType) => {
  return (
    <div>
      <ItemCardWrap key={props.id}>
        <ItemCard key={props.categoryId}>
          <div className="item__img">
            <img src={props.img1} />
          </div>
          <div className="itme__contents">
            <a href="#" className="item__name">
              {props.name}
            </a>
            <div className="item__flex">
              <span className="item__price">{props.price}원</span>
              <img src={로켓} className="png__rocket" />
            </div>
            <p>무료배송</p>
            <div className="star">
              <img src={평점} className="star__png" />
              (999+)
            </div>
          </div>
        </ItemCard>
      </ItemCardWrap>
    </div>
  );
};

export default CateItem;

const ItemCardWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;

  border-bottom: 1px solid #f0f0f0;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const ItemCard = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 0.1rem;
  }
  padding: 0 10px;
  .itme__contents {
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  a:visited,
  a:active {
    color: #000;
  }
  span {
    margin: 10px 10px;
  }
  .item__img {
    text-align: center;
    img {
      margin-top: 20px;
      width: 80%;
      height: 200px;
      @media screen and (max-width: 1024px) {
        height: 150px;
      }
      @media screen and (max-width: 768px) {
        height: 70px;
      }
    }
  }

  p {
    font-size: 0.8rem;

    color: green;
  }

  .item__name {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.1rem;
    }
  }
  .item__price {
    font-size: 1.2rem;
    margin: 10px 0px;

    font-weight: bold;
  }
  .png__star {
    width: 70px;
    padding-top: 3px;
  }
  .png__rocket {
    padding-right: 47%;
  }
  .item__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .star {
    display: flex;
    align-items: center;
    font-size: 0.6rem;
    color: grey;
  }
  .star__png {
    width: 70px;
    padding-top: 2px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      width: 40px;
    }
  }
`;
