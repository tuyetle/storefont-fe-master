import React from 'react';
import PropTypes from 'prop-types';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';

const AddonTextFormField = props => (
  props.append ?
    (
      <div className="input-group">
        <input className="form-control" id={props.id} {...props.input} />
        <span className="input-group-addon">{props.addon}</span>
      </div>
    )
    :
    (
      <div className="input-group">
        <span className="input-group-addon">{props.addon}</span>
        <input className="form-control" id={props.id} {...props.input} />
      </div>
    )
);

AddonTextFormField.propTypes = {
  id: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  append: PropTypes.bool.isRequired,
  addon: PropTypes.string.isRequired,
};

AddonTextFormField.defaultProp = {
  append: true,
};

export default withLabelAndMessage(AddonTextFormField);
