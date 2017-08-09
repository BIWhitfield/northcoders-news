import * as types from './types';

export function fetchTopicArticlesRequest() {
  return {
    type: types.FETCH_TOPIC_ARTICLES_REQUEST,
  };
}

export function fetchTopicArticlesSuccess(articles) {
  return {
    type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
    data: articles,
  };
}

export function fetchTopicArticlesError(error) {
  return {
    type: types.FETCH_TOPIC_ARTICLES_ERROR,
    data: error,
  };
}
