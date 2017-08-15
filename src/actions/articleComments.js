import * as types from './types';

export function fetchArticleCommentsRequest() {
  return {
    type: types.FETCH_ARTICLE_COMMENTS_REQUEST,
  };
}

export function fetchArticleCommentsSuccess(comments) {
  return {
    type: types.FETCH_ARTICLE_COMMENTS_SUCCESS,
    data: comments,
  };
}

export function fetchArticleCommentsError(error) {
  return {
    type: types.FETCH_ARTICLE_COMMENTS_ERROR,
    data: error,
  };
}
