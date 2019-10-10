import * as actionTypes from "./actionTypes"

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};
export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};
export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value: value
    }
};
export const sub = (value) => {
    return {
        type: actionTypes.SUB,
        value: value
    }
};
export const multiply = (value) => {
    return {
        type: actionTypes.MULTIPLY,
        value: value
    }
};
export const divide = (value) => {
    return {
        type: actionTypes.DIVIDE,
        value: value
    }
};