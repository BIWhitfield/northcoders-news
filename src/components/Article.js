import React from 'react';
import { connect } from 'react-redux';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

import VoteButtons from './VoteButtons';
import PostCommentForm from './PostCommentForm';
import Comment from './Comment';

import '../css/Article.css';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentTextInput: '',
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id;
    this.props.fetchArticle(articleId);
    this.props.fetchUsers();
    this.props.fetchArticleComments(articleId);
  }

  inputHandler(e) {
    this.setState({
      commentTextInput: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.addComment(this.props.match.params.article_id, this.state.commentTextInput);
    this.setState({ commentTextInput: '' });
  }

  render() {
    return (
      <section className="container box">
        <div className="columns">
          <div className="column is-2">
            <VoteButtons votes={this.props.article.votes} id={this.props.article._id} handleVote={this.props.articleVote} />
          </div>
          <div className="column is-8">
            <section className="box">
              <h1 className="title"><b>{this.props.article.title}</b></h1>
              <h6 className="subtitle">Created by: {this.props.article.created_by}</h6>
              <p className="">{this.props.article.body}</p>
            </section>

            <section className="box">
              <PostCommentForm
                inputHandler={this.inputHandler}
                submitHandler={this.submitHandler}
                input={this.state.commentTextInput}
              />

              <section className="box comment">
                <div className="comment">
                  {map(this.props.comments, comment => (
                    <Comment
                      comments={this.props.comments}
                      comment={comment}
                      key={comment._id}
                      id={comment._id}
                      createdBy={comment.created_by}
                      avatarUrl={this.props.users[comment.created_by].avatar_url}
                      commentVote={this.props.commentVote}
                      deleteComment={this.props.deleteComment}
                    />
                    ))}
                </div>
              </section>
            </section>
          </div>
        </div>
      </section>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchArticle: (id) => {
      dispatch(actions.fetchArticle(id));
    },
    fetchUsers: () => {
      dispatch(actions.fetchUsers());
    },
    fetchArticleComments: (id) => {
      dispatch(actions.fetchArticleComments(id));
    },
    addComment: (articleId, comment) => {
      dispatch(actions.addComment(articleId, comment));
    },
    articleVote: (articleId, vote) => {
      dispatch(actions.articleVote(articleId, vote));
    },
    commentVote: (commentId, vote) => {
      dispatch(actions.commentVote(commentId, vote));
    },
    deleteComment: (commentId) => {
      dispatch(actions.deleteComment(commentId));
    },
  };
}


function mapStateToProps(state) {
  return {
    article: state.article,
    comments: state.comments,
    users: state.users,
  };
}

Article.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  fetchArticleComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
  articleVote: PropTypes.func.isRequired,
  commentVote: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
