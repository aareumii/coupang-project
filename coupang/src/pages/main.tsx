// Main.tsx

import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import CartPage from "./CartPage";
import UserPage from "./UserPage";
import UserInfo from "./UserInfo";
import SalesListPage from "./SalesListPage";
import PurchaseListPage from "./PurchaseListPage";
import PaymentManagement from "./PaymentManagement";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled(Link)`
  margin-left: 7rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const SearchBar = styled.input`
  padding: 15px;
  width: 600px;
  border: 2px solid blue;
  background-color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14rem;
`;

const Button = styled.button`
  padding: 10px 10px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 1rem;
`;

const NavbarContent: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/cart" && (
        <Navbar>
          <Logo to="/">Bakepang</Logo>
          <SearchBar type="text" placeholder="Search" />
          <ButtonContainer>
            <Link to="/user/sales">
              <Button>마이쿠팡</Button>
            </Link>
            <Link to="/cart">
              <Button>장바구니</Button>
            </Link>
          </ButtonContainer>
        </Navbar>
      )}
    </div>
  );
};

const Main: React.FC = () => {
  return (
    <Router>
      <div>
        <NavbarContent />
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/user/*" element={<UserPage />} />
          <Route path="/order" element={<PurchaseListPage />} />
          <Route path="/sales" element={<SalesListPage />} />
          <Route path="/bakepay" element={<PaymentManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
