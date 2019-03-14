import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
import { Form, Field, NestedField } from 'react-form';
import { translate } from 'react-i18next';
import classNames from 'classnames';

import SVGFillterIcon from '~/static/assets/img/utilityIcons/ic-fillter.svg';
import FillterIconMobile from '~/static/assets/img/ic-filter-mobile.png';
import { bedOptions, bathroomOptions } from '~/config/searchBar';
import DropdownButton from '~/components/common/DropdownButton/DropdownButton';
import Button from '~/components/common/Button/Button';
import { Mobile, NotMobile } from '~/config/media';

import PriceRange from './PriceRange/PriceRange';
import AreaRange from './AreaRange/AreaRange';
import TransactionTypeFilter from './TransactionTypeFilter/TransactionTypeFilter';
import SearchingTagComponent from './SearchingTagComponent/SearchingTagComponent';
import BedFilters from './BedFilters/BedFilters';
import BathroomFilters from './BathroomFilters/BathroomFilters';
import TheOtherFilters from './TheOtherFilters/TheOtherFilters';
import MobileSearchBar from './MobileSearchBar/MobileSearchBar';

import styles from './styles';

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { closedFilter: true };
  }

  searchSubmit = (formState) => {
    const { values, touched } = formState;
    if (isEmpty(formState.values)) {
      return;
    }

    if (touched && touched.priceRange
      && touched.priceRange.fromPrice
      && touched.priceRange.toPrice
      && values.priceRange.fromPrice > values.priceRange.toPrice) {
      return;
    }

    if (touched && touched.areaRange
      && touched.areaRange.fromArea
      && touched.areaRange.toArea
      && values.areaRange.fromArea > values.areaRange.toArea) {
      return;
    }

    if (isFunction(this.props.changeURL)) this.props.changeURL(values);

    this.props.searchListing(values);
  }

  saveSearchAlert = () => {
    this.props.saveSearch({ url: 'mockDick' });
  }

  toggleFilter = (evt) => {
    evt.preventDefault();
    this.setState({ closedFilter: !this.state.closedFilter });
  }

  renderOther = () => {
    if (typeof window === 'undefined') return null;

    const {
      t, suggestions,
      selectedFilter: {
        priceRange,
        beds,
        bathrooms,
        areaRange,
        otherFilters,
      },
      getSuggestions, selectedSuggestion,
    } = this.props;

    const listingTypeOptions = [{
      value: 'buy',
      label: t('common:buy'),
    },
    {
      value: 'loan',
      label: t('common:loan'),
    }];

    return (
      <NotMobile>
        <Form onChange={this.searchSubmit}>
          {
            () => (
              <div className="container-fluid">
                <form
                  id="searchListingForm"
                  className={`row ${styles.searchBar}`}
                >
                  <div className="col-4 col-md-3 col-lg-4">
                    <Field
                      field="searchKeyworks"
                      component={SearchingTagComponent}
                      promptText={t('searchingWith')}
                      noResultsText={t('noResultsText')}
                      placeholder={t('searchingGuideline')}
                      suggestions={suggestions}
                      selectedSuggestion={selectedSuggestion}
                      getSuggestions={getSuggestions}
                    />
                  </div>
                  <div className={`col-8 col-md-9 col-lg-8 ${styles.filterGroup}`}>
                    <Button className={`${styles.saveSearch} ${this.props.saveSearchResult.isSuccess ? styles.success : ''}`} label={t('common:saveSearch')} onClickHandler={this.saveSearchAlert} />
                    <Button className={`${styles.deleteSearch}`} label={t('common:deleteSearch')} />
                    <div className={`${styles.groupSell}`}>
                      <Field
                        field="transactionType"
                        component={TransactionTypeFilter}
                        defaultValue={listingTypeOptions[0].value}
                        options={listingTypeOptions}
                        className={`${styles.transactionType}`}
                      />
                    </div>
                    <div className={`${styles.listDropdown}`}>
                      <div className="row">
                        <section name="search-price">
                          <DropdownButton label={t('common:price')}>
                            <NestedField
                              field="priceRange"
                              component={PriceRange}
                              millionLabelForUnit={t('common:million')}
                              billionLabelForUnit={t('common:billion')}
                              fromPriceLabel={t('common:priceLowest')}
                              toPriceLabel={t('common:priceHighest')}
                              fromPriceDefaultValue={
                                priceRange && priceRange.fromPrice
                              }
                              toPriceDefaultValue={
                                priceRange && priceRange.toPrice
                              }
                              t={t}
                            />
                          </DropdownButton>
                        </section>
                        <section name="search-bedrooms">
                          <DropdownButton label={t('common:bedrooms')}>
                            <Field
                              field="beds"
                              component={BedFilters}
                              bedOptionsConfig={bedOptions}
                              defaultValue={beds || []}
                            />
                          </DropdownButton>
                        </section>
                        <section name="search-bathrooms">
                          <DropdownButton label={t('common:bathrooms')}>
                            <Field
                              field="bathrooms"
                              component={BathroomFilters}
                              bathroomOptions={bathroomOptions}
                              defaultValue={bathrooms || []}
                            />
                          </DropdownButton>
                        </section>
                        <section name="area-search">
                          <DropdownButton label={t('common:area')}>
                            <NestedField
                              field="areaRange"
                              component={AreaRange}
                              fromAreaLabel={t('common:from')}
                              toAreaLabel={t('common:to')}
                              formAreaDefaultValue={
                                areaRange && areaRange.fromArea
                              }
                              toAreaDefaultValue={
                                areaRange && areaRange.toArea
                              }
                              t={t}
                            />
                          </DropdownButton>
                        </section>
                        <DropdownButton
                          className={`${styles.otherFilters}`}
                          label={<div className={`${styles.filterArea}`}><SVGFillterIcon /> {t('common:filters')}</div>}
                          showCaret={false}
                        >
                          <div className="container">
                            <div className={`${styles.filters}`}>
                              <Field
                                field="otherFilters"
                                component={TheOtherFilters}
                                categories={this.props.categories}
                                furnitures={this.props.furnitures}
                                utilities={this.props.utilities}
                                defaultValue={otherFilters || {}}
                                t={t}
                              />
                            </div>
                          </div>
                        </DropdownButton>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )
          }
        </Form>
      </NotMobile>
    );
  }

  renderMobile = () => {
    if (typeof window === 'undefined') return null;

    const {
      t, suggestions,
      getSuggestions, selectedSuggestion, selectedFilter,
    } = this.props;
    const otherFilters = selectedFilter && selectedFilter.otherFilters;
    const { closedFilter } = this.state;

    return (
      <Mobile>
        <Form onChange={this.searchSubmit}>
          {
            () => (
              <div className="container-fluid">
                <form
                  id="searchListingMobileForm"
                  className={`row ${styles.searchBar}`}
                >
                  <div className="col-10">
                    <SearchingTagComponent
                      field="searchKeyworks"
                      promptText={t('searchingWith')}
                      noResultsText={t('noResultsText')}
                      placeholder={t('searchingGuideline')}
                      suggestions={suggestions}
                      selectedSuggestion={selectedSuggestion}
                      getSuggestions={getSuggestions}
                    />
                  </div>
                  <div className={`col-2 ${styles.filterGroup}`}>
                    <div
                      className={classNames(`${styles.otherFilters}`, closedFilter ? '' : 'closedFilter')}
                    >
                      <input type="image" className={`${styles.iconFilters}`} onClick={this.toggleFilter} src={FillterIconMobile} alt="" />
                      <MobileSearchBar
                        selectedValues={otherFilters}
                        categories={this.props.categories}
                        furnitures={this.props.furnitures}
                        utilities={this.props.utilities}
                        closeFilter={this.toggleFilter}
                        t={t}
                        defaultValues={selectedFilter}
                      />
                    </div>
                  </div>
                </form>
              </div>
            )
          }
        </Form>
      </Mobile>
    );
  }

  render() {
    return (
      <Fragment>
        {
          this.renderMobile()
        }
        {
          this.renderOther()
        }
      </Fragment>
    );
  }
}

SearchBar.propTypes = {
  categories: PropTypes.array.isRequired,
  furnitures: PropTypes.array.isRequired,
  utilities: PropTypes.array.isRequired,
  getSuggestions: PropTypes.func.isRequired,
  selectedSuggestion: PropTypes.object,
  changeURL: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  suggestions: PropTypes.array,
  searchListing: PropTypes.func.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveSearchResult: PropTypes.object,
  selectedFilter: PropTypes.object,
};

SearchBar.defaultProps = {
  suggestions: [],
  selectedSuggestion: undefined,
  selectedFilter: {},
  saveSearchResult: {},
};

export default translate(['searchResult', 'common'])(SearchBar);
