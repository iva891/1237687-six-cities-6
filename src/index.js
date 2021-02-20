import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const Settings = {
  CARD_NUMBER: 4,
  offerQuantity: 312
};

const numbers = Array(Settings.CARD_NUMBER).fill(0)
.map((_, index) => index + 1);

ReactDom.render(
    <App
      numbers = {numbers}
      quantity = {Settings.offerQuantity}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
