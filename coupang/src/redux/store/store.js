import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../slice/loginSlice'; // 기존 loginSlice.js
import logoutReducer from '../slice/logoutSlice'; // 새로 생성한 logoutSlice.js

const store = configureStore({
	reducer: {
		login: loginReducer,
		logout: logoutReducer, // logoutReducer를 추가합니다.
	},
});

export default store;
