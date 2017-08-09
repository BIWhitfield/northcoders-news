import axios from 'axios';
import { ROOT } from '../config';
import * as fetchAllArticles from './fetchAllArticles';
import * as fetchAllTopicTitles from './fetchAllTopicTitles';
import * as fetchAllTopicArticles from './fetchAllTopicArticles';
import * as fetchIndividualArticle from './fetchArticle';


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
