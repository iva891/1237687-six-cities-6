import React from 'react';
import PropTypes from 'prop-types';
import {offerTypes} from '../../types/types';
import {Link} from 'react-router-dom';

const PlaceCard = (props) => {
  const {offer, onHover, isFavorite} = props;
  const {price, previewImage, premium, favorite, rating, title, type} = offer || {};

  return (
    <>
      <article className={`${isFavorite ? `favorites__card` : `cities__place-card`} place-card`}
        onMouseOver = {onHover || Function.prototype}>
        {
          premium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className={`${isFavorite ? `favorites__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
          </a>
        </div>
        <div className={`${isFavorite ? `favorites__card-info` : ``} place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${favorite && `place-card__bookmark-button--active`}`} type="button">
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating * 10}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to="/offer/:id">{title}</Link>
          </h2>
          <p className="place-card__type" style={{textTransform: `capitalize`}}>{type}</p>
        </div>
      </article>
    </>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func,
  isFavorite: PropTypes.bool,
  offer: offerTypes
};

export default PlaceCard;
