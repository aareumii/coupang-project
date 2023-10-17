import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from '../../pages/LoginPage/Signin/LogoutButton';

function Header() {
	const loggedIn = isLoggedIn(); // 로그인 상태 확인

	return (
		<HeaderWapper>
			<HeaderContainer>
				<HeaderNav>
					<p>즐겨찾기</p>
					<p>입점신청 ▼</p>
				</HeaderNav>
				<MembershipNav>
					{loggedIn ? (
						<LogoutButton />
					) : (
						<>
							<p>
								<Link
									to={'/'}
									style={{ textDecoration: 'none', color: ' #000' }}
								>
									홈
								</Link>
							</p>
							<p>
								<Link
									to={'/login'}
									style={{ textDecoration: 'none', color: ' #000' }}
								>
									로그인
								</Link>
							</p>
							<p>
								<Link
									to={'/signup'}
									style={{ textDecoration: 'none', color: ' #000' }}
								>
									회원가입
								</Link>
							</p>
						</>
					)}
					<p>고객센터</p>
				</MembershipNav>
			</HeaderContainer>
		</HeaderWapper>
	);
}

function isLoggedIn() {
	// 로그인 상태 확인 함수
	return !!localStorage.getItem('token');
}

export default Header;
const HeaderWapper = styled.div`
	width: 100vw;
	/* margin: auto; */
	height: 2rem;
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
	border-bottom: 0.7px solid #d7d7d7;
`;

const HeaderNav = styled.div`
	display: flex;
	gap: 10px;
	cursor: pointer;
	> p {
		color: black;
		font-size: 0.1rem;
	}
`;

const MembershipNav = styled.div`
	display: flex;
	gap: 10px;
	cursor: pointer;
	> p {
		color: black;
		font-size: 0.1rem;
	}
`;

const HeaderContainer = styled.div`
	width: 70vw;
	margin: auto;
	display: flex;

	justify-content: space-between;
`;
