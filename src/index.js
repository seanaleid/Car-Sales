import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

//reducer
import { mainReducer } from "./reducers";

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(mainReducer) // --> put reducer inside the parenthesis
console.log(store.getState());



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);
