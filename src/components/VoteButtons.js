import React from 'react';
import PropTypes from 'prop-types';
import '../css/VoteButtons.css';

const VoteButtons = props => (
  <section className="voteSection">
    <span className="column is-narrow rows">
      <a className="is-danger is-small" onClick={props.handleVote.bind(null, props.id, 'up')} >
        <i className="fa fa-arrow-circle-up row" />
      </a>
      <span className="row tag is-medium bold">{props.votes}</span>
      <a className="is-danger is-small" onClick={props.handleVote.bind(null, props.id, 'down')} >
        <i className="fa fa-arrow-circle-down row" />
      </a>
    </span>

  </section>
);

VoteButtons.propTypes = {
  votes: PropTypes.number,
  id: PropTypes.string,
  handleVote: PropTypes.func.isRequired,
};

export default VoteButtons;
