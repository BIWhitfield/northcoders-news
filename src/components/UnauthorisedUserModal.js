import React from 'react';
import PropTypes from 'prop-types';

const UnauthorisedUserModal = (props) => {
  if (!props.modalOverlay) {
    return null;
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <section className="box">
          <div className="column is-8">
            <h1 className="title"><b>Unauthorised User!</b></h1>
            <p>You do not have permission to delete this comment</p>
          </div>
        </section>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={props.onClose} />
    </div>
  );
};


UnauthorisedUserModal.propTypes = {
  modalOverlay: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UnauthorisedUserModal;
