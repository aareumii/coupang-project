import React, { useState } from 'react';
import {
  Container,
  ProductInfoBox,
  ProductImage,
  ProductName,
  ProductPrice,
  SelectWrapper,
  QuantityCounter,
  ButtonWrapper,
  ProductTextWapper,
  Button
  // 필요한 스타일드 컴포넌트를 모두 import 합니다.
} from './ProductInfo.styled';
import { useDispatch } from 'react-redux';
import bagle from '../../assets/bagle.jpeg';


const ProductInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  
  return (
    <Container>
      <ProductImage src={bagle} alt="Product" />
      <ProductInfoBox>
      <ProductTextWapper>
      <ProductName>제품 이름</ProductName>
      <ProductPrice>₩제품 가격</ProductPrice>
      </ProductTextWapper>

      <SelectWrapper>
        <select>
          <option value="option1">옵션1</option>
          <option value="option2">옵션2</option>
          // 다른 옵션들 추가...
        </select>
      </SelectWrapper>

      <QuantityCounter>
        <button onClick={() => setQuantity(q => q > 0 ? q - 1 : 0)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </QuantityCounter>

      <ButtonWrapper>
      <Button variant="cart" onClick={() => {
        // Redux action으로 장바구니에 제품 정보 추가
      }}>장바구니 담기</Button>

      <Button variant="buy" onClick={() => {
        // Redux action으로 결제 정보에 제품 정보 추가
      }}>바로구매</Button>
      </ButtonWrapper>
    </ProductInfoBox>
    </Container>
  );
}

export default ProductInfo;
