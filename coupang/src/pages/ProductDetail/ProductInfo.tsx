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
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AxiosError } from 'axios';
import { setDirectOrder } from '../../redux/slice/cartSlice';


type ProductType = {
  img: string;
  productName: string;
  amount: number;
  price: number;
}

const ProductInfo: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { productName } = useParams<{ productName: string }>();
  // const productName = "smartphone22";

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = productName ? await fetchProductDetails(productName) : null;
        
        if (data) { // data의 유효성 검사 추가합니다.
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

  const handleAddToCartClick = async () => {
    if (!product) return;  // 제품이 없는 경우 무시
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('사용자가 로그인하지 않았습니다.');
        // 사용자가 로그인하지 않았을 때의 처리 (예: 로그인 페이지로 이동)
        return;
      }
  
      const response = await addToCart({
        productId: product.productName,
        quantity: quantity
      });
  
      console.log('장바구니 추가 응답:', response);
  
    } catch (error) {
      console.error('장바구니에 추가하는 도중 오류 발생:', error);
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
        <button onClick={() => setQuantity(q => q > 0 ? q - 1 : 0)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </QuantityCounter>

      <ButtonWrapper>
      <AddToCartButton onClick={handleAddToCartClick} />
      <AddToOrderButton onClick={handleAddToCartClick}/>
      </ButtonWrapper>
    </ProductInfoBox>
    </Container>
  );
}
export default ProductInfo;
