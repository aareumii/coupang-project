import styled from "styled-components";

const StyledRegisterForm = styled.div`
  background-color: #fff;
  border: 2px solid #ccc; /* 전체 폼의 테두리 스타일 설정 */
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  /* 상품 이름과 상품 설명의 테두리 스타일 설정 */
  input[name="product"],
  input[name="description"] {
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 16px;
  }

  /* 미디어 입력의 테두리 스타일 설정 */
  input[name="media"] {
    border: 1px solid #ccc; /* 미디어 입력의 테두리 스타일을 다르게 지정 */
    padding: 8px;
    margin-bottom: 16px;
  }

  /* 가격 입력의 테두리 스타일 설정 */
  input[name="price"] {
    border: 1px solid #ccc; /* 가격 입력의 테두리 스타일을 다르게 지정 */
    padding: 8px;
    margin-bottom: 16px;
  }

  input[name="quantity"] {
    border: 1px solid #ccc; /* 가격 입력의 테두리 스타일을 다르게 지정 */
    padding: 8px;
    margin-bottom: 16px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 12px 24px; /* 버튼의 패딩을 조정하여 길게 만듭니다 */
    border: none;
    cursor: pointer;
  }
`;

export { StyledRegisterForm, StyledForm };
