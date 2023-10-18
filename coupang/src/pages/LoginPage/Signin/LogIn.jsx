import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Bakepang from '../../../assets/headerImg/베이크팡.png';
import userAPI from '../../../api/user';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const navigate = useNavigate();

	const isEmailValid = (email) =>
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
	const isPasswordValid = (password) =>
		/^(?=.*[a-z])(?=.*\d).{8,20}$/.test(password);

	const handleCloseModal = () => {
		navigate('/');
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		let isValid = true;

		if (!email || !isEmailValid(email)) {
			setEmailError('올바른 이메일 형식이 아닙니다.');
			isValid = false;
		} else {
			setEmailError('');
		}

		if (!password || !isPasswordValid(password)) {
			setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
			isValid = false;
		} else {
			setPasswordError('');
		}

		if (!isValid) return;

		try {
			await userAPI.login(email, password);
			console.log('로그인 성공');
			handleCloseModal();
		} catch (error) {
			console.error('API 호출 오류:', error.message);
			setEmailError('서버에 연결할 수 없습니다.');
		}
	};

	const handleEmailChange = (e) => {
		const newEmail = e.target.value;
		setEmail(newEmail);

		if (!newEmail || !isEmailValid(newEmail)) {
			setEmailError('올바른 이메일 형식이 아닙니다.');
		} else {
			setEmailError('');
		}
	};

	const handlePasswordChange = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);

		if (!newPassword || !isPasswordValid(newPassword)) {
			setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
		} else {
			setPasswordError('');
		}
	};

	return (
		<div className="page">
			<Container>
				<h1>
					<Link to={'/'}>
						<img src={Bakepang} alt="로고" />
					</Link>
				</h1>
				<FormContainer onSubmit={handleLogin}>
					<div>
						<input
							id="email"
							type="email"
							placeholder="아이디(이메일)"
							value={email}
							onChange={handleEmailChange}
						/>
						<FormError>{emailError}</FormError>
					</div>
					<div>
						<input
							type="password"
							placeholder="비밀번호"
							value={password}
							onChange={handlePasswordChange}
						/>
						<FormError>{passwordError}</FormError>
					</div>
					<button type="submit" onClick={handleLogin}>
						로그인
					</button>
				</FormContainer>
				<hr />
				<Link to={'/signup'}>
					<SignupButton>회원가입</SignupButton>
				</Link>
			</Container>
		</div>
	);
};

export default Login;

const Container = styled.div`
	width: 100vw;
	max-width: 460px;
	min-width: 290px;
	margin: 0 auto;

	h1 {
		margin: 10px auto;
		text-align: center;
		img {
			position: relative;
			display: block;
			width: 100%;
			max-width: 280px;
			max-height: 83px;
			margin: 0 auto;
			background-position: 50% 50%;
			padding-top: 10%;
			background-size: contain;
		}
	}
	hr {
		height: 1px;
		border: 0;
		background-color: #c8d1d8;
		margin: 30px 0;
	}
	input:focus {
		outline: none; /* 기본 포커스 효과 제거 */
		border-bottom: 2px solid #346aff; /* 포커스 상태일 때 원하는 색상으로 변경 */
	}
`;

// const LoginWrap = styled.div`
// 	position: relative;
// 	display: flex;

// 	div {
// 		width: 100%;
// 		font-weight: 400;
// 		font-size: 16px;
// 		line-height: 19px;
// 		margin-top: 24px;
// 		display: flex;
// 		justify-content: space-around;

// 		a {
// 			padding: 14px 0;
// 			color: #454f5b;
// 			text-align: center;
// 			text-decoration: none;
// 		}
// 	}
// `;

// const PasswordWrap = styled.div`
// 	display: flex;
// 	position: relative;

// 	div {
// 		width: 100%;
// 		font-weight: 400;
// 		font-size: 16px;
// 		line-height: 19px;
// 		margin-top: 24px;
// 		display: flex;
// 		justify-content: space-around;

// 		a {
// 			padding: 14px 0;
// 			color: #454f5b;
// 			text-align: center;
// 			text-decoration: none;
// 		}
// 	}
// `;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	div {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: 10px;
	}
	input {
		margin: 0;
		height: 48px;
		box-sizing: border-box;
		width: 100%;
		padding: 16px 0 12px;
		border: 1px solid #e8e8e8;
		background: none transparent;
		font-family: dotum, sans-serif;
		font-size: 14px;
		line-height: 20px;
		color: #111;
		font-weight: 700;
		text-indent: 12px;
		&::placeholder {
			color: #b1b1b1;
		}
		&:focus {
			border-bottom: 2px solid #346aff;
		}
	}
	button {
		width: 100%;
		font-family: apple sd gothic neo, malgun gothic, nanumbarungothic,
			nanumgothic, dotum, sans-serif;
		background: #346aff;
		color: #fff;
		font-weight: bold;
		padding: 12.5px 0;
		border-radius: 4px;
		font-size: 16px;
		box-shadow: none;
		line-height: 19px;
		border: none;
		cursor: pointer;
		/* &:hover {
			background: var(--second-color);
		} */
	}
`;

const FormError = styled.span`
	color: #e52528;
	display: block;
	margin: 9px 15px 0;
	padding: 0;
	font-family: dotum, sans-serif;
	font-size: 12px;
	line-height: 18px;
	cursor: default;
`;

const SignupButton = styled.button`
	width: 100%;
	padding: 11.5px 0;
	border-radius: 4px;
	font-size: 16px;
	box-shadow: none;
	line-height: 19px;
	background: #fff;
	cursor: pointer;
	border: 1px solid #919eab;

	text-decoration: none;
	color: #454f5b;
	font-weight: bold;
`;
// const Modal = styled.div`
// 	position: fixed;
// 	top: 25%;
// 	left: 23%;
// 	width: 50%;
// 	height: 50%;
// 	background-color: rgba(0, 0, 0, 0.5);
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

// const ModalContent = styled.div`
// 	background-color: #fff;
// 	padding: 20px;
// 	border-radius: 5px;
// 	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
// 	text-align: center;
// `;

// const ModalMessage = styled.div`
// 	font-size: 18px;
// 	margin-bottom: 20px;
// `;

// const CloseButton = styled.button`
// 	background-color: #ff4b4b;
// 	color: #fff;
// 	padding: 10px 20px;
// 	border: none;
// 	border-radius: 5px;
// 	cursor: pointer;
// 	font-size: 16px;

// 	&:hover {
// 		background-color: #ff3333;
// 	}
// `;

// const LogoutMessage = styled.div`
// 	color: green; /* 원하는 스타일로 설정하세요 */
// 	text-align: center;
// 	margin-top: 10px;
// `;