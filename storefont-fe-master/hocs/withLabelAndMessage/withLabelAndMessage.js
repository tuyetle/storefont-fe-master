import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseLabel from '~/components/BaseLabel/BaseLabel';
import ErrorMessage from '~/components/ErrorMessage/ErrorMessage';
import newId from '~/utils/newId';

function withLabelAndMessage(WrappedComponent) {
  class WithLabelAndMessage extends Component {
    constructor(props) {
      super(props);
      this.id = newId();
      this.state = { errorMessage: '' };
      this.showMessage = this.showMessage.bind(this);
    }
    showMessage(message, messageOpt) {
      this.messageOpt = messageOpt;
      this.setState({ errorMessage: message });
    }
    render() {
      const {
        label, isRequired, showLabel, meta,
      } = this.props;

      return (
        <div className="form-group">
          {showLabel &&
          <BaseLabel
            htmlFor={this.id}
            label={label}
            isRequired={isRequired}
          />}
          <WrappedComponent
            id={this.id}
            {...this.props}
          />
          {meta && meta.error &&
          <ErrorMessage
            message={this.state.errorMessage}
          />
          }
        </div>
      );
    }
  }

  WithLabelAndMessage.propTypes = {
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    showLabel: PropTypes.bool,
    meta: PropTypes.object,
  };

  WithLabelAndMessage.defaultProps = {
    label: null,
    showLabel: true,
    isRequired: false,
    meta: null,
  };

  return WithLabelAndMessage;
}

export default withLabelAndMessage;
