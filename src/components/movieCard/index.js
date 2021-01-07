import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import PropTypes from "prop-types";

import * as S from "./styles";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({
  moviePoster,
  movieTitle,
  movieAverage,
  movieOverview,
}) => {
  const { openModal } = useContext(GlobalContext);

  return (
    <S.MovieCard>
      <S.MoviePoster src={IMG_PATH + moviePoster} />
      <S.MovieInfo>
        <S.MovieTitle>{movieTitle}</S.MovieTitle>
        <S.MovieAverage>{movieAverage}</S.MovieAverage>
      </S.MovieInfo>
      <S.MovieButtonOverview
        onClick={() => openModal(movieTitle, movieOverview)}
      >
        Overview
      </S.MovieButtonOverview>
    </S.MovieCard>
  );
};

MovieCard.propTypes = {
  moviePoster: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieAverage: PropTypes.number.isRequired,
};

export default MovieCard;
