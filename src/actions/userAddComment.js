import * as types from './types';

export function addCommentRequest() {
  return {
    type: types.ADD_COMMENT_REQUEST,
  };
}

export function addCommentSuccess(comment) {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    data: comment,
  };
}

export function addCommentError(error) {
  return {
    type: types.ADD_COMMENT_ERROR,
    data: error,
  };
}
