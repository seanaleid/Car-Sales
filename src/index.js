import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

//reducer
import mainReducer from "./reducers/MainReducer";

import 'bulma/css/bulma.css';
import './styles.scss';


//store enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers()) // --> put reducer inside the parenthesis
console.log(`STORE`, store);
console.log(`store.getState`, store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);
