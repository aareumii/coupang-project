import React, { useState, useEffect } from 'react';
import {
  Container,
  ProductInfoBox,
  ProductImage,
  ProductName,
  ProductPrice,
  SelectWrapper,
  QuantityCounter,
  ButtonWrapper,
  ProductTextWapper
} from './ProductInfo.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/productSlice';
import { getProductInfo } from '../../api/productApi';
import AddToCartButton from './AddToCartButton';
import AddToOrderButton from './AddToOrderButton';


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


  useEffect(() => {
    getProductInfo(1)
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error("Failed to fetch product info: ", error);
      });
  }, []);

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

      <SelectWrapper>
        <select>
          <option value="option1">상품선택</option>
          <option value="option2">상품선택2</option>
          // 다른 옵션들 추가...
        </select>
      </SelectWrapper>

      <QuantityCounter>
        <button onClick={() => setQuantity(q => q > 0 ? q - 1 : 0)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </QuantityCounter>

      <ButtonWrapper>
      <AddToCartButton onClick={() => {
            console.log("Current price:", totalPrice); // 현재의 price 상태 값을 출력

        // console.log("Button clicked!"); 
        if (product) {
            // console.log("Before dispatching the action");
            
            const action = addToCart({
                // img: product.img,
                productName: product.productName,
                amount: quantity,
                price: totalPrice,
                id: 1
            });

            // 액션 객체 출력
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
