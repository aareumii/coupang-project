import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
	name: 'token',
	initialState: '',
	reducers: {
		setToken: (state, action) => {
			return action.payload; // 토큰 값을 업데이트
		},
		clearToken: () => '', // 토큰을 지움
	},
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
