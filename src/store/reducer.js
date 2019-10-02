import * as actionTypes from "./actions";

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return newState
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
                // Because we pass value to the dispatch methods, we can use action.value to get the number we want to include
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.MULTIPLY:
            return {
                ...state,
                counter: state.counter * action.value
            }
        case actionTypes.DIVIDE:
            return {
                ...state,
                counter: state.counter / action.value
            }
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