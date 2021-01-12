import styled from "styled-components";

export const PaginationWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0 20px 0;
  padding: 10px 0;
  text-align: center;
  width: 100%;
`;

export const PaginationButton = styled.button`
  align-items: center;
  background-color: ${(props) =>
    props.active ? "var(--secondary-color)" : "transparent"};
  border: none;
  border-radius: 6px;
  color: var(--white);
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  letter-spacing: 2px;
  margin: 0 5px;
  padding: 5px 10px;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    display: ${(props) => props.hiddenMobile && "none"};
    letter-spacing: 1px;
    padding: 5px;
  }

  &:hover:not(:disabled) {
    background-color: var(--secondary-color);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
