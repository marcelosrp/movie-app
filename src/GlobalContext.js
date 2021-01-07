import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;

export const GlobalStorage = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalOverview, setModalOverview] = useState({});

  async function getMovies() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Deu ruim!");

      if (response.status === 200) {
        const data = await response.json(response);
        setMovieList(data.results);
      }
    } catch (error) {}
  }

  function openModal(movieTitle, movieOverview) {
    setIsOpen(true);
    setModalOverview({ title: movieTitle, overview: movieOverview });
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ movieList, modalIsOpen, openModal, closeModal, modalOverview }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
