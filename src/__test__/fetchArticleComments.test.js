import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchArticleComments } from '../actions/actions';
import * as actions from '../actions/articleComments';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: FetchAllArticles', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches FETCH_ARTICLE_COMMENTS_SUCCESS when fetching is done', () => {
    // creates a fake HTTP response
    nock(ROOT)
      .get('/articles/583412965905f02e4c8e6e1f/comments')
      .reply(200, {
        comments: [],
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.FETCH_ARTICLE_COMMENTS_REQUEST },
      { type: types.FETCH_ARTICLE_COMMENTS_SUCCESS, data: [] },
    ];

    // create a fake Redux store
    const store = mockStore({ allArticleComments: { comments: [] } });
    const id = '583412965905f02e4c8e6e1f';
    // dispatch the async action
    return store.dispatch(fetchArticleComments(id))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('articleComments', () => {
  test('it is a function', () => {
    expect(typeof fetchArticleComments).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.fetchArticleCommentsRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.fetchArticleCommentsSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = actions.fetchArticleCommentsSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof actions.fetchArticleCommentsError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = actions.fetchArticleCommentsError(data);
    expect(test.data).toEqual('There was an Error');
  });
});