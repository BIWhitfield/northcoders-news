import * as types from './types';

export function deleteCommentRequest() {
  return {
    type: types.DELETE_USER_COMMENT_REQUEST,
  };
}

export function deleteCommentSuccess(commentId) {
  return {
    type: types.DELETE_USER_COMMENT_SUCCESS,
    commentId,
  };
}

export function deleteCommentError(error) {
  return {
    type: types.DELETE_USER_COMMENT_ERROR,
    error,
  };
}
