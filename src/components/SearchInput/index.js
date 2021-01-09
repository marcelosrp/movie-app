import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import PropTypes from "prop-types";

import * as S from "./styles";

const SearchInput = () => {
  return <S.SearchInput name="search" type="text" placeholder="Search..." />;
};

export default SearchInput;
