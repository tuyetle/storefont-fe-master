import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import LPHighlightProperty from '~/components/LandingPageComponents/LPHighlightProperty/LPHighlightProperty';
import {
  makeGetNewHighlightProperties,
  makeGetFeaturedHighlightProperties,
} from './HighlightPropertySelector';

const HighlightProperty = ({ newProperties, featuredProperties }) => (
  <LPHighlightProperty
    newProperties={newProperties}
    featuredProperties={featuredProperties}
  />
);

HighlightProperty.propTypes = {
  newProperties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    picture: PropTypes.string,
    showTitle: PropTypes.bool,
    address: PropTypes.string,
    squareFeet: PropTypes.number,
    bathRoom: PropTypes.number,
    bedRoom: PropTypes.number,
    price: PropTypes.number,
    url: PropTypes.string,
  })),
  featuredProperties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    picture: PropTypes.string,
    showTitle: PropTypes.bool,
    address: PropTypes.string,
    squareFeet: PropTypes.number,
    bathRoom: PropTypes.number,
    bedRoom: PropTypes.number,
    price: PropTypes.number,
    url: PropTypes.string,
  })),
};

HighlightProperty.defaultProps = {
  newProperties: [],
  featuredProperties: [],
};

const mapStateToProps = createStructuredSelector({
  newProperties: makeGetNewHighlightProperties(),
  featuredProperties: makeGetFeaturedHighlightProperties(),
});

export default connect(mapStateToProps)(HighlightProperty);
