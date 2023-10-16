import React from 'react';
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
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	const handleLogout = async () => {
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
