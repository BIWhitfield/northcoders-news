import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchArticle } from '../actions/actions';
import * as actions from '../actions/fetchArticle';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: FetchArticle', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches FETCH_ARTICLE_SUCCESS when fetching is done', () => {
    // creates a fake HTTP response
    const id = '583412965905f02e4c8e6e1f';
    nock(ROOT)
      .get(`/articles/${id}`)
      .reply(200, {
        article: {},
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.FETCH_ARTICLE_REQUEST },
      { type: types.FETCH_ARTICLE_SUCCESS, data: { article: {} } },
    ];

    // create a fake Redux store
    const store = mockStore({ data: {} });
    // dispatch the async action
    return store.dispatch(fetchArticle(id))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('fetchArticle', () => {
  test('it is a function', () => {
    expect(typeof fetchArticle).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.fetchArticleRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.fetchArticleSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = actions.fetchArticleSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof actions.fetchArticleError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = actions.fetchArticleError(data);
    expect(test.data).toEqual('There was an Error');
  });
});
