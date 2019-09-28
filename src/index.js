import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
// This package and helper component will allow us to hook up React w/ Redux by injecting the store into the React components
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
