import { FC, useCallback, useMemo } from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowProps,
} from 'react-virtualized';
import styled from 'styled-components';
import { Card } from './Card';
import { IHouses } from '../types';
import { getGradientColors } from '../helpers';

interface CardListProps {
  houses: IHouses[];
}

export const CardList: FC<CardListProps> = ({ houses }) => {
  const cellsCache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: window.innerHeight,
      }),
    []
  );

  const renderListRow = useCallback(
    ({ key, index, style, parent }: ListRowProps) => {
      const house = houses[index];

      return (
        <CellMeasurer
          cache={cellsCache}
          columnIndex={0}
          key={key}
          parent={parent}
          rowIndex={index}
        >
          <CellWrapper style={style}>
            <Card
              key={house.id}
              name={house.name}
              founder={house.founder}
              animal={house.animal}
              gradientFrom={getGradientColors(house.houseColours).from}
              gradientTo={getGradientColors(house.houseColours).to}
            />
          </CellWrapper>
        </CellMeasurer>
      );
    },
    [houses, cellsCache]
  );

  return (
    <Wrapper className="loader-wrapper">
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            overscanRowCount={10}
            rowRenderer={renderListRow}
            rowCount={houses.length}
            rowHeight={cellsCache.rowHeight}
            deferredMeasurementCache={cellsCache}
          />
        )}
      </AutoSizer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 35px;
  box-sizing: border-box;
`;

const CellWrapper = styled.div`
  padding-bottom: 10px;
`;
