import * as types from './types';

export function fetchTopicTitlesRequest() {
  return {
    type: types.FETCH_TOPIC_TITLES_REQUEST,
  };
}

export function fetchTopicTitlesSuccess(topicsTitles) {
  return {
    type: types.FETCH_TOPIC_TITLES_SUCCESS,
    data: topicsTitles,
  };
}

export function fetchTopicTitlesError(error) {
  return {
    type: types.FETCH_TOPIC_TITLES_ERROR,
    data: error,
  };
}
