import React from 'react';
import PropTypes from 'prop-types';
import UnauthorisedUserModal from './UnauthorisedUserModal';
import '../css/Comment.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOverlay: false,
    };
    this.setModalOverlay = this.setModalOverlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  setModalOverlay() {
    return this.setState({ modalOverlay: true });
  }

  handleDelete(props) {
    const { id, createdBy } = props;
    if (createdBy !== 'northcoder') {
      return this.setModalOverlay();
    }

    if (createdBy === 'northcoder') {
      props.deleteComment(id);
      return this.setState({ modalOverlay: false });
    }
  }

  toggleModal() {
    this.setState({
      modalOverlay: false,
    });
  }

  render() {
    return (
      <section className="box">
        <div className="columns">

          <div className="column is-2">
            <div>
              <img src={this.props.avatarUrl} alt="User Avatar" />
            </div>
            <section className="voteSection">
              <a className="is-danger is-small" onClick={this.props.commentVote.bind(null, this.props.id, 'up')} >
                <i className="fa fa-arrow-circle-up row" />
              </a>
              <span className="row tag is-medium bold">{this.props.comment.votes}</span>
              <a className="is-danger is-small" onClick={this.props.commentVote.bind(null, this.props.id, 'down')} >
                <i className="fa fa-arrow-circle-down row" />
              </a>
            </section>

            <section className="trashButtonSection">
              <a className="is-warning is-small" onClick={this.handleDelete.bind(null, this.props, this.state)}>
                <i className="fa fa-trash-o is-medium" />
              </a>
            </section>
          </div>

          <div className="column is-8">
            <section className="">
              <p className="comment-body">{this.props.comment.body}</p>
            </section>
          </div>
        </div>

        <UnauthorisedUserModal modalOverlay={this.state.modalOverlay} onClose={this.toggleModal} />
      </section>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  commentVote: PropTypes.func.isRequired,

};


export default Comment;
