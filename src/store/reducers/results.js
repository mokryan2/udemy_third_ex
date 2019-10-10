import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RESULT:
            return updateObject(state, {
                results: state.results.concat({ id: new Date(), value: action.result })
            });
        // We need to change the state.counter value to action.result because the file no longer has local access to the state of the counter
        case actionTypes.REMOVE_RESULT:
            const newArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, { results: newArray })
    }
    // Unlike how we typically use a switch statement, we don't need to include breaks after each case due to the fact return naturally exits out of the function
    return state
};

export default reducer;

// Reducers will typically have their own files b/c there might be different types of actions with a lot of code