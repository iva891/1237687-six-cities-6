import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {checkAuth} from './store/api-actions';
import {ActionCreator} from './store/action';

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(false))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App
        cities = {CITIES}
      />
    </Provider>,
    document.querySelector(`#root`)
);
