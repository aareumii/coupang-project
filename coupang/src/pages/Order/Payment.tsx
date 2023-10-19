import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { CartItemType } from "../../types/cart";
import { UserType } from "../../types/user";
import tosspay from "../../assets/tosspay.png";

import { postOrder } from "../../api/order";

type UserProps = {
  userData: UserType;
  selectedItems: CartItemType[];
  totalOrderAmount: number;
};

const Payment: FC<UserProps> = ({
  userData,
  selectedItems,
  totalOrderAmount,
}) => {
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState("계좌이체");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountValid, setAccountValid] = useState(true);

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.value);
    setAccountNumber("");
    setAccountValid(true);
  };

  const handleAccountNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isNumber = /^[0-9]*$/.test(e.target.value);
    if (isNumber && e.target.value.length <= 14) {
      setAccountNumber(e.target.value);
    }
  };

  const validateAccountNumber = () => {
    if (accountNumber.length === 0) {
      setAccountValid(true);
    } else if (accountNumber.length < 11) {
      setAccountValid(false);
      setAccountNumber("");
    } else {
      setAccountValid(true);
    }
  };

  const handleTossPay = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const tossClientKey = process.env.REACT_APP_TOSS_CLIENT_KEY;
    if (!tossClientKey) {
      console.error("토스 클라이언트 키가 설정되지 않았습니다.");
      return;
    }
    const tossPayment = await loadTossPayments(tossClientKey);

    tossPayment
      .requestPayment("카드", {
        amount: totalOrderAmount,
        orderId: Math.random().toString(36).slice(2),
        orderName: "주문",
        customerName: userData.name,
      })
      .then(async function (data) {
        const { orderId, paymentKey, amount } = data;
        const secretKey = process.env.REACT_APP_TOSS_SECRET_KEY;

        const url = `https://api.tosspayments.com/v1/payments/confirm`;
        const basicToken = btoa(`${secretKey}:`);

        const confirmResponse = fetch(url, {
          method: "post",
          body: JSON.stringify({
            amount,
            orderId,
            paymentKey,
          }),
          headers: {
            Authorization: `Basic ${basicToken}`,
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
        console.log("confirmResponse", confirmResponse);

        postOrder(selectedItems.map((item) => item.cartProductId))
          .then((res) => {
            console.log(res, "주문 성공");
            navigate("/order/result?success=true");
          })
          .catch((error) => {
            console.error("주문 중 오류 발생", error);
            navigate("/order/result?success=false");
          });

        navigate("/order/result?success=true");
      })
      .catch((error) => {
        console.error("토스 결제 중 오류발생,", error);
        if (error.code === "USER_CANCEL") {
          console.error("결제창이 닫아졌습니다.");
        }
        navigate("/order/result?success=false");
      });
    sessionStorage.clear();
  };

  return (
    <Wrap>
      <Title>결제정보</Title>
      <Table>
        <tbody>
          <tr>
            <th>총결제금액</th>
            <td>{totalOrderAmount}원</td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td>
              <SelectBox>
                <div>
                  <input
                    type="radio"
                    id="계좌이체"
                    value="계좌이체"
                    checked={selectedPayment === "계좌이체"}
                    onChange={handlePaymentChange}
                  />
                  <label htmlFor="계좌이체">계좌이체</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="tosspay"
                    value="tosspay"
                    checked={selectedPayment === "tosspay"}
                    onChange={handlePaymentChange}
                  />
                  <label htmlFor="tosspay">tosspay</label>
                </div>
              </SelectBox>
              <PaymentFormBox>
                {selectedPayment === "계좌이체" && (
                  <div className="account">
                    <select name="account" id="account">
                      <option value="농협은행">농협은행</option>
                      <option value="신한은행">신한은행</option>
                      <option value="국민은행">국민은행</option>
                      <option value="기업은행">기업은행</option>
                      <option value="카카오뱅크">카카오뱅크</option>
                    </select>
                    <div className="account-number">
                      <span>계좌번호</span>
                      <input
                        type="text"
                        value={accountNumber}
                        onChange={handleAccountNumberChange}
                        onBlur={validateAccountNumber}
                        placeholder="숫자만 입력하세요"
                        required={selectedPayment === "계좌이체"}
                      />
                    </div>
                  </div>
                )}

                {selectedPayment === "tosspay" && (
                  <div className="tosspay">
                    <button onClick={handleTossPay}>
                      <img src={tosspay} alt="tosspay" />
                    </button>
                  </div>
                )}
              </PaymentFormBox>
              {!accountValid && (
                <ErrorAccountMessage>잘못된 계좌번호입니다</ErrorAccountMessage>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </Wrap>
  );
};

export default Payment;

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #373b3f;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-top: 2px solid #cecece;
  font-size: 0.875rem;
  tr {
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }
  th {
    width: 120px;
    font-weight: bold;
    text-align: right;
    padding: 14px 10px;
    border-right: 1px solid #ebebeb;
    background-color: #f4f4f4;
  }
  td {
    text-align: left;
    padding: 14px 10px;
  }
`;

const SelectBox = styled.div`
  display: flex;
  margin-bottom: 14px;
  div {
    margin-right: 10px;
  }
`;

const PaymentFormBox = styled.div`
  width: calc(100% - 20px);
  padding: 15px 10px;
  border: 2px solid #c5c7cd;
  background-color: #f4f6fa;
  select {
    padding: 3px;
    margin-right: 15px;
  }
  input {
    font-size: 0.875rem;
  }
  span {
    margin-right: 5px;
  }
  button {
    padding: 20px 30px;
    border-radius: 3px;
    border: 1px solid #6e6e6e;
    background-color: #fff;
    cursor: pointer;
  }
  .account {
    display: flex;
  }
  .paymoney {
    .paymoney-info {
      padding-bottom: 14px;
      margin-bottom: 14px;
      border-bottom: 1px solid #a3a3a3;
      font-weight: 700;
      span:first-child {
        &::before {
          content: " • ";
        }
        margin-right: 20px;
      }
    }
    p {
      font-size: 0.75rem;
    }
  }
  .tosspay {
    img {
      width: 100px;
    }
  }
`;

const ErrorAccountMessage = styled.div`
  color: #fd0000;
  font-size: 0.875rem;
  font-weight: 700;
  margin: 10px 0 0 10px;
`;
