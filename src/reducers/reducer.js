import * as types from '../actions/types';
import INITIAL_STATE from './INITIAL_STATE';

const usernameToObj = users => users.reduce((res, user) => {
  res[user.username] = user;
  return res;
}, {});

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


  // FETCH USERS
  if (action.type === types.FETCH_USERS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_USERS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.users = usernameToObj(action.data);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_USERS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.users = [];
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

  const sortComments = data => data.sort((a, b) => b.votes - a.votes);

  // FETCH ARTICLE COMMENTS
  if (action.type === types.FETCH_ARTICLE_COMMENTS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_COMMENTS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.comments = sortComments(action.data);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_COMMENTS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.comments = [];
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

  if (action.type === types.ADD_COMMENT_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
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

  if (action.type === types.VOTE_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
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
    const newDataSort = sortComments(newData);
    newDataSort.map((comment) => {
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
    newState.comments = newDataSort;
    newState.loading = false;

    return newState;
  }

  if (action.type === types.VOTE_COMMENT_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
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
    newState.loading = false;

    return newState;
  }

  if (action.type === types.VOTE_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
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

  if (action.type === types.VOTE_TOPIC_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
    return newState;
  }


  // DELETE COMMENT REDUCER
  if (action.type === types.DELETE_USER_COMMENT_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.DELETE_USER_COMMENT_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.loading = false;
    newState.comments = prevState.comments.filter(comment => comment._id !== action.commentId);
    return newState;
  }

  if (action.type === types.DELETE_USER_COMMENT_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.comments = [];
    newState.loading = false;
    return newState;
  }


  return prevState;
}

export default reducer;
