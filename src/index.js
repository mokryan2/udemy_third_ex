import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// This is needed to effectively work with the DevTools for redux. There is plenty of useful things that can be done thanks to the redux dev tools; specifically,
// one of the most useful things offered by the devtools is the ability to travel through time as the state changes. Think of it as console.log, but with all the iformation
// that is connected to said dispatches/actions

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
