import * as types from './types';

export function voteOnArticlesRequest() {
  return {
    type: types.VOTE_ARTICLES_REQUEST,
  };
}

export function voteOnArticlesSuccess(articleId, vote) {
  return {
    type: types.VOTE_ARTICLES_SUCCESS,
    articleId,
    vote,
  };
}

export function voteOnArticlesError(error) {
  return {
    type: types.VOTE_ARTICLES_ERROR,
    error,
  };
}
