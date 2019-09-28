const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// ================================================ Reducer ======================================
const rootReducer = (state = initialState, action) => {
    return state;
};

// ================================================= Store ===========================================
const store = createStore(rootReducer);
// In order for the store to work, there needs to first be a reducer! Always set reducer first!

console.log(store.getState());


// ========================================== Dispatching Action =====================================
store.dispatch({ type: "INC_COUNTER"});
// dispatch takes an argument that is an action that should be a JS object w/ a "type" property
// Type is important b/c it helps get the info of what type of action was dispatched and what should happen in the reducer
// Usual convention for the type is a string in ALL CAPS



// ============================================== Subscription =======================================