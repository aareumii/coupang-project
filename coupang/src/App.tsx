import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductInfo from './pages/ProductDetail/ProductInfo';
import Main from "./pages/Main/Main";
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element= {<Main />} />
          <Route path="/ProductInfo" element={<ProductInfo />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          {/* 다른 페이지 라우팅 경로와 컴포넌트 추가 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
