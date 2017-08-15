import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchUsers } from '../actions/actions';
import * as actions from '../actions/fetchAllUsers';
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
  it('dispatches FETCH_USERS_SUCCESS when fetching is done', () => {
    // creates a fake HTTP response
    nock(ROOT)
      .get('/users')
      .reply(200, {
        users: [],
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.FETCH_USERS_REQUEST },
      { type: types.FETCH_USERS_SUCCESS, data: [] },
    ];

    // create a fake Redux store
    const store = mockStore({ users: [] });
    // dispatch the async action
    return store.dispatch(fetchUsers())
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('fetchAllUsers', () => {
  test('it is a function', () => {
    expect(typeof fetchUsers).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.fetchUsersRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.fetchUsersSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const data = [1, 2, 3];
    const test1 = actions.fetchUsersSuccess(data);
    expect(test1.data).toEqual([1, 2, 3]);
  });

  test('its error action returns an object', () => {
    expect(typeof actions.fetchUsersError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const data = 'There was an Error';
    const test = actions.fetchUsersError(data);
    expect(test.data).toEqual('There was an Error');
  });
});