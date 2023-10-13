import axios from "axios";
import React, { useState } from "react";

const BASE_URL = "https://beddadd9-0132-40eb-89ec-91621065a7c6.mock.pstmn.io"; // 변수 값 설정
export const GET_PRODUCT_API = `${BASE_URL}/products`; // 특정 패스파라미터 앞에 해당 변수 넣어 API 주소 세팅
