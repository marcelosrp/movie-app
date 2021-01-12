import React from "react";

import Layout from "../../components/Layout";
import Robot from "../../assets/images/broken-robot.png";

import * as S from "./styles";

const NotFound = () => {
  return (
    <Layout>
      <S.NotFoundWrapper>
        <S.NotFoundItem>
          <S.NotFoundIllustration
            src={Robot}
            alt="Ilustração de um robo quebrado"
          />
        </S.NotFoundItem>
        <S.NotFoundItem>
          <S.NotFoundTitle>404</S.NotFoundTitle>
          <S.NotFoundText>...Oops! Something is missing</S.NotFoundText>
          <S.NotFoundButton to="/">Home</S.NotFoundButton>
        </S.NotFoundItem>
      </S.NotFoundWrapper>
    </Layout>
  );
};

export default NotFound;
