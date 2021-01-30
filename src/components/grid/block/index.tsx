import React, { FC } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { IReducer, selectBlock } from "reducers";
import { INDEX, N } from "typings";

import { Container } from "./styles";

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  value: N;
  isActive: boolean;
  isPuzzle: boolean
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ challengeGrid, workingGrid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
    value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    isPuzzle: challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false
  }));

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const handleClick = () => {
    if(!state.isActive) dispatch(selectBlock([rowIndex, colIndex]));
  };

  return (
    <Container active={state.isActive} data-cy={`block-${rowIndex}-${colIndex}`} onClick={handleClick} puzzle={state.isPuzzle}>
      {state.value === 0 ? "" : state.value}
    </Container>
  );
};

export default Block;
