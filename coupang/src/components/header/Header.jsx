import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './nav/Nav';

const Header = () => {
	return (
		<HeaderContainer>
			<div className="container">
				<HeaderWrapper>
					<HeaderLogo>
						<Link to={'/'}>
							<h2>Shop</h2>
						</Link>
					</HeaderLogo>
					<Nav />
				</HeaderWrapper>
			</div>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
	background-color: #ffff;
	box-shadow: 0 3px 11px 0 rgb(0 0 0 / 15%);
`;

const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
`;

const HeaderLogo = styled.div`
	display: flex;
	flex-direction: row;

	span {
		font-size: 20px;
	}

	h2 {
		margin: 0 0 0 10px;
		font-size: 20px;

		&:hover {
			color: var(--hover-color);
			cursor: pointer;
			transition: 0.3s all ease;
		}
	}

	@media (min-width: 768px) {
		span {
			font-size: 25px;
		}

		h2 {
			font-size: 25px;
		}
	}
`;
