import axiosClient from "./index";
import { AxiosError } from "axios";

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("accessToken");
  return !!token; // 토큰이 있는 경우 true 반환, 없는 경우 false 반환
};

export const postAddToCart = async (product: any, quantity: number) => {
  if (!isAuthenticated()) {
    console.error("로그인이 필요합니다.");
    throw new Error("로그인이 필요합니다.");
  }

  try {
    const response = await axiosClient.post("/users/cart/products", {
      productId: product.id,
      quantity: quantity,
    });

    if (
      response.data &&
      response.data.message === "상품을 장바구니에 추가하였습니다"
    ) {
      return response.data;
    } else {
      throw new Error("장바구니 추가에 실패했습니다.");
    }
  } catch (error) {
    const e = error as AxiosError;
    if (e.response && e.response.status === 400) {
      console.error("가입 되지 않은 회원입니다.");
    } else {
      console.error("Error adding product to cart:", e.message);
    }
    throw e;
  }
};
