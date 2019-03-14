import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Modals from '~/const/Modals';

const ComponentModal = (props) => {
  if (!isEmpty(props.currentModal)) {
    const Component = Modals[props.currentModal];
    return (
      <Modal isOpen toggle={props.dispatchCloseModal} >
        {
          (props.configUI && props.configUI.showHeader) &&
          <ModalHeader toggle={props.dispatchCloseModal}>{props.configUI.title}</ModalHeader>
        }
        <ModalBody >
          <Component {...props} closeModal={props.dispatchCloseModal} />
        </ModalBody>
      </Modal>
    );
  }
  return null;
};
ComponentModal.propTypes = {
  dispatchCloseModal: PropTypes.func,
  currentModal: PropTypes.string,
  configUI: PropTypes.shape({
    showHeader: PropTypes.bool,
    title: PropTypes.string,
  }),
};

ComponentModal.defaultProps = {
  dispatchCloseModal: null,
  currentModal: null,
  configUI: {
    showHeader: true,
    title: '',
  },
};

export default ComponentModal;
