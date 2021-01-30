import { AnyAction } from 'redux'
import { copyGrid, createFullGrid, removeNumbers, compareArray } from 'utils'
import { IReducer } from './interface'
import * as types from './types'
import { GRID } from 'typings'


const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
    switch(action.type) {
        case types.CREATE_GRID: {
            const solvedGrid = createFullGrid()
            const gridCopy = copyGrid(solvedGrid)
            const challengeGrid = removeNumbers(gridCopy, 1)
            const workingGrid = copyGrid(challengeGrid)
            return{
                ...state,
                challengeGrid,
                solvedGrid,
                workingGrid
            }
        }
        case types.SELECT_BLOCK:
            return{
                ...state,
                selectedBlock: action.coords
            }
        case types.FILL_BLOCK:
            if(state.workingGrid && state.solvedGrid) {
                if (state.solvedGrid[action.coords[0]][action.coords[1]]  !== action.value) {
                    alert('Incorrect option')
                    return state
                }
                state.workingGrid[action.coords[0]][action.coords[1]] = action.value
                if (compareArray(state.workingGrid, state.solvedGrid)) alert("Completed!!")

                return {...state, workingGrid: [...state.workingGrid] as GRID}
            }
            return state
        default:
            return state
    }
}

export default reducer