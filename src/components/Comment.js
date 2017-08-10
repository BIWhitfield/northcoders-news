import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => (
  <section className="box">
    <div className="columns">
      <div className="column is-2">
        <div>
          <img src={props.avatarUrl} alt="User Avatar" />
        </div>
        <a className="is-danger is-small" onClick={props.commentVote.bind(null, props.id, 'up')} >
          <i className="fa fa-arrow-up row" />
        </a>
        <span className="row tag is-medium bold">{props.comment.votes}</span>
        <a className="is-danger is-small" onClick={props.commentVote.bind(null, props.id, 'down')} >
          <i className="fa fa-arrow-down row" />
        </a>
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
  votes: PropTypes.number,

};

export default Comment;
