import styled from "styled-components";

import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 75px);
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 30px;
  }

  @media (min-width: 1250px) and (max-width: 1800px) {
    justify-content: center;
  }
`;

export const NotFoundItem = styled.div`
  max-width: 500px;
  position: relative;
  width: 100%;
`;

export const NotFoundIllustration = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const NotFoundTitle = styled.h1`
  color: var(--white);
  font-size: 140px;
  font-weight: 900;
  letter-spacing: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const NotFoundText = styled.p`
  color: var(--white);
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
`;

export const NotFoundButton = styled(Link)`
  background-color: var(--secondary-color);
  color: var(--white);
  display: block;
  letter-spacing: 2px;
  margin: 30px auto 0 auto;
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: 130px;

  &:hover {
    transform: scale(0.9);
  }
`;
