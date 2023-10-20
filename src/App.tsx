<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Bread from "./pages/Category/Bread";
import Jam from "./pages/Category/Jam";
import Cake from "./pages/Category/Cake";
import LoginPage from "./pages/LoginPage/LogIn";
import SignupPage from "./pages/RegisterPage/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import InventoryList from "./pages/Inventory/InventoryList";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import OrderResult from "./pages/Order/OrderResult";
import UserInfo from "./pages/UserInfo";
import User from "./pages/User";
import LogoutButton from "./pages/LoginPage/LogoutButton";
import PaymentManagement from "./pages/PaymentManagement";
import SalesListPage from "./pages/SalesListPage";
import PurchaseListPage from "./pages/PurchaseListPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/product/detail/:productName"
            element={<ProductDetail />}
          />
          <Route path="/Bread" element={<Bread />} />
          <Route path="/Jam" element={<Jam />} />
          <Route path="/Cake" element={<Cake />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Inventory" element={<InventoryList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/result" element={<OrderResult />} />
          <Route path="/order/result" element={<OrderResult />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/user" element={<User />} />
          {/* <Route path="/user" element={<UserPage />} /> */}
          {/* <Route path="userinfo" element={<UserInfo />} />
          <Route path="bakepay" element={<PaymentManagement />} />
          <Route path="orderlist" element={<PurchaseListPage />} />
          <Route path="saleslist" element={<SalesListPage />} />
          <Route path="cartlist" element={<CartPage />} /> */}
          <Route path="/user/userinfo" element={<UserInfo />} />
          <Route path="/user/bakepay" element={<PaymentManagement />} />
          <Route path="/user/orderlist" element={<PurchaseListPage />} />
          <Route path="/user/saleslist" element={<SalesListPage />} />
          <Route path="/user/cartlist" element={<CartPage />} />
          {/* <Route path="/userpage" element={<UserPage />} /> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Bread from './pages/Category/Bread';
import Jam from './pages/Category/Jam';
import Cake from './pages/Category/Cake';
import LoginPage from './pages/LoginPage/LogIn';
import SignupPage from './pages/RegisterPage/SignUp';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import InventoryList from './pages/Inventory/InventoryList';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import OrderResult from './pages/Order/OrderResult';
import UserInfo from './pages/UserInfo';
import User from './pages/User';
import LogoutButton from './pages/LoginPage/LogoutButton';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/product/detail/:productName"
						element={<ProductDetail />}
					/>
					<Route path="/Bread" element={<Bread />} />
					<Route path="/Jam" element={<Jam />} />
					<Route path="/Cake" element={<Cake />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/Inventory" element={<InventoryList />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/order" element={<Order />} />
					<Route path="/order/result" element={<OrderResult />} />
					<Route path="/order/result" element={<OrderResult />} />
					<Route path="/userinfo" element={<UserInfo />} />
					<Route path="/user" element={<User />} />
				</Routes>
			</Router>
		</div>
	);
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
}

export default App;
