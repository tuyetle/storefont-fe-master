
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import LPSeoLinks from '~/components/LandingPageComponents/LPSeoLinks/LPSeoLinks';
import { makeGetSeoLinks } from './SeoLinksSelector';

const SeoLinks = ({ seoLinks = [] }) => {
  if (seoLinks.length === 0) return <div />;

  return (
    seoLinks &&
    <LPSeoLinks seoLinks={seoLinks} />
  );
};

SeoLinks.propTypes = {
  seoLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    displayName: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
  })),
};

SeoLinks.defaultProps = {
  seoLinks: [],
};

const mapStateToProps = createStructuredSelector({
  seoLinks: makeGetSeoLinks(),
});

export default connect(mapStateToProps)(SeoLinks);
