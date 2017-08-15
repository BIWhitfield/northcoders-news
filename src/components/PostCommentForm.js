import React from 'react';
import PropTypes from 'prop-types';
import '../css/PostCommentForm.css';

export const PostCommentForm = props => (
  <div>
    <form className="media-content" onSubmit={props.submitHandler}>
      <textarea
        className="textarea"
        placeholder="Post comment"
        value={props.input}
        onChange={props.inputHandler}
      />
      <button
        className="button is-info"
        type="submit"
        value="post"
      >
      Post comment
      </button>
    </form>
  </div>
    );

PostCommentForm.defaultProps = {
  submitHandler: () => ({
    value: 'default value',
  }),
  inputHandler: () => ({
    value: 'default value',
  }),
  input: '',
};

PostCommentForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputHandler: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default PostCommentForm;
