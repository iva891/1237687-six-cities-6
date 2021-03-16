import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {offersTypes} from '../../types/types';
import ReviewItem from '../review-item/review-item';
import {connect} from 'react-redux';
import {fetchComments} from "../../store/api-actions";
import {ActionCreator} from '../../store/action';

const ReviewsList = ({id, comments, onLoadComments, onResetComments}) => {

  useEffect(() => {
    if (Object.keys(comments).length === 0) {
      onLoadComments(id);
    }

    return (() => onResetComments());

  }, [id, onLoadComments, onResetComments]);

  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      {comments.length !== 0 && <ul className="reviews__list">
        {comments.map((comment) => <ReviewItem key={comment.id} comment={comment} />)}
      </ul> }
    </>
  );
};

ReviewsList.propTypes = {
  comments: offersTypes,
  id: PropTypes.string,
  onLoadComments: PropTypes.func,
  onResetComments: PropTypes.func,
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments: (id) => dispatch(fetchComments(id)),
  onResetComments: () => dispatch(ActionCreator.resetComments()),
});

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
