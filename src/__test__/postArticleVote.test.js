import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { articleVote } from '../actions/actions';
import * as actions from '../actions/articleVote';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: voteArticle', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches VOTE_ARTICLE_SUCCESS when put is done', () => {
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
      { type: types.VOTE_ARTICLE_REQUEST },
      { type: types.VOTE_ARTICLE_SUCCESS, data: { article: {} } },
    ];

    // create a fake Redux store
    const store = mockStore({ article: {} });

    // dispatch the async action
    return store.dispatch(articleVote(articleId, vote))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('articleVote', () => {
  test('it is a function', () => {
    expect(typeof articleVote).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.articleVoteRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.articleVoteSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const articleId = '123456';
    const test1 = actions.articleVoteSuccess(articleId);
    expect(test1.data).toEqual('123456');
  });

  test('its error action returns an object', () => {
    expect(typeof actions.articleVoteError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const error = 'There was an Error';
    const test = actions.articleVoteError(error);
    expect(test.error).toEqual('There was an Error');
  });
});
