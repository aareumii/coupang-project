import { MdArrowForwardIos } from 'react-icons/md';
import { TiShoppingCart } from 'react-icons/ti';
import Bakepang from '../../assets/headerImg/Bakepang.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import itemImg from '../../assets/itemImg.jpg';
import { PiPlusSquareThin, PiEquals } from 'react-icons/pi';

function Cartpage() {
	return (
		<Wrap>
			<Logo>
				<Link to={'/'}>
					<img src={Bakepang} alt="로고" />
				</Link>
			</Logo>
			<Container>
				<HeaderWrap>
					<TitleWrap>
						<TiShoppingCart color="#5e5e5e" />
						<h2>장바구니</h2>
					</TitleWrap>
					<StepWrap>
						<CartStep>
							<span>01</span>
							<p>장바구니</p>
						</CartStep>
						<span>
							<MdArrowForwardIos color="#afafaf" />
						</span>
						<div>
							<span>02</span>
							<p>주문/결제</p>
						</div>
					</StepWrap>
				</HeaderWrap>
				<TableWrap>
					<CartAmount>
						{/* 장바구니에 담긴 총 상품 개수 = api로 받아온 배열의 legnth */}
						{/* <p>장바구니 상품 &#40; {cartItems.length} &#41;</p> */}
						<p>장바구니에 담은 상품이 없습니다.</p>
					</CartAmount>
					<CartItemTable>
						<colgroup>
							<col width="3%" />
							<col width="17%" />
							<col width="45%" />
							<col width="15%" />
							<col width="10%" />
							<col width="10%" />
						</colgroup>
						<thead>
							<tr>
								<td>
									<input type="checkbox" className="allcheck" />
								</td>
								<td style={{ textAlign: 'left ' }}>전체선택</td>
								<td>상품정보</td>
								<td></td>
								<td>상품금액</td>
								<td>배송비</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" className="allcheck" />
								</td>

								<td style={{ textAlign: 'left ' }}>
									<img src={itemImg} />
								</td>
								<td style={{ textAlign: 'left ' }}>
									<ProductName>상품명</ProductName>
									<ProductDetail>상품설명</ProductDetail>
								</td>
								<SelectBox>
									<select
										style={{
											fontSize: '12px',
											textAlign: 'left',
										}}
									>
										<option value={1}>1</option>
										<option value={2}>2</option>
										<option value={3}>3</option>
										<option value={4}>4</option>
										<option value={5}>5</option>
									</select>
									<button>X</button>
								</SelectBox>
								<td
									style={{
										border: ' 1px solid #eaeaea',
										color: '#111111',
										fontSize: '12px',
									}}
								>
									14,000
								</td>
								<td
									style={{
										color: '#111111',
										fontSize: '12px',
									}}
								>
									무료
								</td>
							</tr>
							{/* 장바구니 api 받아와서 map으로 보여주기 */}
							{/* {cartItems.map((item) => (
                <CartItem
                // key={item.id}
                // item={item}
                // selectedItems={selectedItems}
                // setSelectedItems={setSelectedItems}
                />
            ))} */}
						</tbody>
					</CartItemTable>
				</TableWrap>
				<SelectWrap>
					<input type="checkbox" />
					<p>전체 선택</p>
					<button>선택삭제</button>
				</SelectWrap>
				<PriceWrap>
					<TotalPriceWrap>
						<p>총 상품가격</p>
						<Price>14,000</Price>
						<p>원</p>
					</TotalPriceWrap>
					<PiPlusSquareThin />
					<TotalShippingPriceWrap>
						<p>총 주문금액</p>
						<Price>0</Price>
						<p>원</p>
					</TotalShippingPriceWrap>
					<PiEquals />
					<TotalSumPriceWrap>
						<p>총 주문금액</p>
						<SumPrice>14,000</SumPrice>
						<p>원</p>
					</TotalSumPriceWrap>
				</PriceWrap>
				<ButtonWrap>
					<ContinueButton>계속 쇼핑하기</ContinueButton>
					<BuyButton>구매하기</BuyButton>
				</ButtonWrap>
			</Container>
		</Wrap>
	);
}

export default Cartpage;

const Wrap = styled.div`
	width: 100%;
	padding: 40px 0;
	margin: 0 auto;
	background-color: #f2f2f2;
`;

const Logo = styled.div`
	width: 980px;
	margin: 0 auto;
	padding: 20px 0 10px;
	img {
		width: 140px;
	}
`;
const Container = styled.div`
	width: 900px;
	border: 1px solid #e0e0e0;
	margin: 0 auto 70px;
	padding: 40px 39px;
	background: #fff;
`;

