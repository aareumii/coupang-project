import styled from "styled-components";
import 평점 from "../../assets/mainImg/평점.png";
import 로켓 from "../../assets/mainImg/로켓배송.png";

interface propsType {
  id: number;
  name: string;
  price: number | string;

  categoryName: string;
  registerDate: string;
  img1: string;
}

const ItemList = (props: propsType) => {
  // const [product, setProduct] = useState<Product[]>([]);
  // const [loading, setLoading] = useState(true); // 로딩중인지 아닌지를 담기위한 state

  // const getProducts = () => {
  //   setLoading(true);

  //   const backendUrl =
  //     "https://beddadd9-0132-40eb-89ec-91621065a7c6.mock.pstmn.io/products";

  //   axios
  //     .get(backendUrl)
  //     .then((response) => {
  //       console.log(response.data);
  //       setProduct(response.data.product.slice(0, 20));
  //     })
  //     .catch((error) => {
  //       // Error 핸들링
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <ItemCardWrap key={props.name}>
        <ItemCard key={props.categoryName}>
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
    </>
  );
};

export default ItemList;

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
  @media screen and (max-width: 768px) {
    font-size: 0.1rem;
  }
  padding: 0 10px;
  .itme__contents {
    padding-left: 10%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  span {
    margin: 10px 10px;
  }
  .item__img {
    text-align: center;
    img {
      margin-top: 10px;
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
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }

  .item__name {
    font-size: 0.8rem;
    @media screen and (max-width: 768px) {
      font-size: 0.1rem;
    }
  }
  .item__price {
    font-size: 1rem;
    margin: 5px 0px;
    color: #a90000;
    font-weight: bold;
    @media screen and (max-width: 1024px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
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
  .png__rocket {
    padding-right: 35%;
    width: 60px;
    @media screen and (max-width: 1024px) {
      padding-right: 10%;
    }
    @media screen and (max-width: 768px) {
      padding-right: 10%;
      width: 40px;
    }
  }
  .item__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
