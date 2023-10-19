import axios, { AxiosError } from "axios";

const BASE_URL = "http://43.201.30.126:8080";

// 제품 상세 정보를 가져오는 함수
export const fetchProductDetails = async (name: string) => {
  const GET_PRODUCT_API = `${BASE_URL}/api/product/detail/${name}`;
  
  try {
    const response = await axios.get(GET_PRODUCT_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('accessToken');
    return !!token;  // 토큰이 있는 경우 true를 반환하고, 없는 경우 false를 반환합니다.
}

export const getAccessToken = (): string | null => {
    return localStorage.getItem('accessToken');
}


// 장바구니에 제품을 추가하는 함수
export const addToCart = async (product: any, quantity: number) => {
    if (!isAuthenticated()) {
        console.error("로그인이 필요합니다.");
        throw new Error("로그인이 필요합니다.");
    }

    try {
        const token = getAccessToken();
        
        const response = await axios.post(`${BASE_URL}/api/users/cart/products`, {
            productId: product.productName,
            quantity: quantity
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
  
        if (response.data && response.data.message === "상품을 장바구니에 추가하였습니다") {
            return response.data;
        } else {
            throw new Error("장바구니 추가에 실패했습니다.");
        }
    } catch (error) {
        const e = error as AxiosError;
  
        if (e.response) {
            if (e.response.status === 400) {
                console.error("가입 되지 않은 회원입니다.");
            } else {
                console.error("Error adding product to cart:", e.message);
            }
        } else {
            console.error("Request error:", e.message);
        }
        throw e;
    }
};