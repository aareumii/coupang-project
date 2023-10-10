import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Bakepang from '../../../assets/headerImg/Bakepang.png';

const axiosInstance = axios.create({
	baseURL: '/api',
});

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [loginError, setLoginError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const navigate = useNavigate();

	const isEmailValid = (email) => {
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailPattern.test(email);
	};

	const isPasswordValid = (password) => {
		const passwordPattern =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
		return passwordPattern.test(password);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!email) {
			setEmailError('아이디(이메일)를 입력해주세요.');
			return;
		} else if (!isEmailValid(email)) {
			setEmailError('올바른 이메일 형식이 아닙니다.');
			return;
		} else {
			setEmailError('');
		}

		if (!password) {
			setPasswordError('비밀번호를 입력해주세요.');
			return;
		} else if (!isPasswordValid(password)) {
			setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
			return;
		} else {
			setPasswordError('');
		}

		if (!emailError && !passwordError) {
			try {
				const response = await axiosInstance.post('/login', {
					email,
					password,
				});

				if (response.data.success) {
					// 로그인 성공 시, 토큰을 localStorage에 저장
					localStorage.setItem('token', response.data.token);
					// 홈 화면으로 이동
					navigate('/');
				} else {
					// 로그인 실패 시 에러 메시지 처리
					if (response.data.message) {
						setLoginError(response.data.message);
					} else {
						setLoginError('로그인에 실패했습니다.');
					}
				}
			} catch (error) {
				console.error('API 호출 오류:', error.message);
				setLoginError('서버에 연결할 수 없습니다.');
			}
		}
	};

	const handleFieldBlur = (fieldName, value) => {
		if (!value) {
			if (fieldName === 'email')
				setEmailError('아이디(이메일)를 입력해주세요.');
			if (fieldName === 'password')
				setPasswordError('비밀번호를 입력해주세요.');
		} else {
			if (fieldName === 'email' && !isEmailValid(value)) {
				setEmailError('올바른 이메일 형식이 아닙니다.');
			} else if (fieldName === 'password' && !isPasswordValid(value)) {
				setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
			} else {
				setEmailError('');
				setPasswordError('');
			}
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
				<LoginWrap>
					<div>
						<a href="#">이메일 로그인</a>
						<a href="#">간편 로그인</a>
					</div>
				</LoginWrap>
				<FormContainer>
					<div>
						<input
							type="email"
							placeholder="아이디(이메일)"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={() => handleFieldBlur('email', email)}
						/>
						<div>
							<FormError>{emailError}</FormError>
						</div>
					</div>
					<div>
						<input
							type="password"
							placeholder="비밀번호"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onBlur={() => handleFieldBlur('password', password)}
						/>
						<div>
							<FormError>{passwordError}</FormError>
						</div>
					</div>
					<button type="submit" onClick={handleLogin}>
						로그인
					</button>
					<FormError>{loginError}</FormError> {/* 로그인 에러 메시지 */}
				</FormContainer>
				<hr />
				<Link to={'/signup'}>
					<SignupButton>회원가입 </SignupButton>
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
		margin: 0 auto;

		text-align: center;
		img {
			position: relative;
			display: block;
			width: 100%;
			max-width: 195px;
			max-height: 46px;
			margin: 0 auto;
			background-position: 50% 50%;
			padding-top: 10%;
			background-size: cover;
		}
	}
	hr {
		height: 1px;
		border: 0;
		background-color: #c8d1d8;
	}
	input:focus {
		outline: none; /* 기본 포커스 효과 제거 */
		border-bottom: 2px solid #346aff; /* 포커스 상태일 때 원하는 색상으로 변경 */
	}
`;

const LoginWrap = styled.div`
	position: relative;
	display: flex;

	div {
		width: 100%;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		margin-top: 24px;
		display: flex;
		justify-content: space-around;

		a {
			padding: 14px 0;
			color: #454f5b;
			text-align: center;
			text-decoration: none;
		}
	}
`;

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
	margin: 9px 12px 0;
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
	margin-top: 16px;
	text-decoration: none;
	color: #454f5b;
	font-weight: bold;
`;
