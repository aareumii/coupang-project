import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 2rem;
`;

export const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ProductImage = styled.img`
  width: 410px;
  height: 410px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const ProductTextWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 1px solid #DFDFDF; 
  margin-bottom: 1rem;
  width: 100%;
`;

export const ProductName = styled.h2`
  margin-bottom: 10px;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  `;

  export const SelectWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%; 

  select {
    width: 100%; // select의 너비를 100%로 설정
    padding: 0.5rem;
  }
`;

export const QuantityCounter = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #83929A;

  & > button {
    padding: 5px 10px;
    background-color: #ffffff;
    border: 1px solid #EBEBEB;
  }

  & > span {
    padding: 0 10px;
    background-color: #ffffff;
    border: 1px solid #EBEBEB;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

type ButtonProps = {
  variant?: 'cart' | 'buy';
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 30px;
  border: 1px solid #346AFF;
  color: ${props => props.variant === 'cart' ? '#346AFF' : '#fff'};
  background-color: ${props => props.variant === 'cart' ? '#fff' : '#346AFF'};
  &:hover {
        background-color: ${props => {
      if (props.variant === 'cart') {
        return 'rgba(0, 0, 0, 0.1)';
      }
      return 'rgba(52, 106, 255, 0.9)';
    }};
  }
`;
