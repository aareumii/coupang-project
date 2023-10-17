//CartPage.tsx

import React, { useEffect, useState } from "react";
import fetchCartData from "./fetchCartData";
import axios from "axios";

const getCartItems = async () => {
  try {
    const response = await axios.get("/api/users/{userId}/carts"); // 'API_URL'은 실제 Swagger에서 확인한 장바구니 조회 API의 URL로 변경해주세요.
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("API 호출 실패");
  } catch (error) {
    console.error(error);
    return [];
  }
};
const CartPage = () => {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    fetchCartData()
      .then((data) => setCartData(data))
      .catch((error) => console.error("API 호출 오류:", error));
  }, []);

  return (
    <div>
      <h1>장바구니 조회 화면</h1>
      {cartData ? (
        <div>{/* cartData를 사용하여 장바구니 정보를 화면에 표시 */}</div>
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </div>
  );
};

export default CartPage;
