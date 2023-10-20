import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Category from '../../components/header/Category';
import Pagination from '../../components/header/Pagination';
import bakepang from '../../assets/headerimg/Bakepang.png';
import MyCoupang from '../../components/header/MyCoupang';
import Cart from '../../components/header/Cart';
import ProductInfo from './ProductInfo';
import { StMain } from '../Main/stMain';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/item';
import Footer from '../../components/footer/Footer';
import { StSearchBox } from '../../styles/Search.Styled';

const ProductDetail = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [userInput, setUserInput] = useState('');

	const navigate = useNavigate();

	// const getProducts = () => {
	//   axios
	//     .get(GET_PRODUCT_API)
	//     .then((response) => {
	//       console.log(response.data);
	//       setProducts(response.data.product.slice(0, 20));
	//     })
	//     .catch((error) => {
	//       // Error 핸들링
	//       console.log(error);
	//     });
	// };

	const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			let keyword = e.currentTarget.value;
			navigate(`/?q=${keyword}`);
		}
	};

	const searched = products.filter((item: { name: string }) =>
		item.name.includes(userInput)
	);
	const linktoMain = () => {
		navigate('/');
	};

	return (
		<StMain>
			<Header />
			<header className="header">
				<Category />

				<a href="/">
					<img className="logo" src={bakepang} alt="베이크팡" />
				</a>

				<StSearchBox>
					<div className="form">
						<input
							className="input"
							placeholder="찾고 싶은 상품을 검색해보세요!"
							onChange={getValue}
							onKeyDown={handleKeyDown}
						/>
						<FaSearch className="search__icon" />
					</div>
				</StSearchBox>

				<MyCoupang />
				<Cart />
			</header>
			<main className="main">
				<ProductInfo />
				<Pagination />
			</main>{' '}
			<footer className="footer">
				<Footer />
			</footer>
		</StMain>
	);
};

export default ProductDetail;
