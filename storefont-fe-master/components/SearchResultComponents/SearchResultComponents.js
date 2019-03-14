import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash/noop';
import { NotMobile, Mobile } from '~/config/media';
import { translate } from 'react-i18next';
import GridListSwitcher from '~/components/SearchResultComponents/GridListSwitcher/GridListSwitcher';
import PaginationComponent from '~/components/SearchResultComponents/Pagination/Pagination';
import GoogleMapSearch from '~/components/GoogleMapSearch/GoogleMapSearch';
import SortBarBox from '~/components/SearchResultComponents/SortBarBox/SortBarBox';
import ResultGridView from '~/components/SearchResultComponents/ResultGridView/ResultGridView';
import ResultListView from '~/components/SearchResultComponents/ResultListView/ResultListView';
import ViewOptions from '~/const/ViewOptions';
import styles from './styles';

const renderSearchResults = (
  listings, onListingSelected, onListingSaved,
  viewMode, showMap, facetSearchItems,
) => {
  let mainViewClass = `${styles.mainView}`;
  if (showMap && viewMode === ViewOptions.Grid) {
    mainViewClass += ` ${styles.mainGirdMapView}`;
  }

  return (
    <div className={`${mainViewClass}`}>
      <div className={`${styles.mainViewTranscluder}`}>
        {
          viewMode === ViewOptions.Grid &&
          <ResultGridView
            listings={listings}
            showMap={showMap}
            onListingSelected={onListingSelected}
            onListingSaved={onListingSaved}
          />
        }
        {
          viewMode === ViewOptions.List &&
          <ResultListView
            listings={listings}
            showMap={showMap}
            facetSearchItems={facetSearchItems}
            onListingSelected={onListingSelected}
            onListingSaved={onListingSaved}
          />
        }
      </div>
    </div>
  );
};

const SearchResultComponents = ({
  t,
  listings, listingsMapResult, foundItems, pageSize, listingsOfGroup, onMarkerGroupListingClick,
  currentPage, activeListing, showMap, onViewModeChanged, onMapViewModeChanged, onListingSelected,
  onListingSaved, onPageChanged, onActiveListing, activeListingResults, facetSearchItems,
  viewMode, onSortRusultChanged,
}) => (
  <div className={`${styles.content}`}>
    <NotMobile>
      <div className={`${styles.listingView}`}>
        <div className={`${styles.header}`}>
          <div className={`${styles.actionBar}`}>
            <div className={`${styles.results}`}>
              {t('searchResult:have')} <strong className={`${styles.number}`}>{foundItems}</strong> {t('searchResult:result')}
            </div>
            <div className={`${styles.buttons}`}>
              <SortBarBox onSortRusultChanged={onSortRusultChanged} />
              <GridListSwitcher
                changeModeViewHandler={onViewModeChanged}
                changeMapViewModeHandler={onMapViewModeChanged}
              />
            </div>
          </div>
        </div>
        {
          renderSearchResults(
            listings, onListingSelected, onListingSaved,
            viewMode, showMap, facetSearchItems,
          )
        }
        <div className={`${styles.footer}`}>
          <PaginationComponent
            onClickHandler={onPageChanged}
            pageSize={pageSize}
            currentPage={currentPage}
            total={foundItems}
          />
        </div>
      </div>
      {showMap ? (
        <div className={`${styles.mapView}`}>
          <GoogleMapSearch
            markersData={listingsMapResult}
            onActiveListing={onActiveListing}
            currentActive={activeListing}
            activeListing={activeListingResults}
            onListingSelected={onListingSelected}
          />
        </div>
      ) : <div />}
    </NotMobile>
    <Mobile>
      <div>
        {!showMap ? (
          <div className={`${styles.listingView}`}>
            <div className={`${styles.header}`}>
              <div className={`${styles.actionBar}`}>
                <SortBarBox onSortRusultChanged={onSortRusultChanged} />
                <div className={`${styles.results}`}>
                  {t('searchResult:have')} <strong className={`${styles.number}`}>{foundItems}</strong>  {t('searchResult:result')}
                </div>
                <div className={`${styles.buttons}`}>
                  <GridListSwitcher
                    changeModeViewHandler={onViewModeChanged}
                    changeMapViewModeHandler={onMapViewModeChanged}
                  />
                </div>
              </div>
            </div>
            {renderSearchResults(
              listings, onListingSelected, onListingSaved,
              viewMode, showMap, facetSearchItems,
            )}
          </div>) : <div />}
        {showMap ? (
          <div className={`${styles.mapView} ${!showMap && styles.hide}`}>
            <GoogleMapSearch
              listingsOfGroup={listingsOfGroup}
              markersData={listingsMapResult}
              onActiveListing={onActiveListing}
              currentActive={activeListing}
              activeListing={activeListingResults}
              onListingSelected={onListingSelected}
              onMarkerGroupListingClick={onMarkerGroupListingClick}
              onMapViewModeChanged={onMapViewModeChanged}
            />
          </div>
        ) : <div /> }
      </div>
    </Mobile>
  </div>
);

SearchResultComponents.propTypes = {
  foundItems: PropTypes.number.isRequired,
  listings: PropTypes.array.isRequired,
  listingsOfGroup: PropTypes.array.isRequired,
  facetSearchItems: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  activeListing: PropTypes.any,
  showMap: PropTypes.bool.isRequired,
  onViewModeChanged: PropTypes.func.isRequired,
  onMapViewModeChanged: PropTypes.func.isRequired,
  onMarkerGroupListingClick: PropTypes.func.isRequired,
  onPageChanged: PropTypes.func.isRequired,
  onListingSelected: PropTypes.func.isRequired,
  listingsMapResult: PropTypes.array.isRequired,
  onListingSaved: PropTypes.func.isRequired,
  onSortRusultChanged: PropTypes.func.isRequired,
  onActiveListing: PropTypes.func,
  activeListingResults: PropTypes.any,
  viewMode: PropTypes.string,
  t: PropTypes.func.isRequired,
};

SearchResultComponents.defaultProps = {
  activeListing: {},
  currentPage: 1,
  activeListingResults: {},
  onActiveListing: noop,
  viewMode: ViewOptions.List,
};

export default translate(['searchResult'])(SearchResultComponents);
