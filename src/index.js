import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Settings = {
  CARD_NUMBER: 4
};

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const numbers = Array(Settings.CARD_NUMBER).fill(0)
.map((_, index) => index + 1);

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDom.render(
    <Provider store={store}>
      <App
        numbers = {numbers}
        offers = {offers}
        cities = {CITIES}
      />
    </Provider>,
    document.querySelector(`#root`)
);
