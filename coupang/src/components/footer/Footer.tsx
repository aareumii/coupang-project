import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<footer>
			<FooterLayer_01>
				<a href="https://news.coupang.com/" target="_blank">
					회사소개
				</a>
				<a href="https://ir.aboutcoupang.com/English/home/" target="_blank">
					Investor Relations
				</a>
				<a href="https://rocketyourcareer.kr.coupang.com" target="_blank">
					인재채용
				</a>
				<a href="https://marketplace.coupangcorp.com/s/?utm_source=button_pc&amp;utm_medium=non_paid&amp;utm_campaign=onsite_ca&amp;utm_id=coupang_app?inflow=WEB_FOOTER_B">
					입점 / 제휴문의
				</a>
				<a href="https://mc.coupang.com/ssr/desktop/contact/notice">공지사항</a>
				<a href="https://mc.coupang.com/ssr/desktop/contact/voc">고객의 소리</a>
				<a href="/np/policies/terms">이용약관</a>
				<a href="https://privacy.coupang.com/ko/center/coupang">
					<b>개인정보 처리방침</b>
				</a>
				<a href="https://rocketpay.coupang.com/rocketpay/operationTerms/coupangPcFooter">
					베이크팡페이 이용약관
				</a>
				<a href="https://privacy.coupang.com/ko/land/coupay">
					<b>베이크팡페이개인정보처리방침</b>
				</a>
				<a href="/np/safety">신뢰관리센터</a>
				<a href="https://partners.coupang.com/" target="_blank">
					제휴마케팅
				</a>
				<a href="https://ads.coupang.com" target="_blank">
					광고안내
				</a>
			</FooterLayer_01>
			<FooterLayer_02>
				<FooterContent>
					<address>
						상호명 및 호스팅 서비스 제공 : 베이크팡(주)
						<br />
						대표이사 : 슈퍼코딩
						<br />
						통신판매업신고 : 2023-슈퍼코딩-1021
						<br />
						<a href="#">사업자정보 확인 &gt;</a>
					</address>
					<div className="contact-info">
						<a
							href="https://mc.coupang.com/ssr/desktop/contact/inquiry"
							className="call-center"
							title="365 고객센터"
						>
							<strong>365고객센터</strong> | 전자금융거래분쟁처리담당
							<br />
							<em>1234-5678 (유료)</em>
							<br />
							<span className="contact-fax">email : help@bakepang.com</span>
						</a>
					</div>
					<SafeService>
						<strong>우리은행 채무지급보증 안내</strong>
						<br />
						<span>
							당사는 고객님이 현금 결제한 금액에 대해
							<br />
							우리은행과 채무지급보증 계약을 체결하여
							<br />
							안전거래를 보장하고 있습니다.
							<br />
						</span>
						<a href="#">서비스 가입사실 확인 &gt;</a>
					</SafeService>
				</FooterContent>
			</FooterLayer_02>

			<FooterLayer_04>
				<CoupangCopyright>
					<p className="info" style={{ paddingTop: '9px' }}>
						사이버몰 내 판매되는 상품 중에는 베이크팡에 등록한 개별 판매자가
						판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
						<br /> 마켓플레이스(오픈마켓) 상품의 경우 베이크팡은
						통신판매중개자이며 통신판매의 당사자가 아닙니다. <br />
						베이크팡은 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에 대하여
						책임을 지지 않습니다. <br /> 베이크팡은 소비자 보호와 안전거래를
						위해 신뢰관리센터(test123@bakepang.com)를 운영하고 있으며, 관련
						분쟁이 발생할 경우 별도의 분쟁 처리절차에 의거 분쟁이 처리됩니다.
						<br /> Copyright © bakepang Corp. 2010-2022 All Rights Reserved.
					</p>
					{/* <SnsLink>
						<li>
							<a
								href="https://www.facebook.com/Coupang.korea"
								target="_blank"
								className="facebook"
								title="bakepang 페이스북"
							>
								bakepang 페이스북
							</a>
						</li>
						<li>
							<a
								href="https://news.coupang.com/"
								target="_blank"
								className="blog"
								title="bakepang 뉴스룸"
							>
								bakepang 뉴스룸
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/coupang"
								target="_blank"
								className="instagram"
								title="bakepang 인스타그램"
							>
								bakepang 인스타그램
							</a>
						</li>
					</SnsLink> */}
				</CoupangCopyright>
			</FooterLayer_04>
		</footer>
	);
};

export default Footer;

const FooterLayer_01 = styled.div`
	border-bottom: #ddd solid 1px;
	height: 34px;
	text-align: center;
	padding-top: 15px;
	white-space: nowrap;

	a {
		display: inline-block;
		white-space: nowrap;
		padding: 0 14px;
		font-size: 12px;
		color: #555;
		height: 12px;
		border-left: #888 solid 1px;
		&:first-child {
			border-left: 0;
		}
	}
`;

const FooterLayer_02 = styled.div`
	width: 1020px;
	height: 100px;
	margin: 30px auto;
	font-size: 12px;
	color: #555;
	line-height: 150%;
	h1 {
		a {
			background-position: -19px -34px;
			width: 117px;
			height: 34px;
		}
	}
`;

const FooterContent = styled.div`
	display: flex;
	justify-content: space-around;
	a {
		text-decoration: none;
		color: #555;
		&:last-child {
		}
		strong {
			font-weight: bold;
		}
		em {
			font-size: 24px;
			font-family: Tahoma;
			font-weight: bold;
			display: block;
			margin: 9px 0 11px 0;
		}
	}
`;

const SafeService = styled.p`
	display: flex;
	flex-direction: column;
	font-size: 11px;
	a {
		text-decoration: underline;
	}
`;

const FooterLayer_04 = styled.div`
	background: #333;
	height: 90px;
`;

const CoupangCopyright = styled.div`
	width: 1020px;
	margin: 0 auto;
	position: relative;
	p {
		padding-top: 9px;
		padding: 21px 0 3px 0;
		color: #888;
		font-size: 11px;
		line-height: 1.4;
	}
`;

const SnsLink = styled.div`
	position: absolute;
	top: 23px;
	right: 0;
	a {
		width: 34px;
		height: 34px;
		margin-right: 8px;
	}
`;
