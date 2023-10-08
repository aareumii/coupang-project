import styled from "styled-components";

export const StyledInventoryList = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; 
  
  h4 {
    margin-bottom: 16px;
  }

  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 84.2%; 
    margin: 10px 60px; 
    padding: 20px;
  }

  th, td {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 3px;
    border-radius: 4px;
    text-align: center; 
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
