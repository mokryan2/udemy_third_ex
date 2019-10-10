export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUB = "SUB";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";
export const SAVE_RESULT = "SAVE_RESULT";
export const REMOVE_RESULT = "REMOVE_RESULT";

// This is a safer way to ensure there are no errors in the reducer.js
// Becasue everything is stored here in a specific manner, we're guaranteed to know if something
// is typed improperly in the reducer.js file

export const increment = () => {
    return {
        type: INCREMENT
    }
};
export const decrement = () => {
    return {
        type: DECREMENT
    }
};
export const add = (value) => {
    return {
        type: ADD,
        value: value
    }
};
export const sub = (value) => {
    return {
        type: SUB,
        value: value
    }
};
export const multiply = (value) => {
    return {
        type: MULTIPLY,
        value: value
    }
};
export const divide = (value) => {
    return {
        type: DIVIDE,
        value: value
    }
};
export const saveResult = (result) => {
    return {
        type: SAVE_RESULT,
        result: result
    }
};
export const removeResult = (resElId) => {
    return {
        type: REMOVE_RESULT,
        resultElId: resElId
    }
};

// These are action creators; they're functions that return an action/creates an action.