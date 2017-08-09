import React from 'react';

const PostCommentForm = props => (
  <div className="field">
    <div className="control">
      <textarea className="textarea" placeholder="Post comment" />
    </div>
    <button
      className="button is-info"
      type="submit"
      value="post"
    >
    Post comment
    </button>
  </div>
    );


export default PostCommentForm;
