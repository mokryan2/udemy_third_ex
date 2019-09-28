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
// In order for the store to work, there needs to first be a reducer!

console.log(store.getState());






// ========================================== Dispatching Action =====================================




// ============================================== Subscription =======================================