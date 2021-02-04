import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const Settings = {
  CARD_NUMBER: 5,
  offerQuantity: 312
};

const numbers = Array(Settings.CARD_NUMBER).fill(0)
.map((_, index) => index + 1);

ReactDom.render(
    <App numbers = {numbers} quantity = {Settings.offerQuantity} />,
    document.querySelector(`#root`)
);
