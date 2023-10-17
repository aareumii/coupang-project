import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import ItemList from '../../components/MainHome/ItemList';
import Category from '../../components/Header/Header';
// import SearchBar from "../../components/Header/SearchBar";
import Pagination from '../../components/Header/Pagination';
import coupang from '../../assets/headerImg/베이크팡.png';
import MyCoupang from '../../components/Header/MyCoupang';
import Cart from '../../components/Header/Cart';
import ProductInfo from './ProductInfo';
import { StMain } from '../Main/stMain';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/item';
import Footer from '../../components/footer/Footer';


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
		<Container>
			<StMain>
				<header>
					<Category />
					<HeaderBottom>
						<img className="logo" src={coupang} onClick={linktoMain} />
						<SearchBox>
							<div className="form">
								<input
									className="input"
									placeholder="찾고 싶은 상품을 검색해보세요!"
									onChange={getValue}
									onKeyDown={handleKeyDown}
								/>
								<FaSearch className="search__icon" />
							</div>
						</SearchBox>
						<MyCoupang />
						<Cart />
					</HeaderBottom>
				</header>

				<main className="main">
                    <ProductInfo />
					<Pagination />
				</main>{' '}
				<footer className="footer">
					<Footer />
				</footer>
			</StMain>
		</Container>
	);
};

export default ProductDetail;

const Container = styled.div`
	width: 100vw;
	max-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
`;

const HeaderBottom = styled.div`
	display: flex;
`;

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
