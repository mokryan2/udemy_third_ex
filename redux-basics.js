const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// ================================================ Reducer ======================================
const rootReducer = (state = initialState, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    };
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    };
    return state;
};
// Just like in React, STATE MUST ALWAYS BE IMMUTABLE!!! We do this by using a spread operator on state and then add in the logic from here


// ================================================= Store ===========================================
const store = createStore(rootReducer);
// In order for the store to work, there needs to first be a reducer! Always set reducer first!

console.log(store.getState());
// This will respond with counter:0 because all that's being done here is getting the inital state


// ========================================== Dispatching Action =====================================
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
// dispatch takes an argument that is an action that should be a JS object w/ a "type" property
// Type is important b/c it helps get the info of what type of action was dispatched and what should happen in the reducer
// Usual convention for the type is a string in ALL CAPS
// You can also pass "payloads" along with the type values; really most anything can be passed along with the type, but you need to be specific!
// The console.log will respond with counter:11 because it's running both of the if statements set in the reducer



// ============================================== Subscription =======================================