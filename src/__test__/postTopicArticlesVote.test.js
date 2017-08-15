import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { voteOnTopicArticles } from '../actions/actions';
import * as actions from '../actions/topicArticlesVote';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: voteOnTopicArticles', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches VOTE_TOPIC_ARTICLES_SUCCESS when put is done', () => {
    // creates a fake HTTP response
    const articleId = '583412965905f02e4c8e6e1f';
    const vote = 'up';
    nock(ROOT)
      .put('/articles/583412965905f02e4c8e6e1f?vote=up')
      .reply(200, {
        article: {},
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.VOTE_TOPIC_ARTICLE_REQUEST },
      { type: types.VOTE_TOPIC_ARTICLE_SUCCESS, articleId: '583412965905f02e4c8e6e1f', vote: 'up' },
    ];

    // create a fake Redux store
    const store = mockStore({ article: {} });

    // dispatch the async action
    return store.dispatch(voteOnTopicArticles(articleId, vote))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('voteOnTopicArticles', () => {
  test('it is a function', () => {
    expect(typeof voteOnTopicArticles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.voteOnTopicArticlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.voteOnTopicArticlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const articleId = '123456';
    const test1 = actions.voteOnTopicArticlesSuccess(articleId);
    expect(test1.articleId).toEqual('123456');
  });

  test('its error action returns an object', () => {
    expect(typeof actions.voteOnTopicArticlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const error = 'There was an Error';
    const test = actions.voteOnTopicArticlesError(error);
    expect(test.error).toEqual('There was an Error');
  });
});
