import { createSlice } from '@reduxjs/toolkit';

const logoutSlice = createSlice({
	name: 'logout',
	initialState: false, // 초기 상태를 false로 설정합니다. 로그아웃 상태가 아님을 나타냅니다.
	reducers: {
		logout: (state) => {
			return true; // 로그아웃 상태로 변경합니다. (true)
		},
	},
});

export const { logoutSuccess } = logoutSlice.actions;
export default logoutSlice.reducer;
