import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

import VoteButtons from './VoteButtons';
import PostCommentForm from './PostCommentForm';
import ArticleComments from './ArticleComments';

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
    this.props.fetchArticle(this.props.match.params.article_id);
  }

  inputHandler(e) {
    console.log('HELLO', e.target.value);
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
            <VoteButtons votes={this.props.article.votes} />
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
              <ArticleComments id={this.props.match.params.article_id} />
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
    addComment: (articleId, comment) => {
      dispatch(actions.addComment(articleId, comment));
    },
  };
}


function mapStateToProps(state) {
  return {
    article: state.article,
  };
}

Article.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
