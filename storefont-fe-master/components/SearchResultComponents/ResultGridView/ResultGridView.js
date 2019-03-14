import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import ProductView from '~/components/SearchResultComponents/ProductView/ProductView';

const ResultGridView = ({
  listings, showMap, onListingSelected, onListingSaved,
}) =>
  (
    listings.map(p =>
      (<ProductView
        key={p.id}
        listing={p}
        showMap={showMap}
        onListingSelected={onListingSelected}
        onListingSaved={onListingSaved}
      />))
  );

ResultGridView.propTypes = {
  listings: PropTypes.array.isRequired,
  showMap: PropTypes.bool.isRequired,
  onListingSelected: PropTypes.func,
  onListingSaved: PropTypes.func,
};

ResultGridView.defaultProps = {
  onListingSelected: noop,
  onListingSaved: noop,
};

export default ResultGridView;
