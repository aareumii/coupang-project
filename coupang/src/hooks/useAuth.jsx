import { useState } from 'react';

function useAuth() {
	// 로컬 스토리지에 저장된 로그인 상태를 초기 값으로 사용
	const [isLoggedIn, setIsLoggedIn] = useState(
		!!localStorage.getItem('isLoggedIn')
	);

	const login = () => {
		setIsLoggedIn(true);
		localStorage.setItem('isLoggedIn', 'true');
	};

	const logout = () => {
		setIsLoggedIn(false);
		localStorage.removeItem('isLoggedIn');
	};

	return { isLoggedIn, login, logout };
}
export { useAuth };
