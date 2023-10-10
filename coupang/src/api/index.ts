import axios, { AxiosInstance } from 'axios';

// 환경 구성 파일 또는 상수 파일에서 BASE_URL 가져오기
import { BASE_URL } from '../env/development';

const axiosClient: AxiosInstance = axios.create({
	baseURL: BASE_URL,
});

axiosClient.interceptors.response.use(
	(response) => {
		if (response.headers['authorization']) {
			const accessToken = response.headers['authorization'];
			localStorage.setItem('accessToken', accessToken);
		}
		return response.data;
	},
	(error) => {
		// 여기서 오류 처리를 수행할 수 있습니다.
		return Promise.reject(error);
	}
);

axiosClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('accessToken'); // 로컬 스토리지에서 토큰 가져오기

		config.headers['Content-Type'] = 'application/json; charset=utf-8';

		// 로그인 이후의 요청에서 토큰이 있는 경우 해당 토큰을 사용하여 요청을 합니다.
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		// 여기서 오류 처리를 수행할 수 있습니다.
		return Promise.reject(error);
	}
);
export default axiosClient;
