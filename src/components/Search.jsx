import React, {memo} from "react";
import styled from "styled-components";

const SearchInputWrapper = styled.div`
  width: 100%;
  dispaly: flex:
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SearchInput = styled.input`
  border-radius: 25px;
  width: 40%;
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.55);
  padding: 20px 20px;
  margin-bottom: 20px;
  border: none;
  &:focus {
    outline-width: 0;
  }
`;

const Search = ({searchParam, setSearchParam}) => {
  return (
    <SearchInputWrapper>
      <SearchInput
        placeholder="Search by episode title..."
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
    </SearchInputWrapper>
  );
};

export default memo(Search);
