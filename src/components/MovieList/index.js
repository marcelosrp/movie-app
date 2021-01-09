import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import PropTypes from "prop-types";

import { calcAverage } from "../../helpers/helpers";

import { IMG_PATH } from "../../services/api";

import * as S from "./styles";

const MovieCard = ({
  moviePoster,
  movieTitle,
  movieAverage,
  movieOverview,
}) => {
  const { handleOpenModal } = useContext(GlobalContext);

  return (
    <S.MovieCard>
      <S.MoviePoster src={IMG_PATH + moviePoster} />
      <S.MovieInfo>
        <S.MovieTitle>{movieTitle}</S.MovieTitle>
        <S.MovieAverage className={calcAverage(movieAverage)}>
          {movieAverage}
        </S.MovieAverage>
      </S.MovieInfo>
      <S.MovieButtonOverview
        onClick={() => handleOpenModal(movieTitle, movieOverview)}
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
