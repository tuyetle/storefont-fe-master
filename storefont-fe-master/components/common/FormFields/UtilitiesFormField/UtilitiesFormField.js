import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconUtilities from '~/components/IconUtilities/IconUtilities';

class IconUtilitiesFormField extends PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(utilities) {
    if (this.props.name) {
      const newValue = { name: this.props.name, value: utilities };
      this.props.input.onChange(newValue);
    } else {
      this.props.input.onChange(utilities);
    }
  }

  render() {
    return (
      <IconUtilities
        onChange={this.onChange}
        utilities={this.props.utilities}
      />
    );
  }
}

IconUtilitiesFormField.propTypes = {
  name: PropTypes.string,
  utilities: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
};

IconUtilitiesFormField.defaultProps = {
  name: '',
};

export default IconUtilitiesFormField;
