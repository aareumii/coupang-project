import React from 'react';
import styled from 'styled-components';

const Form = ({ title }) => {
	return (
		<FormContainer>
			<div>
				<input type="email" placeholder="이메일 혹은 아이디를 입력하세요" />
				<div>
					<FormError></FormError>
				</div>
			</div>
			<div>
				<input type="password" placeholder="Password" />
				<div>
					<FormError></FormError>
				</div>
			</div>
			<button type="submit">{title}</button>
			<FormError></FormError>
		</FormContainer>
	);
};

export default Form;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-bottom: 10px;
	}
	input {
		width: 80%;
		height: auto;
		padding: 10px 15px;
		color: #000;
		font-size: 16px;
		border: 1px solid #000;
		border-radius: 5px;
		outline: none;

		&:focus {
			border: 3px solid #000;
			border-radius: 5px;
		}
	}
	button {
		width: 80%;
		margin-top: 10px;
		padding: 15px 40px;
		color: #000;
		font-size: 14px;

		border: 1px solid #000;
		cursor: pointer;
		transition: 0.3s all ease;

		/* &:hover {
			background: var(--second-color);
		} */
	}
`;

const FormError = styled.span`
	position: relative;
	display: block;
	width: 80%;
	margin-top: 15px;
	padding: 5px;
	color: #000;
	font-size: 13px;
	background: var(--second-color);
	border: 1px solid var(--second-color);
	border-radius: 5px;
	box-shadow: rgb(0 0 0 / 16%) 0 3px 6px, rgb(0 0 0 / 23%) 0 3px 6px;
`;
