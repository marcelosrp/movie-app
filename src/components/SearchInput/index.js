import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import PropTypes from "prop-types";

import * as S from "./styles";

const SearchInput = () => {
  const { handleChangeSearch, searchKeyWord } = useContext(GlobalContext);
  return (
    <S.SearchInput
      onChange={handleChangeSearch}
      value={searchKeyWord}
      name="search"
      type="text"
      placeholder="Search..."
    />
  );
};

SearchInput.propTypes = {
  handleChangeSearch: PropTypes.func,
  searchKeyWord: PropTypes.string,
};

export default SearchInput;
