import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Bakepang from "../../assets/headerImg/Bakepang.png";
import DaumPostcode from "react-daum-postcode";

// import { sendSms, verifySms } from '../../api/sms';

const SignupPage = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [certificationNumber, setCertificationNumber] = useState("");

  // 각 필드의 에러 상태
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [certificationNumberError, setCertificationNumberError] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImg(selectedImage); // 선택한 이미지를 img 상태에 저장
  };

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender); // gender 값을 설정
  };

  // 유효성 검사 함수들...
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      password.length <= 20 &&
      /[a-z]/.test(password) &&
      /\d/.test(password)
    );
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const validateName = (name) => {
    return name && name.length > 0;
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10,11}$/; // 간단한 예시로 10~11자리 숫자
    return phoneRegex.test(phone);
  };

  const certificationNumberCode = (code) => {
    return code.length === 4;
  };

  // 각 입력값 변경 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("유효한 이메일 주소를 입력하세요.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError("비밀번호는 최소 8자 이상이어야 합니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (!validateConfirmPassword(password, e.target.value)) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!validateName(e.target.value)) {
      setNameError("이름을 입력하세요.");
    } else {
      setNameError("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (!validatePhone(e.target.value)) {
      setPhoneError("유효한 휴대폰 번호를 입력하세요.");
    } else {
      setPhoneError("");
    }
  };

  const handleVerificationCodeChange = (e) => {
    setCertificationNumber(e.target.value);
    if (!certificationNumberCode(e.target.value)) {
      setCertificationNumberError("유효한 인증 번호를 입력하세요.");
    } else {
      setCertificationNumberError("");
    }
  };

  // 다음 우편번호 관련 핸들러
  const handleOpenAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const handleCloseAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleAddressSelected = (data) => {
    setPostcode(data.zonecode);
    setAddress(data.address);
    setIsAddressModalOpen(false);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate("/login"); // 로그인 경로로 이동
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(
        "http://43.201.30.126:8080/api/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            gender,
            postcode,
            address,
            detailedAddress,
            phone,
            certificationNumber,
          }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setIsSuccessModalOpen(true); // 가입 성공 시 모달을 표시
      } else {
        alert("가입 실패: " + data.message);
      }
    } catch (error) {
      console.error("API 호출 오류:", error.message);
      alert("서버에 연결할 수 없습니다.");
    }
  };

  return (
    <div className="page">
      <Container>
        <h1>
          <Link to={"/"}>
            <img src={Bakepang} alt="로고" />
          </Link>
        </h1>
        <p>회원정보를 입력해주세요</p>
        <ProfileWrap>
          <ProfileImgWrap>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="img"
            />
            <p>프로필 사진</p>
            {img && (
              <img
                src={URL.createObjectURL(img)}
                alt="프로필 이미지 미리보기"
              />
            )}
            <label className="input-file-button" htmlFor="img">
              업로드
            </label>
          </ProfileImgWrap>
        </ProfileWrap>
        <GenderWrap>
          <label htmlFor="gender">성별</label>
          <SelectWrap>
            <div>
              <GenderSelect
                id="gender"
                name="gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <option value="male">남성</option>
                <option value="female">여성</option>
              </GenderSelect>
            </div>
          </SelectWrap>
        </GenderWrap>
        <FormContainer>
          <div>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={handleNameChange}
              id="name"
            />
            <div>
              <FormError>{nameError}</FormError>
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="아이디(이메일)"
              value={email}
              onChange={handleEmailChange}
              id="email"
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
              onChange={handlePasswordChange}
              id="password"
            />
            <div>
              <FormError>{passwordError}</FormError>
            </div>
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              id="confirmPassword"
            />
            <div>
              <FormError>{confirmPasswordError}</FormError>
            </div>
          </div>
          <AddressWrap>
            <label>우편번호</label>
            <input type="text" value={postcode} id="postcode" readOnly />
            <PostCodeButton onClick={handleOpenAddressModal}>
              우편번호 찾기
            </PostCodeButton>
            <br />
            <label htmlFor="address">주소</label>
            <input type="text" value={address} id="address" readOnly />
            {/* 모달 상태에 따라 DaumPostcode 컴포넌트를 조건부 렌더링 */}
            {isAddressModalOpen && (
              <ModalOverlay
                style={{ width: "50%", height: "100%", padding: "50px" }}
              >
                <DaumPostcode
                  onComplete={handleAddressSelected}
                  autoClose
                  style={{ width: "70%", height: "70%" }}
                />
                <CloseButton onClick={handleCloseAddressModal}>x</CloseButton>
              </ModalOverlay>
            )}
            <br />
            <label htmlFor="detaildeAddress">상세 주소</label>
            <input
              type="text"
              value={detailedAddress}
              onChange={(e) => setDetailedAddress(e.target.value)}
              placeholder="상세 주소를 입력하세요"
              id="detailedAddress"
            />
          </AddressWrap>
          <div>
            <TelNumWrap>
              <p>휴대폰 번호</p>
              <input
                type="text"
                placeholder="휴대폰 번호"
                value={phone}
                onChange={handlePhoneChange}
                id="phone"
              />
              <TelNumberSend>휴대폰 인증</TelNumberSend>
            </TelNumWrap>
            <div>
              <FormError>{phoneError}</FormError>
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="휴대폰 번호 인증"
              value={certificationNumber}
              onChange={handleVerificationCodeChange}
              id="certificationNumber"
            />
            <div>
              <FormError>{certificationNumberError}</FormError>
            </div>
            <TelNumberConfirm>인증번호 확인</TelNumberConfirm>
          </div>
        </FormContainer>
        <hr />
        <SignUpButton onClick={handleSignup}>가입하기</SignUpButton>

        {isSuccessModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <p>가입 완료되었습니다.</p>
              <CloseButton onClick={handleCloseSuccessModal}>닫기</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}

        <p>
          이미 계정이 있습니까? &nbsp;
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: " #346aff" }}
          >
            로그인
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default SignupPage;

