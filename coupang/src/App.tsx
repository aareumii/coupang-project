import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/RegisterPage/SignUp';
import Cartpage from './pages/CartPage/Cartpage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
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
			path: '/cart', // 장바구니 페이지 경로
			element: <Cartpage />, // 장바구니 페이지 컴포넌트
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
