import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
	name: 'login',
	initialState: {
		isAuthenticated: false, // 인증 상태 초기값
	},
	reducers: {
		loginSuccess: (state) => {
			state.isAuthenticated = true; // 로그인 성공 시 인증 상태를 true로 설정
		},
		logoutSuccess: (state) => {
			state.isAuthenticated = false; // 로그아웃 시 인증 상태를 false로 설정
		},
	},
});

export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;
