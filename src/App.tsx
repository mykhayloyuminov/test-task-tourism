import './index.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardList } from './components/CardList';
import { IHouses } from './types';
import { Loader } from './components/Loader';

export const App = () => {
  const [loader, setLoader] = useState<boolean>(true);
  const [houses, setHouses] = useState<IHouses[] | null>(null);

  useEffect(() => {
    fetch('https://wizard-world-api.herokuapp.com/houses')
      .then(res => res.json())
      .then(data => {
        setLoader(false);
        setHouses(data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoader(false);
      });
  }, []);

  if (loader) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return <Wrapper>{houses && <CardList houses={houses} />}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
