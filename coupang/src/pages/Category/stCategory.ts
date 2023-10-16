import styled from "styled-components";

export const StCategory = styled.div`
  position: relative;
  .header {
    width: 72vw;
    margin: auto;
    display: flex;
    /* gap: 50px; */
    align-items: center;
    /* padding-top: 25px; */
    z-index: 20;
    position: relative;
    /* margin-bottom: 30px; */
  }
  .logo {
    padding-left: 10px;

    width: 150px;
    height: 40px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 50px;
      height: 10px;
    }
  }
  main {
    width: 70vw;
    margin: auto;
    padding-top: 30px;
    padding-left: 160px;
    @media screen and (max-width: 1024px) {
      width: 80vw;
    }
  }
  .cate__title {
    font-size: large;
    font-weight: 600;
  }
`;
