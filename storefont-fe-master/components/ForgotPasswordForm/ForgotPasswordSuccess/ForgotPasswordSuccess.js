import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import ReactInterval from 'react-interval';
import { noop } from 'lodash';
import TickIcon from '~/static/assets/img/ic-tick.png';
import { RESUBMIT_TIMEOUT_SIGNUP, TIMEOUT_SIGNUP } from '~/config/config';
import styles from './styles';

class ForgotPasswordSuccess extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: RESUBMIT_TIMEOUT_SIGNUP };
  }
  onSubmitAgain = () => {
    this.start();
    this.props.onSubmitAgain();
  }
  submitAgainCallback = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  start = () => {
    this.setState({ count: RESUBMIT_TIMEOUT_SIGNUP });
  }
  render() {
    const allowSendAgain = this.state.count !== 0;
    return (
      <Fragment>
        <img className={styles.tickIcon} src={TickIcon} alt={this.props.t('sendNewPassword')} />
        <div className={styles.forgotPasswordSuccess}>
          {this.props.t('resetPasswordNotificationBefore')}<br />
          {this.props.t('resetPasswordNotificationAfter')}
        </div>
        <div className="text-center">
          <span className={styles.notReceived}>{this.props.t('notReceived')}</span>
          <button
            className={styles.sendAgain}
            onClick={this.onSubmitAgain}
            disabled={allowSendAgain}
          >
            {this.props.t('sendAgain')}
          </button>
          {
            allowSendAgain &&
              <span className={styles.count}>({this.state.count})</span>
          }
          <ReactInterval
            timeout={TIMEOUT_SIGNUP}
            callback={this.submitAgainCallback}
            enabled={allowSendAgain}
          />
        </div>
      </Fragment>
    );
  }
}

ForgotPasswordSuccess.propTypes = {
  onSubmitAgain: PropTypes.func,
  t: PropTypes.func,
};
ForgotPasswordSuccess.defaultProps = {
  onSubmitAgain: noop,
  t: noop,
};
export default translate(['auth'])(ForgotPasswordSuccess);