const HeaderWrap = styled.div`
	width: 100%;
	height: 45px;
	padding-bottom: 32px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

const TitleWrap = styled.div`
	display: flex;
	font-size: 1.6rem;
	font-weight: 500;
	letter-spacing: -2px;
`;

const StepWrap = styled.div`
	display: flex;
	color: #d4d4d4;
	span {
		font-size: 1rem;
		font-weight: bold;
	}
	p {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: bold;
	}
`;

const CartStep = styled.div`
	span {
		font-size: 1rem;
		color: #299fe0;
		font-weight: bold;
	}
	p {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: bold;
		color: #000;
	}
`;

const TableWrap = styled.div`
	background: #fafafa;
`;

const CartAmount = styled.div`
	width: 100%;
	background-color: #eaeaea;
	padding: 30px 0;
	margin-bottom: 10px;
	text-align: center;
	p {
		font-weight: 700;
		font-size: 14px;
		color: #55575f;
	}
`;

const CartItemTable = styled.table`
	width: 100%;
	text-align: center;

	thead {
		height: 40px;
		line-height: 40px;
		font-size: 13px;
		color: #111111;
		border-top: 1px solid #eaeaea;
		border-bottom: 1px solid #eaeaea;
	}
	tbody {
		background-color: #fff;

		tr {
			border-top: 1px solid #eaeaea;
			border-bottom: 1px solid #eaeaea;
			td {
				vertical-align: middle;
				padding: 10px;
				img {
					width: 78px;
					height: 78px;
					padding: 10px 5px 10px 15px;
					text-align: left;
					vertical-align: top;
				}
			}
		}
	}
`;

const ProductName = styled.div`
	border-bottom: 1px solid #e2e5e7;
	padding-bottom: 5px;
	letter-spacing: -1px;
	margin-left: 5px;
	font-weight: 700;
	font-size: 14px;
	transform: translateY(-50%);
	color: #55575f;
`;
const ProductDetail = styled.div`
	letter-spacing: normal;
	font-size: 12px;
	color: #888;
	margin-left: 5px;
	position: relative;
`;

const SelectBox = styled.td`
	select {
		width: 65%;
		height: 20px;
		text-align: left;
	}
	button {
		background-color: #fff;
		margin-left: 5px;
		border: 2px solid #888;
		color: #888;
		border-radius: 2px;
		cursor: pointer;
	}
`;

const SelectWrap = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	p {
		margin-left: 15px;
		font-size: 12px;
		cursor: pointer;
	}
	button {
		display: inline-block;
		margin-left: 10px;
		padding: 4px 5px;
		border: 1px solid #ccc;
		text-align: center;
		font-size: 12px;
		color: #111;
		font-weight: 500;
		background-color: #fff;
		cursor: pointer;
	}
`;

const PriceWrap = styled.div`
	width: 100%;
	margin: 30px 0;
	padding: 15px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 4px solid #c8c8c8;
	text-align: center;
`;

const TotalPriceWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	p {
		font-size: 14px;
		line-height: 17px;
		color: #555;
		text-align: center;
	}
`;

const Price = styled.div`
	padding: 0 4px 0 5px;
	font: 700 17px/17px tahoma;
	color: #111;
`;

const TotalShippingPriceWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	margin-left: 10px;
	p {
		font-size: 14px;
		line-height: 17px;
		color: #555;
		text-align: center;
	}
`;
const TotalSumPriceWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
	p {
		font-size: 14px;
		line-height: 17px;
		color: #555;
		text-align: center;
	}
`;

const SumPrice = styled.div`
	padding: 0 4px 0 5px;
	font: 700 20px/20px tahoma;
	color: #ea0000;
`;

const ButtonWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 80px 0 20px;
`;

const ContinueButton = styled.button`
	font-size: 22px;
	font-weight: 700;
	display: inline-block;
	margin: 10px;
	width: 216px;
	line-height: 18px;
	border: 2px solid #0073e9;
	border-radius: 4px;
	padding: 22px 0 19px;
	text-align: center;
	background-color: #fff;
	color: #0073e9;
	cursor: pointer;
`;

const BuyButton = styled.button`
	font-size: 22px;
	font-weight: 700;
	display: inline-block;
	margin: 10px;
	width: 216px;
	line-height: 18px;
	border: 2px solid #0073e9;
	border-radius: 4px;
	padding: 22px 0 19px;
	text-align: center;
	background-color: #0073e9;
	color: #fff;
	cursor: pointer;
`;
