import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";

import Layout from "../../components/Layout";
import Skeleton from "../../components/Skeleton";
import MovieCard from "../../components/MovieList";
import ModalOverview from "../../components/Modal/Overview";
import SearchBar from "../../components/SearchBar";

import * as S from "./styles";

const ResultadoBusca = (props) => {
  const { search } = props.location.state || {};
  const { isLoading, researchedMovieList, modalIsOpen } = useContext(
    GlobalContext
  );

  if (search === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <SearchBar />

      <S.MovieContainer>
        {isLoading ? (
          <Skeleton />
        ) : (
          researchedMovieList.map((movie) => {
            const { id, poster_path, title, vote_average, overview } = movie;
            return (
              <MovieCard
                key={id}
                moviePoster={poster_path}
                movieTitle={title}
                movieAverage={vote_average}
                movieOverview={overview}
              />
            );
          })
        )}
      </S.MovieContainer>
      {modalIsOpen && <ModalOverview modalIsOpen={modalIsOpen} />}
    </Layout>
  );
};

export default ResultadoBusca;
