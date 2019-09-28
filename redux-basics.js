const redux = require("redux");
const createStore = redux.createStore;

// ================================================ Reducer ======================================
const rootReducer = (state, action) => {
    return state;
};


// ================================================= Store ===========================================
const store = createStore(rootReducer);
// In order for the store to work, there needs to first be a reducer!

console.log(store.getState());






// ========================================== Dispatching Action =====================================




// ============================================== Subscription =======================================