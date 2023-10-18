//fetchCartData.tsx

import axios from "axios";

const fetchCartData = async () => {
  try {
    const response = await axios.get("API_ENDPOINT_URL"); // API_ENDPOINT_URL을 실제 API의 URL로 대체
    return response.data; // API 응답 데이터 반환
  } catch (error) {
    throw error; // 오류를 다시 throw하여 호출자에게 전달
  }
};

export default fetchCartData;
