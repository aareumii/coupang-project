import React from 'react';
import axios from 'axios';

const LogoutButton = () => {
	const handleLogout = async () => {
		try {
			// 로그아웃 요청을 보낼 URL
			const logoutUrl = 'http://43.201.30.126:8080/api/user/logout';
			const token = localStorage.getItem('Authorization');

			if (!token) {
				console.error('토큰이 없습니다.');
				return;
			}

			// 로그아웃 요청을 보내고, 헤더에 토큰을 포함시킵니다.
			const response = await axios.post(
				logoutUrl,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (response.status === 200) {
				// 서버에서 로그아웃 성공

				// 로컬 스토리지에서 토큰을 삭제합니다.
				localStorage.removeItem(token);

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

	return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
