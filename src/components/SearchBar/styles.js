import styled from "styled-components";

export const SearchBarContainer = styled.section`
  align-items: center;
  background-color: var(--secondary-color);
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1em;
  position: relative;
  width: 100%;

  .btn-home {
    color: #fff;
    font-size: 16px;
    position: absolute;
    right: 20px;
    text-decoration: none;
    top: 50%;
    transform: translateY(-50%);
  }
`;
