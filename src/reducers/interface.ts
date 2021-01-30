import { BLOCK_COORD, GRID } from 'typings'

export interface IReducer {
    challengeGrid?: GRID
    selectedBlock?: BLOCK_COORD
    solvedGrid?: GRID
    workingGrid?: GRID
}