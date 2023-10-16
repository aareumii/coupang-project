import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from '../../pages/LoginPage/Signin/LogoutButton';

interface HeaderProps {
	isLoggedIn: boolean;
	onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
	return (
		<>
			<HeaderWapper>
				<HeaderContainer>
					<HeaderNav>
						<p>즐겨찾기</p>
						<p>입점신청 ▼</p>
					</HeaderNav>
					<MembershipNav>
						{isLoggedIn ? (
							<>
								{/* 로그아웃 버튼에 onClick 프로퍼티 추가 */}
								<LogoutButton />
							</>
						) : (
							<>
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
		</>
	);
};

export default Header;
const HeaderWapper = styled.div`
	width: 100vw;
	/* margin: auto; */
	height: 2rem;
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
`;

const HeaderNav = styled.div`
	display: flex;
	gap: 10px;
	> p {
		color: black;
		font-size: 0.1rem;
	}
`;

const MembershipNav = styled.div`
	display: flex;
	gap: 10px;
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
