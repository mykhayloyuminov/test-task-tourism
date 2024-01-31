import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

export const Loader: FC = () => {
  return <Spinner />;
};

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid black;
  width: 50px;
  height: 50px;
  margin: 20px auto;
  animation: ${spinAnimation} 1s linear infinite;
`;
