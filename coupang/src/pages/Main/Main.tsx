import React, { useState } from 'react';
import Header from '../../components/header/Header';
import ItemList from '../../components/header/ItemList';
import Category from '../../components/header/Category';
import SearchBar from '../../components/header/SearchBar';
import Pagination from '../../components/header/Pagination';
import styled from 'styled-components';
import coupang from '../../assets/headerImg/Bakepang.png';
import MyCoupang from '../../components/header/MyCoupang';
import Cart from '../../components/header/Cart';

const Main = () => {
	// 로그인 상태를 useState를 사용하여 관리합니다.
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// 로그아웃 핸들러를 정의합니다.
	const handleLogout = () => {
		// 로그아웃 로직을 구현하고, 로그아웃 버튼 클릭 시 호출됩니다.
		// 예를 들어, 서버에 로그아웃 요청을 보내거나, 토큰을 삭제하는 등의 작업을 수행합니다.
		// 이 예제에서는 로그아웃 버튼 클릭 시 isLoggedIn 상태를 false로 변경합니다.
		setIsLoggedIn(false);
	};
	return (
		<StMain>
			<Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
			<header className="header">
				<Category />
				<img className="logo" src={coupang} />
				<SearchBar />
				<MyCoupang />
				<Cart />
			</header>
			<main>
				<ItemList />
				<Pagination />
			</main>
		</StMain>
	);
};

export default Main;

const StMain = styled.div`
	position: relative;
	.header {
		width: 72vw;
		margin: auto;
		display: flex;
		/* gap: 50px; */
		align-items: center;
	}
	.logo {
		padding: 15px 15px;
		width: 170px;
		height: 40px;
		cursor: pointer;
	}
`;
