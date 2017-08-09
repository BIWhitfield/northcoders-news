import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

import Comment from './Comment';

class ArticleComments extends Component {

  componentDidMount() {
    this.props.fetchArticleComments(this.props.id);
  }

  render() {
    return (
      <section className="box">
        <div id="comment">
          {this.props.comments.sort((a, b) => b.votes - a.votes)
            .map(comment => <Comment comment={comment} key={comment._id} />)}
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticleComments: (id) => {
      dispatch(actions.fetchArticleComments(id));
    },
  };
}


function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}

ArticleComments.propTypes = {
  fetchArticleComments: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
