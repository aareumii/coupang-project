import styled from "styled-components";

export const StFilter = styled.div`
  /* margin: auto; */
  height: 1.8rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  margin-top: 30px;
  .filter {
    display: flex;
    gap: 10px;
    cursor: pointer;

    > button {
      background: inherit;
      border: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
      overflow: visible;
      cursor: pointer;
      color: black;
      font-size: 0.8rem;
      margin-left: 10px;
      padding-right: 10px;
    }
    .bar {
      border-right: 1px solid #d2d0d0;
    }
  }
`;