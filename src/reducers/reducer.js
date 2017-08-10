import * as types from '../actions/types';
import INITIAL_STATE from './INITIAL_STATE';


function reducer(prevState = INITIAL_STATE, action) {
  if (!action) return prevState;

  // FETCH ARTICLES
  if (action.type === types.FETCH_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.articles = [];
    newState.loading = false;
    return newState;
  }


  // FETCH TOPIC TITLES
  if (action.type === types.FETCH_TOPIC_TITLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_TITLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.topics = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_TITLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.topics = [];
    newState.loading = false;
    return newState;
  }


  // FETCH TOPIC ARTICLES
  if (action.type === types.FETCH_TOPIC_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.topicArticles = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.topicArticles = [];
    newState.loading = false;
    return newState;
  }


  // FETCH ARTICLE
  if (action.type === types.FETCH_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.article = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.article = [];
    newState.loading = false;
    return newState;
  }

  // FETCH ARTICLE COMMENTS
  if (action.type === types.FETCH_ARTICLE_COMMENTS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_COMMENTS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.comments = Object.assign({}, action.data);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_COMMENTS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.comments = {};
    newState.loading = false;
    return newState;
  }

  // ADD COMMENT TO ARTICLE

  if (action.type === types.ADD_COMMENT_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ADD_COMMENT_SUCCESS) {
    const newState = Object.assign({}, prevState);
    const newComments = Object.assign({}, newState.comments);
    newComments[action.data._id] = action.data;
    newState.comments = newComments;
    newState.loading = false;
    return newState;
  }

  return prevState;
}

export default reducer;
