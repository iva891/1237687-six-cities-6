import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";

const Settings = {
  CARD_NUMBER: 4
};

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const numbers = Array(Settings.CARD_NUMBER).fill(0)
.map((_, index) => index + 1);

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDom.render(
    <Provider store={store}>
      <App
        numbers = {numbers}
        cities = {CITIES}
      />
    </Provider>,
    document.querySelector(`#root`)
);
