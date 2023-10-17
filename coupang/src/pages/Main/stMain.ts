import styled from "styled-components";

export const StMain = styled.div`
  position: relative;
  .header {
    width: 75vw;
    margin: auto;
    display: flex;
    /* gap: 50px; */
    align-items: center;
    justify-content: center;
    /* padding-top: 25px; */
    z-index: 20;
    position: relative;
    /* margin-bottom: 30px; */
  }
  .logo {
    margin-left: 20px;
    padding-right: 10px;
    width: 170px;
    height: 50px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 50px;
      height: 10px;
    }
  }
  .main {
    width: 60vw;
    margin: auto;
    padding-top: 40px;
    padding-left: 160px;
    @media screen and (max-width: 1024px) {
      width: 75vw;
    }
  }
`;
