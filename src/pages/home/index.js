import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";

import Layout from "../../components/Layout";
import Skeleton from "../../components/Skeleton";
import MovieCard from "../../components/MovieList";
import Pagination from "../../components/Pagination";

import * as S from "./styles";

const Home = () => {
  const { isLoading, movieList, hasSearchKeyword, searchKeyWord } = useContext(
    GlobalContext
  );

  if (hasSearchKeyword) {
    return (
      <Redirect
        to={{
          pathname: "/resultado-busca",
          state: { search: searchKeyWord },
        }}
      />
    );
  }

  return (
    <Layout>
      <S.MovieContainer>
        <S.PageTitle>Popular Movies</S.PageTitle>
        {isLoading ? (
          <Skeleton />
        ) : (
          movieList.map((movie) => {
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
      <Pagination />
    </Layout>
  );
};

export default Home;
