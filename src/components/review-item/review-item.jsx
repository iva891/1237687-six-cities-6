import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = ({comment}) => {

  const date = new Date(comment.date);
  const commentDate = date.toLocaleDateString(`en`, {month: `long`, year: `numeric`});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${comment.rating * 10}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24" style={{textTransform: `capitalize`}}>{commentDate}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  comment: PropTypes.array,
};

export default ReviewItem;
