import * as types from './types';

export function articleVoteRequest() {
  return {
    type: types.VOTE_ARTICLE_REQUEST,
  };
}

export function articleVoteSuccess(article) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    data: article,
  };
}

export function articleVoteError(error) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    error,
  };
}
