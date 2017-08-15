import reducer from '../reducers/reducer';
import INITIAL_STATE from '../reducers/INITIAL_STATE';
import * as types from '../actions/types';


describe('reducer', () => {
  test('it is a function', () => {
    expect(typeof reducer).toBe('function');
  });
  describe('fetchArticles', () => {
    test('it returns newState.loading as true for FETCH_ARTICLES_REQUEST action', () => {
      const action = {
        type: types.FETCH_ARTICLES_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.FETCH_ARTICLES_SUCCESS,
        data: ['Hello', 'Dave'],
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.articles).toEqual(['Hello', 'Dave']);
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.FETCH_ARTICLES_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.articles).toEqual([]);
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });

  describe('fetchUsers', () => {
    test('it returns newState.loading as true for FETCH_USERS_REQUEST action', () => {
      const action = {
        type: types.FETCH_USERS_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.FETCH_USERS_SUCCESS,
        data: [{
          _id: '583412915905f02e4c8e6dfa',
          username: 'cooljmessy',
          name: 'Peter Messy',
          avatar_url: 'http://i.imgur.com/WfX0Neu.jpg',
          __v: 0,
        }],
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.users).toEqual({
        cooljmessy: {
          __v: 0,
          _id: '583412915905f02e4c8e6dfa',
          avatar_url: 'http://i.imgur.com/WfX0Neu.jpg',
          name: 'Peter Messy',
          username: 'cooljmessy' } });
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.FETCH_USERS_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.users).toEqual([]);
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });

  describe('fetchTopicTitles', () => {
    test('it returns newState.loading as true for FETCH_TOPIC_TITLES_REQUEST action', () => {
      const action = {
        type: types.FETCH_TOPIC_TITLES_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.FETCH_TOPIC_TITLES_SUCCESS,
        data: [{
          _id: '583412915905f02e4c8e6dfd',
          title: 'Football',
          slug: 'football',
          __v: 0,
        }],
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.topics).toEqual([{
        _id: '583412915905f02e4c8e6dfd',
        title: 'Football',
        slug: 'football',
        __v: 0,
      }]);
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.FETCH_TOPIC_TITLES_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.topics).toEqual([]);
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });
});

describe('fetchTopicArticles', () => {
  test('it returns newState.loading as true for FETCH_TOPIC_ARTICLES_REQUEST action', () => {
    const action = {
      type: types.FETCH_TOPIC_ARTICLES_REQUEST,
    };
    const test = reducer(INITIAL_STATE, action);
    expect(test.loading).toEqual(true);
  });
  test('it returns newState with data from action added', () => {
    const action = {
      type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
      data: [{
        _id: '583412965905f02e4c8e6e1f',
        title: 'Express.js: A Server-Side JavaScript Framework',
        body: 'You’re probably aware that JavaScript is the progr…e are changing the way developers build websites.',
        created_by: 'cooljmessy',
        belongs_to: 'coding',
      }],
    };
    const test = reducer(INITIAL_STATE, action);
    expect(test.loading).toEqual(false);
    expect(test.topicArticles).toEqual([{
      _id: '583412965905f02e4c8e6e1f',
      title: 'Express.js: A Server-Side JavaScript Framework',
      body: 'You’re probably aware that JavaScript is the progr…e are changing the way developers build websites.',
      created_by: 'cooljmessy',
      belongs_to: 'coding',
    }]);
  });
  test('it returns an error based on action data', () => {
    const action = {
      type: types.FETCH_TOPIC_ARTICLES_ERROR,
      data: 'Hello Error, how annoying you have arrived uninvited!',
    };
    const test = reducer(INITIAL_STATE, action);
    expect(test.loading).toEqual(false);
    expect(test.topicArticles).toEqual([]);
    expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
  });

  describe('fetchArticle', () => {
    test('it returns newState.loading as true for FETCH_ARTICLE_REQUEST action', () => {
      const action = {
        type: types.FETCH_ARTICLE_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.FETCH_ARTICLE_SUCCESS,
        data: [{
          _id: '583412965905f02e4c8e6e1f',
          belongs_to: 'coding',
          body: 'You’re probably aware that JavaScript is the progr…e are changing the way developers build websites.',
          created_by: 'cooljmessy',
          title: 'Express.js: A Server-Side JavaScript Framework',
        }],
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.article).toEqual({
        0: {
          _id: '583412965905f02e4c8e6e1f',
          belongs_to: 'coding',
          body: 'You’re probably aware that JavaScript is the progr…e are changing the way developers build websites.',
          created_by: 'cooljmessy',
          title: 'Express.js: A Server-Side JavaScript Framework',
        },
      });
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.FETCH_ARTICLE_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.article).toEqual({});
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });

  describe('fetchArticleComments', () => {
    test('it returns newState.loading as true for FETCH_ARTICLE_COMMENTS_REQUEST action', () => {
      const action = {
        type: types.FETCH_ARTICLE_COMMENTS_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.FETCH_ARTICLE_COMMENTS_SUCCESS,
        data: [{
          _id: '583412b85905f02e4c8e6f1f',
          body: 'Imaivoveh vuf lu rapogzu si wuefore paroho kuz sus… ahdiv ohasiati catuge bale kiprofu uw no jecmim.',
          belongs_to: '583412965905f02e4c8e6e1f',
          created_by: 'tickle122',
          votes: 48,
        }],
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.comments).toEqual([{
        _id: '583412b85905f02e4c8e6f1f',
        body: 'Imaivoveh vuf lu rapogzu si wuefore paroho kuz sus… ahdiv ohasiati catuge bale kiprofu uw no jecmim.',
        belongs_to: '583412965905f02e4c8e6e1f',
        created_by: 'tickle122',
        votes: 48,
      }]);
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.FETCH_ARTICLE_COMMENTS_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.comments).toEqual([]);
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });

  describe('addComment', () => {
    test('it returns newState.loading as true for FETCH_ARTICLE_COMMENTS_REQUEST action', () => {
      const action = {
        type: types.ADD_COMMENT_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.ADD_COMMENT_SUCCESS,
        data: { _id: '007',
          comment: 'Hello Dave',
        },
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.comments).toEqual({ '007': { _id: '007', comment: 'Hello Dave' } });
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.ADD_COMMENT_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.comments).toEqual([]);
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });

  describe('articleVote', () => {
    test('it returns newState.loading as true for VOTE_ARTICLE_REQUEST action', () => {
      const action = {
        type: types.VOTE_ARTICLE_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.VOTE_ARTICLE_SUCCESS,
        data: {
          belongs_to: 'coding',
          created_by: 'cooljmessy',
          title: 'Express.js: A Server-Side JavaScript Framework',
          votes: 359,
        },
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.article).toEqual({
        belongs_to: 'coding',
        created_by: 'cooljmessy',
        title: 'Express.js: A Server-Side JavaScript Framework',
        votes: 359,
      });
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.VOTE_ARTICLE_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.article).toEqual({});
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });

  describe('voteComment', () => {
    test('it returns newState.loading as true for VOTE_COMMENT_REQUEST action', () => {
      const action = {
        type: types.VOTE_COMMENT_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.VOTE_COMMENT_SUCCESS,
        commentId: '595822171075b1001112be7f',
        vote: 'up',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(typeof test.comments).toBe('object');
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.VOTE_COMMENT_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.comments).toEqual([]);
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });

  describe('articlesVote', () => {
    test('it returns newState.loading as true for VOTE_COMMENT_REQUEST action', () => {
      const action = {
        type: types.VOTE_ARTICLES_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.VOTE_ARTICLES_SUCCESS,
        articleId: '595822171075b1001112be7f',
        vote: 'up',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(typeof test.articles).toBe('object');
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.VOTE_ARTICLES_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.comments).toEqual([]);
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });

  describe('deleteComment', () => {
    test('it returns newState.loading as true for VOTE_COMMENT_REQUEST action', () => {
      const action = {
        type: types.DELETE_USER_COMMENT_REQUEST,
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(true);
    });
    test('it returns newState with data from action added', () => {
      const action = {
        type: types.DELETE_USER_COMMENT_SUCCESS,
        commentId: 1,
      };
      const initialState = {
        comments: [{ _id: 1, body: 'Hello' }, { _id: 2, body: 'Pat' }, { _id: 3, body: 'Sharpe' }],
        loading: true,
      };
      const test = reducer(initialState, action);
      expect(test.loading).toEqual(false);
      expect(test.comments).toEqual([{ _id: 2, body: 'Pat' }, { _id: 3, body: 'Sharpe' }]);
    });
    test('it returns an error based on action data', () => {
      const action = {
        type: types.DELETE_USER_COMMENT_ERROR,
        data: 'Hello Error, how annoying you have arrived uninvited!',
      };
      const test = reducer(INITIAL_STATE, action);
      expect(test.loading).toEqual(false);
      expect(test.comments).toEqual([]);
      expect(test.error).toEqual('Hello Error, how annoying you have arrived uninvited!');
    });
  });
});

