import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderWapper>
        <HeaderContainer>
          <HeaderNav>
            <p>즐겨찾기</p>
            <p>입점신청 ▼</p>
          </HeaderNav>
          <MembershipNav>
            <p>로그인</p>
            <p>회원가입</p>
            <p>고객센터</p>
          </MembershipNav>
        </HeaderContainer>
      </HeaderWapper>
    </>
  );
};

export default Header;

const HeaderWapper = styled.div`
  width: 100vw;
  /* margin: auto; */
  height: 2rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
`;

const HeaderNav = styled.div`
  display: flex;
  gap: 10px;
  > p {
    color: black;
    font-size: 0.1rem;
  }
`;

const MembershipNav = styled.div`
  display: flex;
  gap: 10px;
  > p {
    color: black;
    font-size: 0.1rem;
  }
`;

const HeaderContainer = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;

  justify-content: space-between;
`;
