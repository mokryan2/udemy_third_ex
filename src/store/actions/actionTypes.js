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

export const storeResult = result => {
    return {
        type: SAVE_RESULT,
        result: result
    }
};

export const saveResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(storeResult(result))
        },
            2000
        );
    }

};
// In this isntance, the storeResult method works in tandem with the saveResult method. To avoid an infinite loop, the additional storeResult method is needed
// so that it can be called in the saveResult method. If you run this in the app, the result will now be displayed after 2 seconds!
// It is also worth noting that only synchronous actions can edit the store
export const removeResult = (resElId) => {
    return {
        type: REMOVE_RESULT,
        resultElId: resElId
    }
};

// These are action creators; they're functions that return an action/creates an action.