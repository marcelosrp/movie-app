import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "./services/api";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalOverview, setModalOverview] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [hasSearchKeyword, setHasSearchKeyword] = useState(false);

  async function getMovies() {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Deu ruim!");

      if (response.status === 200) {
        const data = await response.json(response);
        setMovieList(data.results);
        setIsLoading(false);
      }
    } catch (error) {}
  }

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
    if (searchKeyWord) setHasSearchKeyword(true);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        movieList,
        modalIsOpen,
        handleOpenModal,
        handleCloseModal,
        modalOverview,
        handleChangeSearch,
        searchKeyWord,
        handleClickSearch,
        hasSearchKeyword,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
