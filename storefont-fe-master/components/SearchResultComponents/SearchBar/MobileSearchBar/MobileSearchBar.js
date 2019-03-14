import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field, NestedField } from 'react-form';
import { Row, Col, Nav, NavItem, Collapse } from 'reactstrap';
import { bedOptions, bathroomOptions } from '~/config/searchBar';

import PriceRange from '../PriceRange/PriceRange';
import AreaRange from '../AreaRange/AreaRange';
import BedFilters from '../BedFilters/BedFilters';
import BathroomFilters from '../BathroomFilters/BathroomFilters';
import TransactionTypeFilter from '../TransactionTypeFilter/TransactionTypeFilter';
import TheOtherFilters from '../TheOtherFilters/TheOtherFilters';

import styles from './styles';

class MobileSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      closedFilter: false,
      openTab: null,
    };
  }

  toggle = (evt) => {
    evt.preventDefault();
    this.setState({ openTab: !this.state.openTab });
  }

  render() {
    const { t, closeFilter, defaultValues } = this.props;

    const listingTypeOptions = [{
      value: 'sell',
      label: t('common:sell'),
    },
    {
      value: 'loan',
      label: t('common:loan'),
    }];

    const { closedFilter } = this.state;

    return (
      <div className={`${styles.filters}`}>
        <div className="container">
          <Row className={classNames(`${styles.filtersControlWrap}`)}>
            <Col xs="12">
              <div className={styles.filtersControl}>
                <span className={styles.filtersName}>{t('common:filters')}</span>
                <button
                  className={classNames(`${styles.otherFilters}`, closedFilter ? '' : 'closedFilter')}
                  onClick={closeFilter}
                >{t('common:close')}
                </button>
              </div>
            </Col>
          </Row>
          <div className={classNames(`${styles.filtersControlContent}`)}>
            <Row>
              <Col xs="12">
                <div className={`${styles.groupSell}`}>
                  <Field
                    field="transactionType"
                    component={TransactionTypeFilter}
                    defaultValue={defaultValues && defaultValues.transactionType}
                    options={listingTypeOptions}
                    className={`${styles.transactionType}`}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <h4 className={`${styles.filterName}`}>{t('common:price')}</h4>
                <div name="search-price">
                  <div label={t('common:price')}>
                    <NestedField
                      field="priceRange"
                      component={PriceRange}
                      t={t}
                      millionLabelForUnit={t('common:million')}
                      billionLabelForUnit={t('common:billion')}
                      fromPriceLabel={t('common:priceLowest')}
                      toPriceLabel={t('common:priceHighest')}
                      fromPriceDefaultValue={
                        defaultValues
                        && defaultValues.priceRange
                        && defaultValues.priceRange.fromPrice}
                      toPriceDefaultValue={
                        defaultValues
                        && defaultValues.priceRange
                        && defaultValues.priceRange.toPrice}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <h4 className={`${styles.filterName}`}>{t('common:bedrooms')}</h4>
                <div name="search-bedrooms">
                  <div label={t('common:bedrooms')}>
                    <Field
                      field="beds"
                      component={BedFilters}
                      bedOptionsConfig={bedOptions}
                      defaultValue={defaultValues && defaultValues.beds}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <h4 className={`${styles.filterName}`}>{t('common:bathrooms')}</h4>
                <div name="search-bathrooms">
                  <div label={t('common:bathrooms')}>
                    <Field
                      field="bathrooms"
                      component={BathroomFilters}
                      bathroomOptions={bathroomOptions}
                      defaultValue={defaultValues && defaultValues.bathrooms}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <h4 className={`${styles.filterName}`}>{t('common:area')}</h4>
                <div name="area-search">
                  <div label={t('common:price')}>
                    <NestedField
                      field="areaRange"
                      component={AreaRange}
                      fromAreaLabel={t('common:from')}
                      toAreaLabel={t('common:to')}
                      formAreaDefaultValue={
                        defaultValues
                        && defaultValues.areaRange
                        && defaultValues.areaRange.fromArea}
                      toAreaDefaultValue={
                        defaultValues
                        && defaultValues.areaRange
                        && defaultValues.areaRange.toArea}
                      t={t}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Nav className={`${styles.categoryFilters}`}>
              <NavItem>
                <button
                  onClick={this.toggle}
                  className={classNames(`${styles.buttonLink}`, this.state.openTab ? 'active' : '')}
                >
                  {t('searchResult:moreFilters')}
                </button>
                <Collapse
                  isOpen={this.state.openTab}
                  className={classNames(`${styles.categoryFiltersContent}`)}
                >
                  <Field
                    field="otherFilters"
                    component={TheOtherFilters}
                    categories={this.props.categories}
                    furnitures={this.props.furnitures}
                    utilities={this.props.utilities}
                    defaultValue={defaultValues && defaultValues.otherFilters}
                    t={t}
                  />
                </Collapse>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

MobileSearchBar.propTypes = {
  closeFilter: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  furnitures: PropTypes.array.isRequired,
  utilities: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
  defaultValues: PropTypes.any,
};

MobileSearchBar.defaultProps = {
  defaultValues: {
    transactionType: 'sell',
    priceRange: {
      fromPrice: 0,
      toPrice: 0,
    },
    areaRange: {
      fromArea: 0,
      toArea: 0,
    },
    bathrooms: [],
    beds: [],
    otherFilters: {},
  },
};

export default MobileSearchBar;
