import React, { useState, useEffect } from 'react';
import {
  Container,
  ProductInfoBox,
  ProductImage,
  ProductName,
  ProductPrice,
  QuantityCounter,
  ButtonWrapper,
  ProductTextWapper
} from './ProductInfo.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/productSlice';
import AddToCartButton from './AddToCartButton';
import AddToOrderButton from './AddToOrderButton';
import { fetchProductDetails } from '../../api/getProductApi'; 
import { updateCartProduct } from '../../api/getProductApi';
import { useParams } from 'react-router-dom';


type ProductType = {
  img: string;
  productName: string;
  amount: number;
  price: number;
}

const ProductInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // const { productName } = useParams<{ productName: string }>();
  const productName = "smartphone22";

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = productName ? await fetchProductDetails(productName) : null;
        
        if (data) { // 여기서 data의 유효성 검사를 추가합니다.
            setProduct({
              img: data.img1,
              productName: data.name,
              amount: data.stockQuantity,
              price: data.price
            });
        } else {
            console.error("Received data is null or undefined");
        }

      } catch (error) {
        console.error("Error fetching product details from the component:", error);
      }
    }
    
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
  }

  return (
    <Container>
    {product?.img ? <ProductImage src={product.img} alt="Product" /> : null}
      <ProductInfoBox>
      <ProductTextWapper>
      <ProductName>{product?.productName}</ProductName>
      <ProductPrice>{totalPrice}원</ProductPrice>
      </ProductTextWapper>

      <QuantityCounter>
        <button onClick={() => setQuantity(q => q > 0 ? q - 1 : 0)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </QuantityCounter>

      <ButtonWrapper>
      <AddToCartButton onClick={async () => {
    console.log("Current price:", totalPrice);

    if (product) {
        const userId = 1; // 여기서 사용자 ID를 가져옵니다.
        const cartProductId = 1; // 장바구니 제품 ID를 설정합니다.

        // PUT 메소드로 수량과 가격 업데이트
        await updateCartProduct(userId, cartProductId, quantity);

        const action = addToCart({
            productName: product.productName,
            amount: quantity,
            price: totalPrice,
            id: 1
        });

        console.log(action);
        dispatch(action);
    }
}} />
      <AddToOrderButton onClick={() => {
        // Redux action으로 장바구니에 제품 정보 추가
    }} />
      </ButtonWrapper>
    </ProductInfoBox>
    </Container>
  );
}

export default ProductInfo;
