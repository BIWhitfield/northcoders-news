import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import TopicArticle from './TopicArticle';

class TopicPage extends React.Component {

  componentDidMount() {
    this.props.fetchTopicArticles(this.props.match.params.topic_slug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.topic_slug !== nextProps.match.params.topic_slug) {
      this.props.fetchTopicArticles(nextProps.match.params.topic_slug);
    }
  }

  render() {
    return (
      <section className="container box">
        <div>{
        this.props.TopicArticles.sort((a, b) => b.votes - a.votes)
          .map(article =>
            (<TopicArticle
              article={article}
              id={article._id}
              title={article.title}
              votes={article.votes}
              key={article._id}
              avatarUrl={this.props.users[article.created_by].avatar_url}
              voteOnTopicArticles={this.props.voteOnTopicArticles}
            />))}</div>
      </section>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchTopicArticles: (id) => {
      dispatch(actions.fetchTopicArticles(id));
    },
    voteOnTopicArticles: (articleId, vote) => {
      dispatch(actions.voteOnTopicArticles(articleId, vote));
    },
    fetchUsers: () => {
      dispatch(actions.fetchUsers());
    },
  };
}


function mapStateToProps(state) {
  return {
    TopicArticles: state.topicArticles,
    users: state.users,
  };
}

TopicPage.propTypes = {
  fetchTopicArticles: PropTypes.func.isRequired,
  TopicArticles: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
