import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { addComment } from '../actions/actions';
import * as actions from '../actions/userAddComment';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: addComment', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches ADD_COMMENT_SUCCESS when put is done', () => {
    // creates a fake HTTP response
    const articleId = '583412965905f02e4c8e6e1f';
    const comment = { comment: 'Hello' };
    nock(ROOT)
      .post('/articles/583412965905f02e4c8e6e1f/comments')
      .reply(200, {
        comment: { comment: 'Hello' },
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.ADD_COMMENT_REQUEST },
      { type: types.ADD_COMMENT_SUCCESS, data: { comment: 'Hello' } },
    ];

    // create a fake Redux store
    const store = mockStore({ comment: {} });

    // dispatch the async action
    return store.dispatch(addComment(articleId, comment))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('addComment', () => {
  test('it is a function', () => {
    expect(typeof addComment).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.addCommentRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.addCommentSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const comment = 'hello';
    const test1 = actions.addCommentSuccess(comment);
    expect(test1.data).toEqual('hello');
  });

  test('its error action returns an object', () => {
    expect(typeof actions.addCommentError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const error = 'There was an Error';
    const test = actions.addCommentError(error);
    expect(test.data).toEqual('There was an Error');
  });
});
