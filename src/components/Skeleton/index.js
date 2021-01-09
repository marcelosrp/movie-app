import React from "react";
import * as S from "./styles";

const Skeleton = () => {
  return Array(8)
    .fill()
    .map((_, index) => {
      return <S.SkeletonWrapper key={index}></S.SkeletonWrapper>;
    });
};

export default Skeleton;
