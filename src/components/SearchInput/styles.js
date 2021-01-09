import styled from "styled-components";

export const SearchInput = styled.input`
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 6px;
  color: var(--white);
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:focus {
    background-color: var(--primary-color);
    outline: none;
  }

  ::placeholder {
    color: var(--white);
  }
`;
