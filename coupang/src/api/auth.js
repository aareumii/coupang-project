import axios from 'axios';
import axiosClient from '../api/index';

async function signup({
	gender,
	name,
	email,
	password,
	phone,
	address,
	detailedAddress,
	img,
}) {
	try {
		const response = await axios.post('/signup', {
			gender,
			name,
			email,
			password,
			phone,
			address,
			detailedAddress,
			img,
		});

		if (response.data.success) {
			const token = response.data.token;
			console.log('반환된 토큰:', token);
			return {
				success: true,
				token: token,
				message: '성공적으로 회원가입되었습니다.',
			};
		} else {
			const message = response.data.message || '회원 가입에 실패하였습니다.';
			return {
				success: false,
				message: message,
			};
		}
	} catch (error) {
		console.error('API 호출 오류:', error.message);
		if (error.response && error.response.data) {
			return {
				success: false,
				message: error.response.data.message || '서버에 연결할 수 없습니다.',
			};
		} else {
			return {
				success: false,
				message: '서버에 연결할 수 없습니다.',
			};
		}
	}
}

async function login({ email, password }) {
	try {
		const response = await axiosClient.post('/login', { email, password });

		if (response.success) {
			const token = response.token;
			console.log('로그인 성공, 반환된 토큰:', token);
			return {
				success: true,
				token: token,
				message: '로그인에 성공하였습니다.',
			};
		} else {
			const message = response.message || '로그인에 실패하였습니다.';
			return {
				success: false,
				message: message,
			};
		}
	} catch (error) {
		console.error('API 호출 오류:', error.message);
		if (error.response && error.response.data) {
			return {
				success: false,
				message: error.response.data.message || '서버에 연결할 수 없습니다.',
			};
		} else {
			return {
				success: false,
				message: '서버에 연결할 수 없습니다.',
			};
		}
	}
}

export default signup;
export { login };
