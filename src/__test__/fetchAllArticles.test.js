import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchArticles } from '../actions/actions';
import * as actions from '../actions/fetchAllArticles';
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
  it('dispatches FETCH_ARTICLES_SUCCESS when fetching is done', () => {
    // creates a fake HTTP response
    nock(ROOT)
      .get('/articles')
      .reply(200, {
        articles: [1, 2, 3],
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.FETCH_ARTICLES_REQUEST },
      { type: types.FETCH_ARTICLES_SUCCESS, data: [1, 2, 3] },
    ];

    // create a fake Redux store
    const store = mockStore({ allArticles: { articles: [] } });

    // dispatch the async action
    return store.dispatch(fetchArticles())
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('fetchAllArticles', () => {
  test('it is a function', () => {
    expect(typeof fetchArticles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.fetchArticlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.fetchArticlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = actions.fetchArticlesSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof actions.fetchArticlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = actions.fetchArticlesError(data);
    expect(test.data).toEqual('There was an Error');
  });
});
