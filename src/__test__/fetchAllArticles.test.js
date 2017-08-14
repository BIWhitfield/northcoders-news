import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchArticles } from '../actions/actions';
import * as types from '../actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


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
      { type: types.FETCH_ARTICLES_SUCCESS, articles: [1, 2, 3] },
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
