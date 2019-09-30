const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: state.counter + 1
            }
        case "DECREMENT":
            return {
                counter: state.counter - 1
            }
        case "ADD":
            return {
                counter: state.counter + action.value
                // Because we pass value to the dispatch methods, we can use action.value to get the number we want to include
            }
        case "SUB":
            return {
                counter: state.counter - action.value
            }
    }
    return state
};

export default reducer;

// Reducers will typically have their own files b/c there might be different types of actions with a lot of code