import * as types from './types';

export function fetchArticleRequest() {
  return {
    type: types.FETCH_ARTICLE_REQUEST,
  };
}

export function fetchArticleSuccess(articles) {
  return {
    type: types.FETCH_ARTICLE_SUCCESS,
    data: articles,
  };
}

export function fetchArticleError(error) {
  return {
    type: types.FETCH_ARTICLE_ERROR,
    data: error,
  };
}
