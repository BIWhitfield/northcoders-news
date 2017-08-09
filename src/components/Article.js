import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

import VoteButtons from './VoteButtons';
import PostCommentForm from './PostCommentForm';

class Article extends React.Component {

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.article_id);
  }

  render() {
    return (
      <section className="container box">
        {console.log(this.props)}
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
              <PostCommentForm />
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
  votes: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
