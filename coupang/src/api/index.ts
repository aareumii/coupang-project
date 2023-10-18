import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: process.env.REACT_APP_BASE_URL, // REACT_APP_BASE_URL =   "http://43.201.30.126:8080/api"
=======
	baseURL: process.env.REACT_APP_BASE_URL, // REACT_APP_BASE_URL = "http://43.201.30.126:8080/api"
>>>>>>> 303cb8ef3703d2ffa7e1034a93bd1d7251eb1293
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response.headers["authorization"]) {
      let accessToken = response.headers["authorization"];

      if (accessToken.startsWith("Bearer ")) {
        accessToken = accessToken.slice(7);
      }

      localStorage.setItem("accessToken", accessToken);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

<<<<<<< HEAD
    config.headers["Content-Type"] = "application/json; charset=utf-8";

    if (token) {
      if (config.url === "/user/logout") {
        config.headers["token"] = token; // logout 요청의 경우 'token' 헤더에 토큰 값을 넣어줍니다.
      } else {
        config.headers["Authorization"] = `Bearer ${token}`; // 그 외 요청에 대해서는 "Bearer"를 포함하여 토큰을 넣어줍니다.
      }
    }
=======
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
>>>>>>> 303cb8ef3703d2ffa7e1034a93bd1d7251eb1293

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
