import React from "react";
import styled from "styled-components";

const ItemFilter = () => {
  return (
    <div>
      <FilterWrap>
        <FilterContainer>
          <div>낮은가격순</div>
          <div>높은가격순</div>
          <div>판매량순</div>
          <div>최신순</div>
        </FilterContainer>
      </FilterWrap>
    </div>
  );
};

export default ItemFilter;

const FilterWrap = styled.div`
  /* margin: auto; */

  height: 2rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  margin-top: 100px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  > div {
    color: black;
    font-size: 0.1rem;
    margin-left: 10px;
    padding-right: 10px;
    border-right: 1px solid #d2d0d0;
  }
`;
