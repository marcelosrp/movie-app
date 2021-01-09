import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import PropTypes from "prop-types";

import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";

import * as S from "./styles";

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <SearchInput />
      <SearchButton />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
