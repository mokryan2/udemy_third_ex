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
        case "MULTIPLY":
            return {
                counter: state.counter * action.value
            }
        case "DIVIDE":
            return {
                counter: state.counter / action.value
            }
    }
    // Unlike how we typically use a switch statement, we don't need to include breaks after each case due to the fact return naturally exits out of the function
    return state
};

export default reducer;

// Reducers will typically have their own files b/c there might be different types of actions with a lot of code