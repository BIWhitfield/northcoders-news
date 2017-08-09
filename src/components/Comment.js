import React from 'react';
import PropTypes from 'prop-types';
import VoteButtons from './VoteButtons';

const Comment = props => (
  <section className="box">
    <div className="columns">
      <div className="column is-2">
        <VoteButtons votes={props.comment.votes} />
      </div>
      <div className="column is-8">
        <section className="">
          <p className="comment-body">{props.comment.body}</p>
        </section>
      </div>
    </div>
  </section>
    );

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
