import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductInfo from './pages/ProductDetail/ProductInfo';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Main from './pages/Main/Main';
import Bread from './pages/Category/Bread';
import Jam from './pages/Category/Jam';
import Cake from './pages/Category/Cake';
import LoginPage from './pages/LoginPage/Signin/LogIn';
import SignupPage from './pages/RegisterPage/SignUp';
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";

function App() {
	return (
	  <div className="App">
		<Router>
		  <Routes>
			<Route path="/" element={<Main />} />  
			<Route path="/product/:productName" element={<ProductInfo />} />
			<Route path="/ProductDetail" element={<ProductDetail />} />
			<Route path="/Bread" element={<Bread />} />
			<Route path="/Jam" element={<Jam />} />
			<Route path="/Cake" element={<Cake />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/Cart" element={<Cart />} />
			<Route path="/Order" element={<Order />} />
		  </Routes>
		</Router>
	  </div>
	);
  }

export default App;
