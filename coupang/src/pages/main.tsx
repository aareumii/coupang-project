// Main.tsx

import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import CartPage from './CartPage';
import UserPage from './UserPage';
import NotFound from './NotFound';
import Header from './Header';
import Cart from './Cart';
import Login from '../pages/Main/Main';

const MainContent: React.FC = () => {
	const currentLocation = useLocation();

	return (
		<div>
			{currentLocation.pathname === '/' ||
			currentLocation.pathname.includes('/user') ||
			currentLocation.pathname === '/cart' ? (
				<Header />
			) : null}
			<Routes>
				<Route path="/" element={<div />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/user" element={<NotFound />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cartlist" element={<Cart />} />

				<Route path="/user/*" element={<UserPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

const Main: React.FC = () => {
	return (
		<Router>
			<MainContent />
		</Router>
	);
};
export default Main;
