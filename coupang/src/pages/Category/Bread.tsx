import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import coupang from '../../assets/headerImg/베이크팡.png';
import { StCategory } from './stCategory';
import Header from '../../components/header/Header';
import Category from '../../components/header/Category';
import { FaSearch } from 'react-icons/fa';
import MyCoupang from '../../components/header/MyCoupang';
import Cart from '../../components/header/Cart';
import { useNavigate } from 'react-router-dom'; // useNavigate로 수정
import ItemList from '../../components/MainHome/ItemList';
import { GET_PRODUCT_API } from '../../api/Products';
import axios from 'axios';
import { Product } from '../../types/item';
import CateItem from '../../components/category/CateItem';
import CategoryFilter from '../../components/category/CategoryFilter';

const Bread = () => {
	const [products, setProducts] = useState<Product[]>([]);

	const navigate = useNavigate();
	const linktoMain = () => {
		navigate('/');
	};

	useEffect(() => {
		axios
			.get(`${GET_PRODUCT_API}`)
			.then((response) => {
				console.log(response.data);
				setProducts(response.data.product);
			})
			.catch((error) => {
				// Error 핸들링
				console.log(error);
			});
	}, []);

	const category = products.filter(
		(item: { categoryId: number }) => item.categoryId === 1
	);

	return (
		<StCategory>
			<Header />
			<header className="header">
				<Category />
				<img className="logo" src={coupang} onClick={linktoMain} />
				<SearchBox>
					<div className="form">
						<input
							className="input"
							placeholder="찾고 싶은 상품을 검색해보세요!"
						/>
						<FaSearch className="search__icon" />
					</div>
				</SearchBox>

				<MyCoupang />
				<Cart />
			</header>
			<GrayBar>
				<p>베이크팡 홈 {`>`} 식빵/빵류 </p>
			</GrayBar>
			<main>
				<div className="cate__title">식빵·빵류</div>
				<CategoryFilter />

				<ItemListWrap>
					{category.map((item: any) => (
						<CateItem {...item} />
					))}
				</ItemListWrap>
			</main>
		</StCategory>
	);
};

export default Bread;

const SearchBox = styled.div`
	position: relative;

	width: 640px;
	height: 30px;
	margin: 0 5px;

	border: 0.1rem solid #4285f4;
	.input {
		width: 90%;
		height: 90%;
		border: none;
		display: block;

		&:focus {
			outline: none;
		}
	}
	.search__icon {
		color: #4285f4;
		height: 100%;
	}
	.form {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-evenly;
	}
`;

const GrayBar = styled.div`
	width: 100vw;
	/* margin: auto; */
	height: 2rem;
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
	border-top: 0.5px solid #d7d7d7;
	border-bottom: 0.5px solid #d7d7d7;
	p {
		width: 70vw;
		margin: auto;
		font-size: 0.6rem;
	}
`;
const ItemListWrap = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 10px;
	width: 100%;
	height: 400px;
`;
