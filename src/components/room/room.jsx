import React, {useEffect, useState} from 'react';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect} from 'react-redux';
import {fetchOffer, fetchNearbyOffers, fetchOfferFavorite} from "../../store/api-actions";
import {ActionCreator} from '../../store/action';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import {offersTypes, offerTypes} from '../../types/types';
import PropTypes from 'prop-types';
import Header from '../header/header';
import {Redirect} from 'react-router-dom';

const Room = (props) => {

  const {offer, nearbyOffers, onLoadOffer, onResetOffer, onLoadNearbyOffers, onResetNearbyOffers, authorizationStatus, toggleFavorite, isNotFound} = props;
  const id = props.match.params.id;

  const [favoriteLabel, setFavoriteLabel] = useState(offer.isFavorite);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const IMAGE_NUMBER = 6;

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

  if (isNotFound) {
    return (<Redirect to={`/404`} />);
  }

  if (Object.keys(offer).length === 0) {
    return (
      <LoadingScreen />
    );
  }

  const images = offer.images.slice(0, IMAGE_NUMBER);


  const onClickFavorite = () => {
    if (authorizationStatus) {
      setFavoriteLabel(!favoriteLabel);
      toggleFavorite(id, +!offer.isFavorite);
    } else {
      setRedirectToLogin(true);
    }
  };

  if (redirectToLogin) {
    return <Redirect to={`/login`} />;
  }

  return (
    <>
      <div className="page">
        <Header />
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
                  <button className="property__bookmark-button button" type="button" onClick={onClickFavorite}>
                    <svg className="property__bookmark-icon" width={31} height={33} style={favoriteLabel ? {fill: `#4481c3`, stroke: `#4481c3`} : null}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${offer.rating * 20}%`}} />
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
                  {authorizationStatus ?
                    <ReviewForm id={id} /> :
                    <p className="reviews__title">Авторизуйтесь, чтобы оставить отзыв</p>
                  }
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
  authorizationStatus: PropTypes.bool,
  toggleFavorite: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  isNotFound: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offer: state.offerPage.offer,
  nearbyOffers: state.nearbyOffers,
  authorizationStatus: state.authorizationStatus,
  isNotFound: state.offerPage.isNotFound,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer: (id) => dispatch(fetchOffer(id)),
  onResetOffer: () => dispatch(ActionCreator.setOffer({}, false)),
  onLoadNearbyOffers: (id) => dispatch(fetchNearbyOffers(id)),
  onResetNearbyOffers: () => dispatch(ActionCreator.setNearbyOffers([])),
  toggleFavorite: (id, status) => dispatch(fetchOfferFavorite(id, status)),
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
