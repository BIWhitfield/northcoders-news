import * as actions from '../actions/actions';
import * as fetchAllArticles from '../actions/fetchAllArticles';
import * as fetchAllTopicTitles from '../actions/fetchAllTopicTitles';
import * as fetchAllTopicArticles from '../actions/fetchAllTopicArticles';
import * as fetchIndividualArticle from '../actions/fetchArticle';
import * as userAddComment from '../actions/userAddComment';
import * as articleComments from '../actions/articleComments';
import * as articleVoteAction from '../actions/articleVote';
import * as voteOnComment from '../actions/voteComment';
import * as articlesVote from '../actions/articlesVote';
import * as topicArticlesVote from '../actions/topicArticlesVote';
import * as fetchAllUsers from '../actions/fetchAllUsers';
import * as deleteCommentAction from '../actions/deleteCommentAction';


describe('fetchAllArticles', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchArticles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof fetchAllArticles.fetchArticlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof fetchAllArticles.fetchArticlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = fetchAllArticles.fetchArticlesSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof fetchAllArticles.fetchArticlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = fetchAllArticles.fetchArticlesError(data);
    expect(test.data).toEqual('There was an Error');
  });
});


describe('fetchTopicTitles', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchTopicTitles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof fetchAllTopicArticles.fetchTopicArticlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof fetchAllTopicArticles.fetchTopicArticlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = fetchAllTopicArticles.fetchTopicArticlesSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof fetchAllTopicArticles.fetchTopicArticlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = fetchAllTopicArticles.fetchTopicArticlesError(data);
    expect(test.data).toEqual('There was an Error');
  });
});


describe('fetchAllTopicArticles', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchTopicArticles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof fetchAllTopicTitles.fetchTopicTitlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof fetchAllTopicTitles.fetchTopicTitlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = fetchAllTopicTitles.fetchTopicTitlesSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof fetchAllTopicTitles.fetchTopicTitlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = fetchAllTopicTitles.fetchTopicTitlesError(data);
    expect(test.data).toEqual('There was an Error');
  });
});


describe('fetchArticle', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchArticle).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof fetchIndividualArticle.fetchArticleRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof fetchIndividualArticle.fetchArticleSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = fetchIndividualArticle.fetchArticleSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof fetchIndividualArticle.fetchArticleError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = fetchIndividualArticle.fetchArticleError(data);
    expect(test.data).toEqual('There was an Error');
  });
});


describe('fetchAllUsers', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchUsers).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof fetchAllUsers.fetchUsersRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof fetchAllUsers.fetchUsersSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = fetchAllUsers.fetchUsersSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof fetchAllUsers.fetchUsersError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = fetchAllUsers.fetchUsersError(data);
    expect(test.data).toEqual('There was an Error');
  });
});


describe('articleComments', () => {
  test('it is a function', () => {
    expect(typeof actions.fetchArticleComments).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof articleComments.fetchArticleCommentsRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof articleComments.fetchArticleCommentsSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = articleComments.fetchArticleCommentsSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof articleComments.fetchArticleCommentsError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = articleComments.fetchArticleCommentsError(data);
    expect(test.data).toEqual('There was an Error');
  });
});
