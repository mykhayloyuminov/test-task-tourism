import { FC } from 'react';
import styled from 'styled-components';

interface CardProps {
  name: string;
  founder: string;
  animal: string;
  gradientFrom: string;
  gradientTo: string;
}

export const Card: FC<CardProps> = ({
  name,
  founder,
  animal,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <Wrapper>
      <Header>
        <Name>{name}</Name>
        <Animal>{animal}</Animal>
      </Header>
      <Gradient from={gradientFrom} to={gradientTo} />
      <Footer>
        Founder: <Founder>{founder}</Founder>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 300px;
`;

const Gradient = styled.div<{ from: string; to: string }>`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background: ${props =>
    `linear-gradient(90deg, ${props.from} 0%, ${props.to} 100%)`};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const Animal = styled.div`
  font-size: 14px;
`;

const Footer = styled.div`
  font-size: 14px;
`;

const Founder = styled.span`
  font-weight: 700;
`;
