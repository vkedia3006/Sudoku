import { SQUARE, NUMBERS } from 'typings'

interface IInput{
    square: SQUARE
    value: NUMBERS
}

/**
 * 
 * @param input 
 */
function isInSquare({square, value}: IInput) : Boolean{
    return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare