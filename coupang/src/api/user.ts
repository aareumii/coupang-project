import axiosClient from './index';

const userAPI = {
	login: async (email: string, password: string) => {
		const response = await axiosClient.post('/user/login', {
			email: email,
			password: password,
		});
		return response;
	},
	logout: async () => {
		const response = await axiosClient.get('/user/logout');
		return response;
	},
};

export default userAPI;
