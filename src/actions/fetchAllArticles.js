import * as types from './types';

export function fetchArticlesRequest() {
  return {
    type: types.FETCH_ARTICLES_REQUEST,
  };
}

export function fetchArticlesSuccess(articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles,
  };
}

export function fetchArticlesError(error) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    data: error,
  };
}
