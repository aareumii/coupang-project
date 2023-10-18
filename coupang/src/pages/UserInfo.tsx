// UserInfo.tsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
declare global {
  interface Window {
    daum: any;
  }
}
const Container = styled.div`
  max-width: 600px;
  margin: 10px auto;
  // margin-top: 12rem;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
  gap: 20px;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
`;

const Table = styled.table`
  width: 100%;
`;

const LabelCell = styled.td`
  text-align: left;
  //   padding-left: 1rem;
`;

const InputCell = styled.td`
  text-align: center;

  input {
    width: 70%;
    text-align: center;
  }
`;

const Button = styled.button`
  border: none;
  margin: 0 5px;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #0077b6;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #005694;
  }
`;

const RightAlignedButton = styled(Button)`
  margin-left: 62%;
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`;

type UserInfoType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  detailedAddress: string;
  zipCode: string;
};

const UserInfo: React.FC = () => {
  const [user, setUser] = useState<UserInfoType>({
    name: "",
    email: "",
    phone: "",
    address: "",
    detailedAddress: "",
    zipCode: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const detailAddressRef = useRef<HTMLInputElement>(null);
  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        setUser((prev) => ({
          ...prev,
          address: data.address,
          zipCode: data.zonecode,
        }));
        if (detailAddressRef.current) {
          detailAddressRef.current.focus();
        }
      },
    }).open();
  };

  useEffect(() => {
    // 주소 API 스크립트 동적 로딩
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleUpdate = () => {
    if (newPassword !== confirmPassword) {
      setShowModal(true);
      return;
    }
    if (newPassword.length < 8 || newPassword.length > 12) {
      alert("비밀번호는 8-12자리여야 합니다.");
      return;
    }
    // Update backend with the new data
  };

  const handleCancel = () => {
    window.location.href = "/user/sales";
  };

  const handleWithdrawal = () => {
    const isConfirmed = window.confirm("정말 탈퇴하시겠습니까?");
    if (isConfirmed) {
      // Call backend API to withdraw
    }
  };

  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };
  return (
    <Container>
      <h2>회원정보 수정</h2>
      <Table>
        <tbody>
          <tr>
            <LabelCell>프로필 이미지</LabelCell>
            <InputCell>
              <FlexContainer>
                {profileImage && (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile preview"
                    width="100"
                    style={{ marginLeft: "4rem" }}
                  />
                )}
                <input type="file" onChange={handleImageChange} />
              </FlexContainer>
            </InputCell>
          </tr>
          <tr>
            <LabelCell>name</LabelCell>
            <InputCell>
              <Input defaultValue={user.name} disabled />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>이메일</LabelCell>
            <InputCell>
              <Input defaultValue={user.email} disabled />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>전화번호</LabelCell>
            <InputCell>
              <Input defaultValue={user.phone} disabled />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>우편번호</LabelCell>
            <InputCell>
              <Input defaultValue={user.zipCode} disabled />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>주소</LabelCell>
            <InputCell>
              <Input defaultValue={user.address} />
            </InputCell>
            <InputCell>
              <Button
                onClick={handleAddressSearch}
                style={{ marginLeft: "-20px" }}
              >
                변경
              </Button>
            </InputCell>
          </tr>
          <tr>
            <LabelCell>상세 주소</LabelCell>
            <InputCell>
              <Input
                ref={detailAddressRef}
                defaultValue={user.detailedAddress}
                onChange={(e) => {
                  const newUser = { ...user, detailedAddress: e.target.value };
                  setUser(newUser);
                }}
              />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>새 비밀번호</LabelCell>
            <InputCell>
              <Input
                type="password"
                placeholder="새 비밀번호"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>새 비밀번호 확인</LabelCell>
            <InputCell>
              <Input
                type="password"
                placeholder="새 비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </InputCell>
          </tr>
        </tbody>
      </Table>
      {(newPassword !== confirmPassword ||
        newPassword.length < 6 ||
        newPassword.length > 12) && <ErrorText>다시 확인해주세요</ErrorText>}
      <Button onClick={handleUpdate}>수정</Button>
      <Button onClick={handleCancel}>취소</Button>
      <RightAlignedButton onClick={handleWithdrawal}>
        회원 탈퇴
      </RightAlignedButton>
      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <p>비밀번호가 일치하지 않습니다</p>
            <Button onClick={() => setShowModal(false)}>확인</Button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default UserInfo;
