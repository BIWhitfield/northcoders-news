import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunk from 'redux-thunk';
import nock from 'nock';
import { commentVote } from '../actions/actions';
import * as actions from '../actions/voteComment';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async action: commentVote', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('dispatches VOTE_COMMENT_SUCCESS when put is done', () => {
    // creates a fake HTTP response
    const commentId = '595822171075b1001112be7f';
    const vote = 'up';
    nock(ROOT)
      .put('/comments/595822171075b1001112be7f?vote=up')
      .reply(200, {
        comment: {},
      });

    // Actions we expect to be dispatched
    const expectedActions = [
      { type: types.VOTE_COMMENT_REQUEST },
      { type: types.VOTE_COMMENT_SUCCESS, commentId: '595822171075b1001112be7f', vote: 'up' },
    ];

    // create a fake Redux store
    const store = mockStore({ comment: {} });

    // dispatch the async action
    return store.dispatch(commentVote(commentId, vote))
      .then(() => {
        // check that all actions are equal to expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('commentVote', () => {
  test('it is a function', () => {
    expect(typeof commentVote).toBe('function');
  });
  test('its request action returns an object', () => {
    expect(typeof actions.commentVoteRequest()).toEqual('object');
  });

  test('its success action returns an object', () => {
    expect(typeof actions.commentVoteSuccess()).toEqual('object');
  });
  test('success action returns data passed as a parameter', () => {
    const commentId = '123456';
    const vote = 'up';
    const test1 = actions.commentVoteSuccess(commentId, vote);
    expect(test1.commentId).toEqual('123456');
    expect(test1.vote).toEqual('up');
  });

  test('its error action returns an object', () => {
    expect(typeof actions.commentVoteError()).toEqual('object');
  });
  test('its error action returns data passed as a parameter', () => {
    const error = 'There was an Error';
    const test = actions.commentVoteError(error);
    expect(test.error).toEqual('There was an Error');
  });
});
