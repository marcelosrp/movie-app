import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

import Layout from "../../components/Layout";
import Skeleton from "../../components/Skeleton";
import MovieCard from "../../components/MovieList";
import ModalOverview from "../../components/Modal/Overview";

import * as S from "./styles";

const Home = () => {
  const { isLoading, movieList, modalIsOpen } = useContext(GlobalContext);

  return (
    <Layout>
      <S.MovieContainer>
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

      {modalIsOpen && <ModalOverview modalIsOpen={modalIsOpen} />}
    </Layout>
  );
};

export default Home;
