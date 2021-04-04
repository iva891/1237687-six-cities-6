import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {submitComment} from "../../store/api-actions";
import {ActionCreator} from '../../store/action';

const ReviewForm = ({id, onSubmitReview, reviewError = {}, resetReviewError}) => {

  const MIN_COMMENT_LENGTH = 50;
  const MAX_COMMENT_LENGTH = 300;

  let disabledForm = false;

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    review: ``
  });

  const formRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    disabledForm = true;

    onSubmitReview({
      comment: reviewForm.review,
      rating: reviewForm.rating,
      id,
    }).then(() => {
      setReviewForm({
        rating: 0,
        review: ``
      });
      formRef.current.reset();
      disabledForm = false;
    }).catch(() => {
      disabledForm = false;
    });
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm, [name]: value});
  };

  const disabledSubmitButton = reviewForm.rating === 0 || reviewForm.review.length < MIN_COMMENT_LENGTH;

  useEffect(() =>{
    resetReviewError();
  }, []);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} ref={formRef}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" disabled={disabledForm} onChange={handleInputChange} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" disabled={disabledForm} onChange={handleInputChange} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" disabled={disabledForm} onChange={handleInputChange} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" disabled={disabledForm} onChange={handleInputChange} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" disabled={disabledForm} onChange={handleInputChange} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      {Object.keys(reviewError).length !== 0 &&
        <div>
          <h4>Невозможно отправить отзыв</h4>
          <p>Ошибка: {reviewError.statusText}</p>
          <p>Код ошибки: {reviewError.status}</p>
        </div>
      }
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={`${MAX_COMMENT_LENGTH}`} value={reviewForm.review} onChange={handleInputChange} disabled={disabledForm} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50, but no more than 300 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!!disabledSubmitButton || disabledForm}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.string,
  onSubmitReview: PropTypes.func,
  reviewError: PropTypes.object,
  resetReviewError: PropTypes.func,
};

const mapStateToProps = (state) => ({
  comments: state.comments,
  reviewError: state.reviewError,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitReview: (review) => dispatch(submitComment(review)),
  resetReviewError: () => dispatch(ActionCreator.reviewError({})),
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
