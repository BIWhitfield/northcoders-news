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
    newState.article = Object.assign({}, action.data);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.article = {};
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
    newState.comments = action.data;
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


  // ADD VOTE TO ARTICLE
  if (action.type === types.VOTE_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.VOTE_ARTICLE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    const newArticle = Object.assign({}, action.data);
    newState.article = newArticle;
    newState.loading = false;
    return newState;
  }


  // ADD VOTE TO COMMENT
  if (action.type === types.VOTE_COMMENT_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.VOTE_COMMENT_SUCCESS) {
    const newState = Object.assign({}, prevState);
    const newData = newState.comments.slice();
    newData.map((comment) => {
      if (comment._id === action.commentId) {
        if (action.vote === 'up') {
          comment.votes++;
          return comment;
        }
        comment.votes--;
        return comment;
      }
      return comment;
    });
    newState.comments = newData;

    return newState;
  }


  // ADD VOTE TO ARTICLE IN LIST
  if (action.type === types.VOTE_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.VOTE_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    const newData = newState.articles.slice();
    newData.map((article) => {
      if (article._id === action.articleId) {
        if (action.vote === 'up') {
          article.votes++;
          return article;
        }
        article.votes--;
        return article;
      }
      return article;
    });
    newState.articles = newData;

    return newState;
  }


  // ADD VOTE TO TOPIC ARTICLE IN LIST
  if (action.type === types.VOTE_TOPIC_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.VOTE_TOPIC_ARTICLE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    const newData = newState.topicArticles.slice();
    console.log('DATAAAAAAAA', newData)
    newData.map((topicArticle) => {
      if (topicArticle._id === action.articleId) {
        if (action.vote === 'up') {
          topicArticle.votes++;
          return topicArticle;
        }
        topicArticle.votes--;
        return topicArticle;
      }
      return topicArticle;
    });
    newState.topicArticles = newData;

    return newState;
  }


  return prevState;
}

export default reducer;
