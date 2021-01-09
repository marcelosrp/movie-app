import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  flex: 1 1 auto;
  height: 536px;
  margin: 10px;
  max-width: 310px;
  position: relative;
  overflow: hidden;
  width: 290px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`;
