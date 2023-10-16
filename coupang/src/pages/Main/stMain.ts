import styled from "styled-components";

export const StMain = styled.div`
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

// const SearchBox = styled.div`
//   position: relative;
//   text-align: center;
//   width: 640px;
//   height: 30px;
//   margin: 0 5px;
//   border: 0.1rem solid #4285f4;

//   .input {
//     padding-top: 7px;

//     width: 100%;
//     border: none;
//     &:focus {
//       outline: none;
//     }
//   }
// `;

// const ItemListWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   margin-top: 20px;
//   width: 100%;
//   height: 330px;
// `;
