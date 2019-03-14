import React from 'react';
import PropTypes from 'prop-types';
import { NotMobile } from '~/config/media';
import ListViewItem from '~/components/SearchResultComponents/ListViewItem/ListViewItem';
import MapListViewItem from '~/components/SearchResultComponents/MapListViewItem/MapListViewItem';
import FacetSearch from '~/components/SearchResultComponents/FacetSearch/FacetSearch';
import styles from './styles';

const ResultListView = props =>
  (
    <div className="container-fluid row">
      {
        !props.showMap &&
        <NotMobile>
          <div className={styles.facetSearch}>
            <FacetSearch
              items={props.facetSearchItems}
              onSelectFacetSearchItem={() => { console.log('select facet item'); }}
            />
          </div>
        </NotMobile>
      }
      <div className={`${styles.listView} ${props.showMap ? 'w-100' : ''}`}>
        {
          props.listings.map((p, i) => {
            const ViewItemComponent = props.showMap ? MapListViewItem : ListViewItem;
            return (
              <ViewItemComponent
                key={+i}
                listing={p}
                onListingSelected={props.onListingSelected}
                onListingSaved={props.onListingSaved}
              />
            );
          })
        }
      </div>
    </div>
  );
ResultListView.propTypes = {
  facetSearchItems: PropTypes.array.isRequired,
  listings: PropTypes.array.isRequired,
  onListingSelected: PropTypes.func,
  onListingSaved: PropTypes.func,
  showMap: PropTypes.bool.isRequired,
};

ResultListView.defaultProps = {
  onListingSelected: null,
  onListingSaved: null,
};
export default ResultListView;
