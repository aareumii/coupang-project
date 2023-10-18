import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

axiosClient.interceptors.response.use(
	(response) => {
		if (response.headers['Authorization']) {
			let accessToken = response.headers['Authorization'];

			if (accessToken.startsWith('Bearer ')) {
				accessToken = accessToken.slice(7);
			}

			// Consider using a more secure token storage method
			localStorage.setItem('accessToken', accessToken);
		}
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('accessToken');

		// This may need to be set conditionally based on the specific request
		config.headers['Content-Type'] = 'application/json; charset=utf-8';

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`; // Use "Bearer" prefix for all requests
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
); // <-- 이 부분이 누락되었었습니다.

export default axiosClient;
