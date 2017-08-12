import React from 'react';
import PropTypes from 'prop-types';

class UnauthorisedUserModal extends React.Component {
  render() {
    console.log(this.props)
    if (!this.props.modalOverlay) {
      return null;
    }
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <section className="box">
            <div className="column is-8">
              <h1 className="title"><b>Unauthorised User!</b></h1>
              <p>You don't have permission to delete this comment</p>
            </div>
          </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.onClose}/>
      </div>
    );
  }
}

UnauthorisedUserModal.propTypes = {
  modalOverlay: PropTypes.bool.isRequired,
};

export default UnauthorisedUserModal;
