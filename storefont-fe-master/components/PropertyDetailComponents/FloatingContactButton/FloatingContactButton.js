import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SendIcon from '~/static/assets/img/ic-send.svg';
import canUseDOM from '#/services/domHelper';
import FloatingForm from '~/components/PropertyDetailComponents/ContactForm/FloatingForm/FloatingForm';
import styles from './styles';

export class FloatingContactButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
  }

  componentDidMount = () => {
    if (canUseDOM) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount = () => {
    if (canUseDOM) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    if (this.state.collapse) {
      this.setState({
        collapse: false,
      });
    }
  }

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const {
      t, postContact, postContactResult,
      requestContact, onRequestContactChanged,
    } = this.props;
    const buttonClass = this.state.collapse ? styles.hideButton : styles.showButton;

    return (
      <div className={styles.submitButtonContainer}>
        <Collapse
          isOpen={this.state.collapse}
          className={classNames(`${styles.floatingContactFormWrap}`)}
        >
          <button className={styles.openForm} onClick={this.toggle}>
            <i className={styles.iconOpenUp} />
          </button>
          <FloatingForm
            postContact={postContact}
            postContactResult={postContactResult}
            requestContact={requestContact}
            onRequestContactChanged={onRequestContactChanged}
          />
        </Collapse>
        <div className={buttonClass}>
          <button type="button" className={styles.btnRequest}>
            <SendIcon className={styles.iconSend} />
            { postContactResult !== true ? t('sendRequest') : t('thankyou') }
          </button>
          <button className={styles.openForm} onClick={this.toggle}>
            <i className={styles.iconOpenDown} />
          </button>
        </div>
      </div>
    );
  }
}

FloatingContactButton.propTypes = {
  t: PropTypes.func.isRequired,
  postContact: PropTypes.func.isRequired,
  postContactResult: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
  }),
  onRequestContactChanged: PropTypes.func,
  requestContact: PropTypes.object,
};

FloatingContactButton.defaultProps = {
  postContactResult: null,
  onRequestContactChanged: null,
  requestContact: null,
};

export default translate(['propertyDetail'])(FloatingContactButton);
