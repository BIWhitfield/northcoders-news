import * as types from './types';

export function voteOnTopicArticlesRequest() {
  return {
    type: types.VOTE_TOPIC_ARTICLE_REQUEST,
  };
}

export function voteOnTopicArticlesSuccess(articleId, vote) {
  return {
    type: types.VOTE_TOPIC_ARTICLE_SUCCESS,
    articleId,
    vote,
  };
}

export function voteOnTopicArticlesError(error) {
  return {
    type: types.VOTE_TOPIC_ARTICLE_ERROR,
    error,
  };
}
