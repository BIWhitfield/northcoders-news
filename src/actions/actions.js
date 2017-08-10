import axios from 'axios';
import { ROOT } from '../config';
import * as fetchAllArticles from './fetchAllArticles';
import * as fetchAllTopicTitles from './fetchAllTopicTitles';
import * as fetchAllTopicArticles from './fetchAllTopicArticles';
import * as fetchIndividualArticle from './fetchArticle';
import * as userAddComment from './userAddComment';
import * as articleComments from './articleComments';
import * as articleVoteAction from './articleVote';


// FETCH ALL ARTICLES
export function fetchArticles() {
  return (dispatch) => {
    dispatch(fetchAllArticles.fetchArticlesRequest());
    axios.get(`${ROOT}/articles`)
      .then((res) => {
        dispatch(fetchAllArticles.fetchArticlesSuccess(res.data.articles));
      })
      .catch((err) => {
        dispatch(fetchAllArticles.fetchArticlesError(err));
      });
  };
}


// FETCH TOPIC TITLES
export function fetchTopicTitles() {
  return (dispatch) => {
    dispatch(fetchAllTopicTitles.fetchTopicTitlesRequest());
    axios.get(`${ROOT}/topics/`)
      .then((res) => {
        dispatch(fetchAllTopicTitles.fetchTopicTitlesSuccess(res.data.topics));
      })
      .catch((err) => {
        dispatch(fetchAllTopicTitles.fetchTopicTitlesError(err));
      });
  };
}


// FETCH TOPICS ARTICLES
export function fetchTopicArticles(topicId) {
  return (dispatch) => {
    dispatch(fetchAllTopicArticles.fetchTopicArticlesRequest());
    axios.get(`${ROOT}/topics/${topicId}/articles`)
      .then((res) => {
        dispatch(fetchAllTopicArticles.fetchTopicArticlesSuccess(res.data.articles));
      })
      .catch((err) => {
        dispatch(fetchAllTopicArticles.fetchTopicArticlesError(err));
      });
  };
}


// FETCH ARTICLE
export function fetchArticle(articleId) {
  return (dispatch) => {
    dispatch(fetchIndividualArticle.fetchArticleRequest());
    axios.get(`${ROOT}/articles/${articleId}`)
      .then((res) => {
        dispatch(fetchIndividualArticle.fetchArticleSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchIndividualArticle.fetchArticleError(err));
      });
  };
}


// FETCH ARTICLE COMMENTS
export function fetchArticleComments(articleId) {
  return (dispatch) => {
    dispatch(articleComments.fetchArticleCommentsRequest());
    axios.get(`${ROOT}/articles/${articleId}/comments`)
      .then((res) => {
        dispatch(articleComments.fetchArticleCommentsSuccess(res.data.comments));
      })
      .catch((err) => {
        dispatch(articleComments.fetchArticleCommentsError(err));
      });
  };
}


// POST ARTICLE COMMENT
export function addComment(articleId, comment) {
  return (dispatch) => {
    dispatch(userAddComment.addCommentRequest());
    axios.post(`${ROOT}/articles/${articleId}/comments`, { comment })
      .then((res) => {
        dispatch(userAddComment.addCommentSuccess(res.data.comment));
      })
      .catch((err) => {
        dispatch(userAddComment.addCommentError(err));
      });
  };
}


// VOTE ARTICLE
export function articleVote(articleId, vote) {
  return (dispatch) => {
    dispatch(articleVoteAction.articleVoteRequest());
    axios
      .put(`${ROOT}/articles/${articleId}?vote=${vote}`)
      .then((res) => {
        dispatch(articleVoteAction.articleVoteSuccess(res.data));
      })
      .catch((error) => {
        dispatch(articleVoteAction.articleVoteError(error));
      });
  };
}
