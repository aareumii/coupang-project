import React, { useState, useEffect } from "react";
import RegisterForm from "./RegisterForm";
import { StyledInventoryList } from "./InventoryList.styles";

function InventoryList() {
  const [items, setItems] = useState([]); //재고
  const [itemQuantities, setItemQuantities] = useState({}); //재고 수량 조작 버튼

  //데이터 가져오기 로직
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://post-test-f8c2d-default-rtdb.firebaseio.com/items.json"
      );
      if (!response.ok) {
        throw new Error("데이터를 불러오는 중 문제가 발생했습니다.");
      }
      const data = await response.json();

      const loadedItems = [];
      const loadedQuantities = {};

      for (const key in data) {
        const quantity=parseInt(data[key].quantity,10)
        loadedItems.push({
          id: key,
          product: data[key].product,
          price: data[key].price,
          quantity: quantity,
          media1: data[key].media1,
        });

        loadedQuantities[key] = quantity;
      }
      setItems(loadedItems);
      setItemQuantities(loadedQuantities);
    } catch (error) {
      console.error(error);
    }
  };

  //상품 추가 로직
  const onAddItem = async (item) => {
    const response = await fetch(
      "https://post-test-f8c2d-default-rtdb.firebaseio.com/items.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("리스트 추가된 데이터:", data);

      setItems((prevItems) => [...prevItems, { id: data.name, ...item }]);
    } else {
      console.error("리스트 추가 실패");
    }
  };

  //재고 수량 변경 로직
  const handleQuantityChange = (productId, change) => {
    setItemQuantities((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + change,
    }));
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
              <td>{item.product}</td>
              <td>{item.media1}</td>
              <td>{item.price}원</td>
              <td>
                <div className="quantity">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>
                    -
                  </button>
                  <p>{itemQuantities[item.id] || 0}개</p>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </button>
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
