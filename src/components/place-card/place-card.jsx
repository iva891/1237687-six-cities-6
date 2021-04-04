import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerTypes} from '../../types/types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchOfferFavorite} from "../../store/api-actions";

const PlaceCard = (props) => {
  const {offer, onHover, onHoverOut, isCardFavorite, isRoom, toggleFavorite} = props;
  const {price, previewImage, premium, isFavorite, rating, title, type, id} = offer || {};

  const setClassName = () => {
    switch (true) {
      case isCardFavorite:
        return {card: `favorites__card`, image: `favorites__image-wrapper`};
      case isRoom:
        return {card: `near-places__card`, image: `near-places__image-wrapper`};
      default:
        return {card: `cities__place-card`, image: `cities__image-wrapper`};
    }
  };

  const [favoriteLabel, setFavoriteLabel] = useState(isFavorite);

  const onClickFavorite = () => {
    setFavoriteLabel(!favoriteLabel);
    toggleFavorite(id, Number(!isFavorite));
  };

  return (
    <>
      <article className={`${setClassName().card} place-card`}
        onMouseOver = {onHover || Function.prototype}
        onMouseOut = {onHoverOut || Function.prototype}>
        {
          premium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className={`${setClassName().image} place-card__image-wrapper`}>
          <Link to={`/offer/${id}`}>
            <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
          </Link>
        </div>
        <div className={`${isCardFavorite ? `favorites__card-info` : ``} place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${favoriteLabel ? `place-card__bookmark-button--active` : ``}`} type="button" onClick={onClickFavorite}>
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating * 20}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${id}`}>{title}</Link>
          </h2>
          <p className="place-card__type" style={{textTransform: `capitalize`}}>{type}</p>
        </div>
      </article>
    </>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func,
  onHoverOut: PropTypes.func,
  favorite: PropTypes.bool,
  offer: offerTypes,
  isRoom: PropTypes.bool,
  toggleFavorite: PropTypes.func,
  isCardFavorite: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id, status) => dispatch(fetchOfferFavorite(id, status)),
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
