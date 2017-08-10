import * as types from './types';

export function commentVoteRequest() {
  return {
    type: types.VOTE_COMMENT_REQUEST,
  };
}

export function commentVoteSuccess(commentId, vote) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    commentId,
    vote,
  };
}

export function commentVoteError(error) {
  return {
    type: types.VOTE_COMMENT_ERROR,
    error,
  };
}
