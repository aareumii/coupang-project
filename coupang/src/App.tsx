import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import LoginPage from './pages/LoginPage/Signin/LogIn';
import SignUpPage from './pages/RegisterPage/SignUp';
import Cartpage from './pages/CartPage/Cartpage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/cart" element={<Cartpage />} />
			</Routes>
		</Router>
	);
}

export default App;
