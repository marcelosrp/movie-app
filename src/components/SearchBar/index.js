import React from "react";
import { Link } from "react-router-dom";

import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";

import * as S from "./styles";

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <SearchInput />
      <SearchButton />
      <Link to="/" className="btn-home">
        Home
      </Link>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
