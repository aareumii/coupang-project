import axios from "axios";

const BASE_URL = "http://43.201.30.126:8080/";

// 제품 상세 정보를 가져오는 함수
export const fetchProductDetails = async (name: string) => {
  const GET_PRODUCT_API = `${BASE_URL}api/product/detail/${name}`;
  
  try {
    const response = await axios.get(GET_PRODUCT_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

export const updateCartProduct = async (userId: number, cartProductId: number, amount: number) => {
    try {
        const response = await fetch(`/api/users/${userId}/cart/products`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartProductId: cartProductId,
                amount: amount
            })
        });

        const data = await response.json();
        if(response.ok) {
            console.log("장바구니 제품 정보 업데이트 성공:", data);
            return data;
        } else {
            console.error("장바구니 제품 정보 업데이트 오류:", data);
            throw new Error(data);
        }
    } catch (error) {
        console.error("장바구니 제품 정보 업데이트 중 에러 발생:", error);
    }
}