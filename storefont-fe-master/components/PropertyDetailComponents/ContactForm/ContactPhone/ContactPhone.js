import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PhoneIcon from '~/static/assets/img/ic_phone_call.svg';
import ReactCardFlip from 'react-card-flip';
import Button from '~/components/common/Button/Button';
import { HIDDEN_PHONE_NUMBER } from '~/config/config';
import styles from './styles';

class ContactPhone extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isFlipped: false };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    const newState = { isFlipped: true };
    this.setState(newState);
  }

  render() {
    const { phoneNumber } = this.props;
    const hiddenPhoneNumber = HIDDEN_PHONE_NUMBER;

    return (
      <div className={styles.wrapperPhoneNumber}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front" className={classNames(`${styles.phoneNumber}`, `${styles.front}`)}>
            <Button
              onClickHandler={this.onClickHandler}
              className={styles.showPhoneBtn}
              label=""
            />
            <PhoneIcon className={styles.PhoneIcon} />
            <span>{hiddenPhoneNumber}</span>
          </div>
          <div key="back" className={classNames(`${styles.phoneNumber}`, `${styles.back}`)}>
            <a href={`tel:${phoneNumber}`}>
              <PhoneIcon className={styles.PhoneIcon} />
              <span>{phoneNumber}</span>
            </a>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

ContactPhone.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};


export default ContactPhone;
