import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import BaseFilters from './BaseFilters';

class TheOtherFilters extends Component {
  onChange = (evt) => {
    const {
      fieldApi: { value, setValue, setTouched },
    } = this.props;
    const newValue = cloneDeep(value);
    if (evt.target.type === 'radio') {
      newValue[evt.target.name] = evt.target.value;
    } else if (evt.target.type === 'checkbox') {
      if (!newValue[evt.target.name]) newValue[evt.target.name] = [];

      if (evt.target.checked === true) {
        newValue[evt.target.name].push(evt.target.value);
      } else {
        newValue[evt.target.name].splice(newValue[evt.target.name].indexOf(evt.target.value), 1);
      }
    }

    setTouched(true);
    setValue(newValue);
  }

  render() {
    const {
      fieldApi: { value },
      t, categories, furnitures, utilities,
    } = this.props;

    const selectedValues = { };
    if (value) {
      selectedValues.categoryIds = value.categoryIds || [];
      selectedValues.directions = value.directions || [];
      selectedValues.furnitures = value.furnitures || [];
      selectedValues.utilities = value.utilities || [];
    }

    return (
      <BaseFilters
        onChange={this.onChange}
        categories={categories}
        furnitures={furnitures}
        utilities={utilities}
        selectedValues={selectedValues}
        t={t}
      />
    );
  }
}

TheOtherFilters.propTypes = {
  fieldApi: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  furnitures: PropTypes.array.isRequired,
  utilities: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
};

TheOtherFilters.defaultProps = {
};

export default TheOtherFilters;
