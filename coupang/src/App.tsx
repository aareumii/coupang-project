import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';
import Bread from './pages/Category/Bread';
import Jam from './pages/Category/Jam';
import Cake from './pages/Category/Cake';
import LoginPage from './pages/LoginPage/Signin/LogIn';
import SignupPage from './pages/RegisterPage/SignUp';
import InventoryList from './pages/Inventory/InventoryList';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
		},
		{
			path: '/Bread',
			element: <Bread />,
		},
		{
			path: '/Jam',
			element: <Jam />,
		},
		{
			path: '/Cake',
			element: <Cake />,
		},
		{
			path: '/login', // 로그인 페이지 경로
			element: <LoginPage />, // 로그인 페이지 컴포넌트
		},
		{
			path: '/signup', // 회원가입 페이지 경로
			element: <SignupPage />, // 회원가입 페이지 컴포넌트
		},
		{
			path: '/Inventory', // 재고 및 상품관리 경로
			element: <InventoryList />, // 재고 및 상품관리 컴포넌트
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
