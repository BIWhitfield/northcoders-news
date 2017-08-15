import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { deleteComment } from '../actions/actions';
import * as actions from '../actions/deleteCommentAction';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: deleteComment', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches DELETE_COMMENT_SUCCESS when fetching is done', () => {
    // creates a fake HTTP response
    const commentId = '595822171075b1001112be7f'
    nock(ROOT)
      .delete('/comments/595822171075b1001112be7f')
      .reply(200, {
        commentId: '595822171075b1001112be7f',
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.DELETE_USER_COMMENT_REQUEST },
      { type: types.DELETE_USER_COMMENT_SUCCESS, commentId: '595822171075b1001112be7f' },
    ];

    // create a fake Redux store
    const store = mockStore({});

    // dispatch the async action
    return store.dispatch(deleteComment(commentId))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('deleteComment', () => {
  test('it is a function', () => {
    expect(typeof deleteComment).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.deleteCommentRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.deleteCommentSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const commentId = '595822171075b1001112be7f';
    const test1 = actions.deleteCommentSuccess(commentId);
    expect(test1.commentId).toEqual('595822171075b1001112be7f');
  });

  test('its error action returns an object', () => {
    expect(typeof actions.deleteCommentError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const error = 'There was an Error';
    const test = actions.deleteCommentError(error);
    expect(test.error).toEqual('There was an Error');
  });
});
