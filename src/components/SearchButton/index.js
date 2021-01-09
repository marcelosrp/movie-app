import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import PropTypes from "prop-types";

import { MdSearch } from "react-icons/md";

import * as S from "./styles";

const SearchButton = () => {
  return (
    <S.SearchButton>
      <MdSearch />
    </S.SearchButton>
  );
};

export default SearchButton;
