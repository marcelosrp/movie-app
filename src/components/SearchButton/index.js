import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import PropTypes from "prop-types";

import { MdSearch } from "react-icons/md";

import * as S from "./styles";

const SearchButton = () => {
  const { handleClickSearch } = useContext(GlobalContext);
  return (
    <S.SearchButton onClick={handleClickSearch}>
      <MdSearch />
    </S.SearchButton>
  );
};

SearchButton.propTypes = {
  handleClickSearch: PropTypes.func,
};

export default SearchButton;
