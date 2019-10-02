import * as actionTypes from "../actions";

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case actionTypes.REMOVE_RESULT:
            const newArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: newArray
            }
        // .filter is creating a new array to remain immutable state; result will return true if it doens't equal the clicked element
    }
    // Unlike how we typically use a switch statement, we don't need to include breaks after each case due to the fact return naturally exits out of the function
    return state
};

export default reducer;

// Reducers will typically have their own files b/c there might be different types of actions with a lot of code