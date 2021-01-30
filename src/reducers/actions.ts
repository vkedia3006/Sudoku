import { Action, AnyAction } from 'redux'
import { BLOCK_COORD, NUMBERS } from 'typings'
import * as types from './types'

export const createGrid = (): Action => ({type: types.CREATE_GRID})

export const selectBlock = (coords: BLOCK_COORD): AnyAction => ({
    type: types.SELECT_BLOCK,
    coords
})

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORD): AnyAction => ({
    coords,
    type: types.FILL_BLOCK,
    value,
})