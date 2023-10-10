import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../slice/tokenSlice'; // 토큰 관련 리듀서

const store = configureStore({
	reducer: {
		token: tokenReducer, // 토큰 관련 리듀서 등록
		// 다른 리듀서들도 필요한 경우 추가
	},
});

export default store;
