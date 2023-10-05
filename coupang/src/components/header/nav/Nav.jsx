import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../../pages/LoginPage/sign-in/SignIn';

const Nav = () => {
	return (
		<nav>
			<ul>
				<li></li>
				<li></li>
				<li>
					<Link to={'/login'}>
						<SignIn title="로그인" />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
