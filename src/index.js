import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
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

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
