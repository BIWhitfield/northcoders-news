import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import ArticleCard from './ArticleCard';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div id="Home">
        {this.props.articles.sort((a, b) => b.votes - a.votes)
        .map(article => <ArticleCard id={article._id} title={article.title} votes={article.votes} key={article.title} />)}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    },
  };
}


function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

Home.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
