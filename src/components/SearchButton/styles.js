import styled from "styled-components";

export const SearchButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 2px solid #22254b;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  justify-content: center;
  margin: 0 10px;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  width: 40px;

  &:hover {
    background-color: #22254b;
    outline: none;
  }
`;
