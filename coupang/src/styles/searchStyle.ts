import styled from "styled-components";

export const StSearchBox = styled.div`
  position: relative;
  width: 700px;
  height: 40px;
  margin: 0 5px;
  border: 0.1rem solid #4285f4;
  .input {
    width: 90%;
    height: 90%;
    border: none;
    display: block;
    &:focus {
      outline: none;
    }
    font-size: 1rem;
  }
  .search__icon {
    color: #4285f4;
    height: 100%;
  }
  .form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
