import React from 'react';
import PropTypes from 'prop-types';
import ContactPhone from './ContactPhone/ContactPhone';
import HeaderContactForm from './HeaderContactForm/HeaderContactForm';
import FloatingForm from './FloatingForm/FloatingForm';
import styles from './styles';

const ContactForm = ({
  postContact, contact, postContactResult, onRequestContactChanged,
  requestContact,
}) => (
  <div className={styles.wrapperContactForm}>
    <HeaderContactForm
      contact={contact}
    />
    <ContactPhone
      phoneNumber={contact.phone}
    />
    <FloatingForm
      postContact={postContact}
      postContactResult={postContactResult}
      onRequestContactChanged={onRequestContactChanged}
      requestContact={requestContact}
    />
  </div>
);

ContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  postContact: PropTypes.func,
  postContactResult: PropTypes.bool,
  onRequestContactChanged: PropTypes.func,
  requestContact: PropTypes.object,
};

ContactForm.defaultProps = {
  postContact() {},
  postContactResult: null,
  onRequestContactChanged: null,
  requestContact: null,
};

export default ContactForm;
