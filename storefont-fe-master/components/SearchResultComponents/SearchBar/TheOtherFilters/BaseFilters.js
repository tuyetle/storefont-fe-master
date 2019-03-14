import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup, Label, Row, Col } from 'reactstrap';
import Checkbox from '~/components/common/Checkbox/Checkbox';

import { DIRECTION_FILTER_OPTIONS } from '~/config/config';
import styles from './styles';

function renderCheckboxGroup(group, label, options, selectedValues, onChange) {
  const selected = selectedValues[group] || [];

  return (
    <Col className={classNames(`${styles.filter}`, 'col-12')} sm="6">
      <h4 className={`${styles.filterName}`}>{label}</h4>
      <ul className={classNames(`${styles.filterList}`, 'list-unstyled', 'd-flex', 'align-items-stretch', 'flex-wrap')}>
        {options.map(opt => (
          <li key={opt.name} className={`${styles.filterListItem}`}>
            <FormGroup check>
              <Label className={`${styles.label}`}>
                <Checkbox
                  type="checkbox"
                  value={opt.value}
                  name={group}
                  checked={selected.indexOf(opt.value) >= 0}
                  onChange={onChange}
                />
                <span className={`${styles.optionsName}`}>
                  {opt.name}
                </span>
              </Label>
            </FormGroup>
          </li>
        ))}
      </ul>
    </Col>
  );
}

const BaseFilters = ({
  categories, utilities, furnitures, t,
  selectedValues, onChange,
}) => (
  <Row>
    {renderCheckboxGroup('categoryIds', t('searchResult:categoryFilter'), categories, selectedValues, onChange)}
    {renderCheckboxGroup(
      'directions', t('searchResult:directionFilter'),
      DIRECTION_FILTER_OPTIONS.map(opt => ({ name: t(`searchResult:${opt.name}`), value: opt.name })),
      selectedValues, onChange,
    )}
    {renderCheckboxGroup('utilities', t('searchResult:utilityFilter'), utilities, selectedValues, onChange)}
    {renderCheckboxGroup('furnitures', t('searchResult:furnitureFilter'), furnitures, selectedValues, onChange)}
  </Row>
);

BaseFilters.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedValues: PropTypes.any,
  categories: PropTypes.array.isRequired,
  furnitures: PropTypes.array.isRequired,
  utilities: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
};

BaseFilters.defaultProps = {
  selectedValues: {
    categoryIds: [],
    directions: [],
    furnitures: [],
    utilities: [],
  },
};

export default BaseFilters;
