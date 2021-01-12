import React, { createContext, useState, useEffect, useCallback } from "react";
import { API_URL, SEARCH_API } from "./services/api";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [hasSearchKeyword, setHasSearchKeyword] = useState(false);
  const [researchedMovieList, setResearchedMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalOverview, setModalOverview] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const [inputError, setInputError] = useState(false);

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL + currentPage);
      if (!response.ok) throw new Error("Deu ruim!");

      if (response.status === 200) {
        const data = await response.json(response);
        setMovieList(data.results);
        setTotalPages(data.total_pages);
        setIsLoading(false);
      }
    } catch (error) {}
  }, [currentPage]);

  function handleOpenModal(movieTitle, movieOverview) {
    setIsOpen(true);
    setModalOverview({ title: movieTitle, overview: movieOverview });
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleChangeSearch({ target }) {
    setSearchKeyWord(target.value);
  }

  function handleClickSearch() {
    if (searchKeyWord) {
      setInputError(false);
      setHasSearchKeyword(true);
      getMoviesBySearch(searchKeyWord);
      sessionStorage.setItem("term", searchKeyWord);
    } else {
      setInputError(true);
    }
  }

  async function getMoviesBySearch(movie) {
    try {
      setIsLoading(true);
      const response = await fetch(SEARCH_API + movie);

      if (!response.ok) throw new Error("Deu ruim!");

      if (response.status === 200) {
        const data = await response.json(response);
        setResearchedMovieList(data.results);
        setHasSearchKeyword(false);
        setIsLoading(false);
      }
    } catch (error) {}
  }

  function getPrevPage() {
    if (currentPage > 1) setCurrentPage((currentPage) => currentPage - 1);
  }

  function getNextPage() {
    if (currentPage < totalPages)
      setCurrentPage((currentPage) => currentPage + 1);
  }

  function setPage(page) {
    setCurrentPage(page);
  }

  function GoToFirstPage() {
    setCurrentPage(1);
  }

  function GoToLastPage() {
    setCurrentPage(totalPages);
  }

  useEffect(() => {
    const sessionTermSearch = sessionStorage.getItem("term");
    if (sessionTermSearch) getMoviesBySearch(sessionTermSearch);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    getMovies();
  }, [getMovies]);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        movieList,
        modalIsOpen,
        modalOverview,
        searchKeyWord,
        hasSearchKeyword,
        researchedMovieList,
        currentPage,
        totalPages,
        inputError,
        handleChangeSearch,
        handleOpenModal,
        handleCloseModal,
        handleClickSearch,
        getPrevPage,
        getNextPage,
        setPage,
        GoToLastPage,
        GoToFirstPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