const Container = styled.div`
  width: 100vw;
  max-width: 460px;
  min-width: 290px;
  margin: 0 auto;
  padding-bottom: 30px;

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
  p {
    padding: 20px 0 10px 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    letter-spacing: normal;
    color: #111;
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

const ProfileWrap = styled.div`
  display: flex;
  position: relative;
`;

const ProfileImgWrap = styled.div`
  width: 100%;
  margin: 10px 0 40px;
  label {
    padding: 10px 0 10px 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    letter-spacing: normal;
    color: #111;
  }
  .input-file-button {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 3px 20px;
    background-color: #ff6600;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  input[type="file"] {
    display: none;
  }

  img {
    width: 460px;
    height: 400px;
    object-fit: cover;
  }
`;

const GenderWrap = styled.div`
  width: 50%;
  display: flex;
  margin-top: 30px;

  label {
    padding: 10px 0 10px 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    letter-spacing: normal;
    color: #111;
  }
`;

const GenderSelect = styled.select`
  width: 100%;
  padding: 10px 50px;
  border: 1px solid #e8e8e8;
  background: none transparent;
  font-family: dotum, sans-serif;
  font-size: 14px;
  color: #111;
  font-weight: 700;
  text-indent: 12px;
  border-radius: 4px;
  option {
    width: 100%;
  }
  &:focus {
    outline: none;
    border: 2px solid #346aff;
  }
`;

const SelectWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 24px;
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
    input:focus {
      outline: none; /* 기본 포커스 효과 제거 */
      border-bottom: 2px solid #346aff; /* 포커스 상태일 때 원하는 색상으로 변경 */
    }
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

const TelNumWrap = styled.div`
  display: flex;
  width: 100%;
`;

const TelNumberSend = styled.button`
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

const TelNumberConfirm = styled.button`
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

const ModalOverlay = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100; /* 다른 내용 위에 오도록 설정 */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  background-color: #000;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  width: 100%;
  font-family: apple sd gothic neo, malgun gothic, nanumbarungothic, nanumgothic,
    dotum, sans-serif;
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
`;

const AddressWrap = styled.div`
  label {
    padding: 10px 0 10px 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    letter-spacing: normal;
    color: #111;
  }
`;

const PostCodeButton = styled.button`
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

const ModalContent = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const ErrorContainer = styled.div`
  color: #e52528;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;
