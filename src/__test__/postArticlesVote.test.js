import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { voteOnArticles } from '../actions/actions';
import * as actions from '../actions/articlesVote';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: articlesVote', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches VOTE_ARTICLES_SUCCESS when put is done', () => {
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
      { type: types.VOTE_ARTICLES_REQUEST },
      { type: types.VOTE_ARTICLES_SUCCESS, articleId: '583412965905f02e4c8e6e1f', vote: 'up' },
    ];

    // create a fake Redux store
    const store = mockStore({ allArticles: { articles: [] } });

    // dispatch the async action
    return store.dispatch(voteOnArticles(articleId, vote))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('articlesVote', () => {
  test('it is a function', () => {
    expect(typeof voteOnArticles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.voteOnArticlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.voteOnArticlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const articleId = '123456';
    const vote = 5;
    const test1 = actions.voteOnArticlesSuccess(articleId, vote);
    expect(test1.articleId).toEqual('123456');
    expect(test1.vote).toEqual(5);
  });

  test('its error action returns an object', () => {
    expect(typeof actions.voteOnArticlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const error = 'There was an Error';
    const test = actions.voteOnArticlesError(error);
    expect(test.error).toEqual('There was an Error');
  });
});
