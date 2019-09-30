const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === "ADD") {
        return {
            counter: state.counter + action.value
        }
        // Because we pass value to the dispatch methods, we can use action.value to get the number we want to include
    }
    if (action.type === "SUB") {
        return {
            counter: state.counter - action.value
        }
    }
    return state
};

export default reducer;

// Reducers will typically have their own files b/c there might be different types of actions with a lot of code