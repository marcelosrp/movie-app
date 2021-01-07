import styled from "styled-components";

export const MovieContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1250px) and (max-width: 1800px) {
    justify-content: center;
  }
`;
