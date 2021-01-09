import styled from "styled-components";

export const MovieButtonOverview = styled.button`
  background-color: var(--secondary-color);
  border: none;
  color: #fff;
  cursor: pointer;
  left: 50%;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 2px;
  opacity: 0;
  padding: 8px 20px;
  position: absolute;
  pointer-events: none;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
`;

export const MovieCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  flex: 1 1 auto;
  margin: 10px;
  max-width: 310px;
  position: relative;
  overflow: hidden;
  width: 290px;

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    pointer-events: none;
    top: 0;
    transition: all 0.3s ease;
    width: 100%;
  }

  &:hover {
    &::before {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &:hover ${MovieButtonOverview} {
    opacity: 1;
    pointer-events: initial;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const MoviePosterWrapper = styled.div`
  height: 465px;
  overflow: hidden;
  width: 100%;
`;

export const MoviePoster = styled.img`
  height: 100%;
  object-fit: fill;
  width: 100%;
`;

export const MovieInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const MovieTitle = styled.h2`
  color: var(--white);
  display: -webkit-box;
  font-size: 18px;
  font-weight: 400;
  overflow: hidden;
  padding-right: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const MovieAverage = styled.span`
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;

  &.green {
    background-color: var(--green);
  }

  &.orange {
    background-color: var(--orange);
  }

  &.red {
    background-color: var(--red);
  }
`;
