import styled from "styled-components";

export const SearchInput = styled.input`
  background-color: transparent;
  border: 2px solid #22254b;
  border-radius: 6px;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:focus {
    background-color: #22254b;
    outline: none;
  }

  ::placeholder {
    color: #fff;
  }
`;
