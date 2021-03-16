import React, {useEffect} from 'react';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect} from 'react-redux';
import {fetchOffer} from "../../store/api-actions";
import {fetchNearbyOffers} from "../../store/api-actions";
import {ActionCreator} from '../../store/action';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import {offersTypes} from '../../types/types';
import {offerTypes} from '../../types/types';
import PropTypes from 'prop-types';

const Room = ({id, offer, nearbyOffers, onLoadOffer, onResetOffer, onLoadNearbyOffers, onResetNearbyOffers}) => {

  const onReset = () => {
    onResetOffer();
    onResetNearbyOffers();
  };

  useEffect(() => {
    if (offer.id !== id) {
      onLoadOffer(id);
      onLoadNearbyOffers(id);
    }

    return (() => onReset());

  }, [id, onLoadOffer, onResetOffer, onLoadNearbyOffers, onResetNearbyOffers]);

  if (Object.keys(offer).length === 0) {
    return (
      <LoadingScreen />
    );
  }

  const images = offer.images.slice(0, 6);

  return (
    <>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                { images.map((image) => {
                  return (
                    <div className="property__image-wrapper" key={image}>
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  );
                })
                }

              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">

                {offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width={31} height={33} style={offer.isFavorite ? {fill: `#4481c3`, stroke: `#4481c3`} : null}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${offer.rating * 10}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire" style={{textTransform: `capitalize`}}>
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">

                    { offer.goods.map((item) =>{
                      return (
                        <li className="property__inside-item" key={item}>
                          {item}
                        </li>
                      );
                    })
                    }

                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${offer.host.isPro ? `property__avatar-wrapper--pro` : null} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList id={id} />
                  <ReviewForm />
                </section>
              </div>
            </div>

            <Map points={nearbyOffers.concat(offer)} isRoom />

          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <PlaceList cityOffers={nearbyOffers} cityNumbers={nearbyOffers} isRoom />

            </section>
          </div>
        </main>
      </div>
    </>
  );
};

Room.propTypes = {
  points: offersTypes,
  isRoom: PropTypes.bool,
  cardId: PropTypes.number,
  offerId: PropTypes.number,
  id: PropTypes.string,
  offer: offerTypes,
  nearbyOffers: offersTypes,
  onLoadOffer: PropTypes.func,
  onResetOffer: PropTypes.func,
  onLoadNearbyOffers: PropTypes.func,
  onResetNearbyOffers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  offers: state.offers,
  city: state.city,
  nearbyOffers: state.nearbyOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer: (id) => dispatch(fetchOffer(id)),
  onResetOffer: () => dispatch(ActionCreator.resetOffer()),
  onLoadNearbyOffers: (id) => dispatch(fetchNearbyOffers(id)),
  onResetNearbyOffers: () => dispatch(ActionCreator.resetNearbyOffers()),
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
