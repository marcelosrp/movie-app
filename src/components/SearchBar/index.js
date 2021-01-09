import React from "react";
import { Link, useLocation } from "react-router-dom";

import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";

import * as S from "./styles";

const SearchBar = () => {
  const location = useLocation();

  return (
    <S.SearchBarContainer>
      <SearchInput />
      <SearchButton />
      {location.pathname !== "/" && (
        <Link to="/" className="btn-home">
          Home
        </Link>
      )}
    </S.SearchBarContainer>
  );
};

export default SearchBar;
