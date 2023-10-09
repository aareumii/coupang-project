import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductInfo from './pages/ProductDetail/ProductInfo';
import Main from './pages/Main/Main';
import Bread from './pages/Category/Bread';
import Jam from './pages/Category/Jam';
import Cake from './pages/Category/Cake';
import LoginPage from './pages/LoginPage/Signin/LogIn';
import SignupPage from './pages/RegisterPage/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ProductInfo" element={<ProductInfo />} />
          {/* ProductDetail 컴포넌트가 임포트되지 않았으므로 주석 처리하였습니다. 필요하면 임포트 후 주석 해제하세요. */}
          {/* <Route path="/ProductDetail" element={<ProductDetail />} /> */}
          <Route path="/Bread" element={<Bread />} />
          <Route path="/Jam" element={<Jam />} />
          <Route path="/Cake" element={<Cake />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
