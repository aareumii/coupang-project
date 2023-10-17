import styled from "styled-components";

export const StCategory = styled.div`
  position: relative;
  .header {
    width: 70vw;
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
  a {
    text-decoration: none;
    outline: none;
    color: #000;
  }

  a:visited,
  a:active {
    color: #000;
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
  main {
    width: 65vw;
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
