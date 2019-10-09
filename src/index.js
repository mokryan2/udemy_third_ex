import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";
import { Provider } from "react-redux";
// This package and helper component will allow us to hook up React w/ Redux by injecting the store into the React components
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
});
// We need to have the index file combine the reducers first before creating the store;
// thankfully, redux has the helper function that will combine the objects for us

const logger = store => {
    return next => {
        // next can technically be called whatever we want, but it makes sense in this situation b/c it'll be a function we can execute
        // to let the action continue to the reducer
        return action => {
            console.log("[Middleware] Dispatching", action);
            const result = next(action);
            console.log("[Middleware] next state", store.getState())
            return result
            // This will allow the action to continue to the reducer
        }
    }
};
// This is what we call a middleware. It is software that acts as a bridge between an operating system or database and applications, especially on a network.

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
