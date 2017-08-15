import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchTopicArticles } from '../actions/actions';
import * as actions from '../actions/fetchAllTopicArticles';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: FetchAllTopicArticles', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches FETCH_TOPIC_ARTICLES_SUCCESS when fetching is done', () => {
    // creates a fake HTTP response
    const id = 'football';
    nock(ROOT)
      .get(`/topics/${id}/articles`)
      .reply(200, {
        articles: [1, 2, 3],
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.FETCH_TOPIC_ARTICLES_REQUEST },
      { type: types.FETCH_TOPIC_ARTICLES_SUCCESS, data: [1, 2, 3] },
    ];

    // create a fake Redux store
    const store = mockStore({ allArticles: { articles: [] } });

    // dispatch the async action
    return store.dispatch(fetchTopicArticles(id))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});


describe('fetchAllTopicArticles', () => {
  test('it is a function', () => {
    expect(typeof fetchTopicArticles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.fetchTopicArticlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.fetchTopicArticlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = actions.fetchTopicArticlesSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof actions.fetchTopicArticlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = actions.fetchTopicArticlesError(data);
    expect(test.data).toEqual('There was an Error');
  });
});
