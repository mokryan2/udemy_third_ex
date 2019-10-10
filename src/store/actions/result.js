import * as actionTypes from "./actionTypes";

export const storeResult = result => {
    return {
        type: actionTypes.SAVE_RESULT,
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
        type: actionTypes.REMOVE_RESULT,
        resultElId: resElId
    }
};

// These are action creators; they're functions that return an action/creates an action.