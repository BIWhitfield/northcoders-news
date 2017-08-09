import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';


class TopicsHeader extends React.Component {
  componentDidMount() {
    this.props.fetchTopicTitles();
  }

  render() {
    return (
      <div className="columns" >
        <div className="column" />
        <div className="column is-half">
          <div id="TopicHeader" className="field is-grouped">
            <NavLink className="button" to={'/'}>All</NavLink>
            {this.props.topicsTitles.map(topic => (
              <NavLink
                className="button"
                to={`/articles/${topic.slug}`}
                key={topic._id}
              >
                {topic.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="column" />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchTopicTitles: () => {
      dispatch(actions.fetchTopicTitles());
    },
  };
}

function mapStateToProps(state) {
  return {
    topicsTitles: state.topics,
  };
}


TopicsHeader.propTypes = {
  topicsTitles: PropTypes.array.isRequired,
  fetchTopicTitles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsHeader);
