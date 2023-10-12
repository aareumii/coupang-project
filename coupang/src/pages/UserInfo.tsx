// TestInfo.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  margin-top: 12rem;
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

const Label = styled.label`
  display: block;
  margin-bottom: 2px;
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

const UserInfo: React.FC = () => {
  const [user, setUser] = useState({
    ID: "",
    email: "",
    phoneNumber: "",
    address: "",
    addressDetail: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Here, fetch data from backend user info API and set to user state
    // setUser({ ID: 'fetchedID', email: 'fetchedEmail', ... });
  }, []);

  const handleUpdate = () => {
    if (newPassword !== confirmPassword) {
      setShowModal(true);
      return;
    }
    if (newPassword.length < 6 || newPassword.length > 12) {
      alert("비밀번호는 6-12자리여야 합니다.");
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
            <LabelCell>ID</LabelCell>
            <InputCell>
              <Input defaultValue={user.ID} disabled />
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
              <Input defaultValue={user.phoneNumber} disabled />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>주소</LabelCell>
            <InputCell>
              <Input defaultValue={user.address} />
            </InputCell>
            <Button style={{ marginLeft: "-20px" }}>변경</Button>
          </tr>
          <tr>
            {" "}
            <LabelCell>상세 주소</LabelCell>
            <InputCell>
              <Input
                defaultValue={user.addressDetail}
                onChange={(e) => {
                  const newUser = { ...user, addressDetail: e.target.value };
                  setUser(newUser);
                }}
              />
            </InputCell>
          </tr>{" "}
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
      <Button onClick={handleWithdrawal}>회원 탈퇴</Button>
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
