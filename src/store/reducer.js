const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return newState
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "ADD":
            return {
                ...state,
                counter: state.counter + action.value
                // Because we pass value to the dispatch methods, we can use action.value to get the number we want to include
            }
        case "SUB":
            return {
                ...state,
                counter: state.counter - action.value
            }
        case "MULTIPLY":
            return {
                ...state,
                counter: state.counter * action.value
            }
        case "DIVIDE":
            return {
                ...state,
                counter: state.counter / action.value
            }
        case "SAVE_RESULT":
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
    }
    // Unlike how we typically use a switch statement, we don't need to include breaks after each case due to the fact return naturally exits out of the function
    return state
};

export default reducer;

// Reducers will typically have their own files b/c there might be different types of actions with a lot of code