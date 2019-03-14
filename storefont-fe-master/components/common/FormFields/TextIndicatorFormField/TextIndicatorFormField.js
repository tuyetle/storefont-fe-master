import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';
import CharCoutingIndicator from '~/components/common/CharCoutingIndicator/CharCoutingIndicator';
import styles from './styles';

export class TextIndicatorFormField extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { wordCount: props.text.length };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const { value } = event.target;
    const newState = { wordCount: value.length };
    this.setState(newState);

    if (isFunction(this.props.input.onChange)) {
      this.props.input.onChange(value);
    }
  }

  render() {
    const {
      id, maxLength, text, placeholder, meta, input,
    } = this.props;
    const errorClass = meta.touched && meta.error ? styles.error : '';
    delete input.value; // Using defaultValue

    return (
      <div>
        <input
          className={`form-control ${errorClass}`}
          maxLength={maxLength}
          placeholder={placeholder}
          {...input}
          defaultValue={text}
          onChange={this.onChangeHandler}
          id={id}
        />
        <CharCoutingIndicator
          current={this.state.wordCount}
          maxLength={maxLength || 300}
        />
      </div>
    );
  }
}

TextIndicatorFormField.propTypes = {
  text: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
};

TextIndicatorFormField.defaultProps = {
  input: {},
  meta: {},
  text: '',
  placeholder: '',
  id: null,
};

export default withLabelAndMessage(TextIndicatorFormField);
