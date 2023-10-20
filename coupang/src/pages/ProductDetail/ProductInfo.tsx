import React, { useState, useEffect } from "react";
import {
  Container,
  ProductInfoBox,
  ProductImage,
  ProductName,
  ProductPrice,
  QuantityCounter,
  ButtonWrapper,
  ProductTextWapper,
} from "./ProductInfo.styled";
import { useDispatch } from "react-redux";
import { Product, addToCart } from "../../redux/slice/productSlice";
import AddToCartButton from "./AddToCartButton";
import AddToOrderButton from "./AddToOrderButton";
import { fetchProductDetails } from "../../api/getProductApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postAddToCart } from "../../api/postProductAPI";

type ProductType = {
  id: number;
  img: string;
  productName: string;
  amount: number;
  price: number;
};

const ProductInfo: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { productName } = useParams<{ productName: string }>();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = productName
          ? await fetchProductDetails(productName)
          : null;

        if (data) {
          // data의 유효성 검사 추가합니다.
          setProduct({
            id: data.id,
            img: data.img1,
            productName: data.name,
            amount: data.stockQuantity,
            price: data.price,
          });
        } else {
          console.error("Received data is null or undefined");
        }
      } catch (error) {
        console.error(
          "Error fetching product details from the component:",
          error
        );
      }
    };

    getProductDetails();
  }, [productName]);

  useEffect(() => {
    if (product) {
      // 제품 정보가 설정되었을 때 전체 가격 초기화
      setTotalPrice(product.price * quantity);
    }
  }, [product, quantity]);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (product) {
      setTotalPrice(product.price * newQuantity);
    }
  };

  // const handleAddToCartClick = async () => {
  //   if (!product) return;

  //   try {
  //     const addedProduct: Product = {
  //       id: product.id,
  //       productName: product.productName,
  //       price: product.price,
  //       amount: quantity,
  //       cartItems: [] // 이 필드에 대한 추가 정보가 필요합니다.
  //     };

  //     dispatch(addToCart(addedProduct));

  //     console.log('장바구니에 제품 추가:', addedProduct);
  //   } catch (error) {
  //     console.error('장바구니에 추가하는 도중 오류 발생:', error);
  //   }
  // };

  const handleAddToCartClick = async () => {
    if (!product) return;

    try {
      // API 호출하여 장바구니에 제품을 추가합니다.
      const response = await postAddToCart(product, quantity);

      // Redux dispatch를 통해 상태를 업데이트합니다.
      const addedProduct: Product = {
        id: product.id,
        productName: product.productName,
        price: product.price,
        amount: quantity,
        cartItems: [], // 이 필드에 대한 추가 정보가 필요합니다.
      };

      dispatch(addToCart(addedProduct));

      console.log("장바구니에 제품 추가:", addedProduct);
    } catch (error) {
      console.error("장바구니에 추가하는 도중 오류 발생:", error);
    }
  };

  return (
    <Container>
      {product?.img ? <ProductImage src={product.img} alt="Product" /> : null}
      <ProductInfoBox>
        <ProductTextWapper>
          <ProductName>{product?.productName}</ProductName>
          <ProductPrice>{totalPrice}원</ProductPrice>
        </ProductTextWapper>

        <QuantityCounter>
          <button onClick={() => setQuantity((q) => (q > 0 ? q - 1 : 0))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </QuantityCounter>

        <ButtonWrapper>
          <AddToCartButton onClick={handleAddToCartClick} />
          <AddToOrderButton onClick={handleAddToCartClick} />
        </ButtonWrapper>
      </ProductInfoBox>
    </Container>
  );
};
export default ProductInfo;
