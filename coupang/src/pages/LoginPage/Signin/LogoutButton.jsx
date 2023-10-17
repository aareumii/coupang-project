import React from 'react';
import userAPI from '../../../api/user';
import styled from 'styled-components';

interface LogoutButtonProps {
	onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
	const handleLogout = async () => {
		try {
			const response = await userAPI.logout();

			if (response.status === 200) {
				// 서버에서 로그아웃 성공

				// 로컬 스토리지에서 토큰을 삭제합니다.
				localStorage.removeItem('accessToken');

				// 로그인 페이지로 리디렉션
				window.location.href = '/login'; // 페이지를 새로고침하지 않고 리디렉션
			} else {
				// 서버에서 로그아웃 실패
				console.error('로그아웃 실패');
				// 실패한 경우 처리 방법을 선택하세요.
			}
		} catch (error) {
			console.error('Error logging out:', error);
			// 오류 처리 방법을 선택하세요.
		}
	};

	return (
		<Logout>
			<button onClick={handleLogout}>
				<p>로그아웃</p>
			</button>
		</Logout>
	);
};

export default LogoutButton;

const Logout = styled.div`
	display: flex;
	gap: 10px;

	button {
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;

		p {
			color: black;
			font-size: 0.6rem;
		}
	}
`;
