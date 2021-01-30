import { GRID, NUMBERS } from "typings";

interface IInput {
    grid: GRID
    col: number
    value: NUMBERS
}

function isInCol({grid, col, value}: IInput): boolean{
    for (let j = 0; j < 9; j++) {
        if (value === grid[j][col]) return true
    }
    return false
}

export default isInCol