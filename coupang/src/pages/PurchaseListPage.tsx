//PurchaseListPage.tsx

import React from "react";
import styled from "styled-components";

const PurchaseListContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f4f4f4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PurchaseItem = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PurchaseItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 5px;
`;

const PurchaseItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PurchaseItemName = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const PurchaseItemPrice = styled.span`
  color: #e74c3c;
`;

const PurchaseListTitle = styled.h3`
  margin: 0; /* 기본 마진 제거 */
  margin-bottom: 1rem;
`;

const PurchaseListPage: React.FC = () => {
  // 예시 데이터
  const purchaseData = [
    {
      id: 1,
      name: "구매 상품 A",
      price: "10,000원",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "구매 상품 B",
      price: "20,000원",
      image: "https://via.placeholder.com/60",
    },

    {
      id: 3,
      name: "구매 상품 C",
      price: "50,000원",
      image: "https://via.placeholder.com/60",
    },
    // ... 추가 데이터 예정
  ];

  return (
    <PurchaseListContainer>
      <PurchaseListTitle>구매 목록 리스트</PurchaseListTitle>
      {purchaseData.map((item) => (
        <PurchaseItem key={item.id}>
          <PurchaseItemImage src={item.image} alt={item.name} />
          <PurchaseItemInfo>
            <PurchaseItemName>{item.name}</PurchaseItemName>
            <PurchaseItemPrice>{item.price}</PurchaseItemPrice>
          </PurchaseItemInfo>
        </PurchaseItem>
      ))}
    </PurchaseListContainer>
  );
};

export default PurchaseListPage;
