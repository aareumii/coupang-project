import React, { useState, useEffect } from "react";
import RegisterForm from "./RegisterForm";
import { StyledInventoryList } from "./InventoryList.styles";

function InventoryList() {
  const [items, setItems] = useState([]); 

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://beddadd9-0132-40eb-89ec-91621065a7c6.mock.pstmn.io/products"
      );
      if (!response.ok) {
        throw new Error("데이터를 불러오는 중 문제가 발생했습니다.");
      }
      const data = await response.json();
      setItems(data.products); 
    } catch (error) {
      console.error(error);
    }
  };

  const onAddItem = (item) => {
    const newItem = { ...item, id: items.length };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <StyledInventoryList>
      <h4>상품 목록 및 재고관리</h4>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>미디어</th>
            <th>가격</th>
            <th>재고관리</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <img src={item.url} alt={item.name} width="100" height="100" />
              </td>
              <td>{item.price}원</td>
              <td>
                <div className="quantity">
                  <button>-</button>
                  <p>{item.quantity}개</p>
                  <button>+</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RegisterForm onAddItem={onAddItem} />
    </StyledInventoryList>
  );
}

export default InventoryList;



