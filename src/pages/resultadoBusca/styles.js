import styled from "styled-components";

export const MovieContainer = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 75px);
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1250px) and (max-width: 1800px) {
    justify-content: center;
  }
`;

export const PageTitle = styled.h1`
  color: var(--white);
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 2px;
  margin: 30px 0 10px 0;
  text-align: center;
  width: 100%;
`;
