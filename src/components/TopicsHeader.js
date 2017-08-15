import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';


export class TopicsHeader extends React.Component {
  componentDidMount() {
    this.props.fetchTopicTitles();
  }

  render() {
    return (
      <nav className="level">
        <div className="level-item has-text-centered">
          <div id="TopicHeader" className="field">
            <NavLink className="button is-light" to={'/'}>All</NavLink>
            {this.props.topicsTitles.map(topic => (
              <NavLink
                className="button is-light"
                to={`/articles/${topic.slug}`}
                key={topic._id}
              >
                {topic.title}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
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

TopicsHeader.defaultProps = {
  topicsTitles: [],
  fetchTopicTitles: () => ({
    value: 'default value',
  }),
};

TopicsHeader.propTypes = {
  topicsTitles: PropTypes.array.isRequired,
  fetchTopicTitles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsHeader);
