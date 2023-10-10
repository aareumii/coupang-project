import { useAuth } from '../../hooks/useAuth';
import Login from './Signin/LogIn'; // Login 컴포넌트를 import 합니다.

const LoginPage = () => {
	const { isLoggedIn, login, logout } = useAuth();

	return (
		<div>
			{isLoggedIn ? (
				<>
					<Login onClick={logout} />
				</>
			) : (
				<>
					<p>로그인되지 않았습니다.</p>
					<button onClick={login}>로그인</button>
				</>
			)}
		</div>
	);
};
export default LoginPage;
