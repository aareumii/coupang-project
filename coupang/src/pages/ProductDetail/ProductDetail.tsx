import React, {useState} from 'react';
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
import { StSearchBox } from "../../styles/searchStyle";



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
		<header>
		  <Category />
		  <HeaderBottom>
		  <a href="/">
			<img className="logo" src={coupang} />
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
	);
};

export default ProductDetail;

const HeaderBottom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;        
`;
