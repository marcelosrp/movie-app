import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

import Layout from "../../components/Layout";
import MovieCard from "../../components/movieCard";
import ModalOverview from "../../components/Modal/Overview";

import * as S from "./styles";

const Home = () => {
  const { movieList, modalIsOpen } = useContext(GlobalContext);

  return (
    <Layout>
      <S.MovieContainer>
        {movieList.map((movie) => {
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
        })}
      </S.MovieContainer>

      {modalIsOpen && <ModalOverview modalIsOpen={modalIsOpen} />}
    </Layout>
  );
};

export default Home;
