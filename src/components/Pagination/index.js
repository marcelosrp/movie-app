import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";

import * as S from "./styles";

const Pagination = () => {
  const {
    currentPage,
    totalPages,
    getPrevPage,
    getNextPage,
    setPage,
    GoToLastPage,
    GoToFirstPage,
  } = useContext(GlobalContext);

  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > totalPages) rightSide = totalPages;

  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <S.PaginationButton
        key={number}
        {...(number === currentPage && { active: true })}
        onClick={() => setPage(number)}
      >
        {number}
      </S.PaginationButton>
    );
  }

  return (
    <S.PaginationWrapper>
      <S.PaginationButton
        title="First page"
        onClick={GoToFirstPage}
        disabled={currentPage === 1 && true}
      >
        First page
      </S.PaginationButton>

      <S.PaginationButton
        title="Prev page"
        onClick={getPrevPage}
        disabled={currentPage === 1 && true}
      >
        <MdChevronLeft />
      </S.PaginationButton>
      {items}

      <S.PaginationButton
        title="Next page"
        onClick={getNextPage}
        disabled={currentPage === totalPages && true}
      >
        <MdChevronRight />
      </S.PaginationButton>

      <S.PaginationButton
        title="Last page"
        onClick={GoToLastPage}
        disabled={currentPage === totalPages && true}
      >
        Last page
      </S.PaginationButton>
    </S.PaginationWrapper>
  );
};

export default Pagination;
