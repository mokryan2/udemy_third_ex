const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    }
    return state
};

export default reducer;

// Reducers will typically have their own files b/c there might be different types of actions with a lot of code