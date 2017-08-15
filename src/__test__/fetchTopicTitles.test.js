import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchTopicTitles } from '../actions/actions';
import * as actions from '../actions/fetchAllTopicTitles';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: FetchTopicTitles', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches FETCH_TOPIC_TITLES_SUCCESS when fetching is done', () => {
    // creates a fake HTTP response
    nock(ROOT)
      .get('/topics/')
      .reply(200, {
        topics: [1, 2, 3],
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.FETCH_TOPIC_TITLES_REQUEST },
      { type: types.FETCH_TOPIC_TITLES_SUCCESS, data: [1, 2, 3] },
    ];

    // create a fake Redux store
    const store = mockStore({ topics: { data: [] } });

    // dispatch the async action
    return store.dispatch(fetchTopicTitles())
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});


describe('fetchTopicTitles', () => {
  test('it is a function', () => {
    expect(typeof fetchTopicTitles).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.fetchTopicTitlesRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.fetchTopicTitlesSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = actions.fetchTopicTitlesSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof actions.fetchTopicTitlesError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = actions.fetchTopicTitlesError(data);
    expect(test.data).toEqual('There was an Error');
  });
});