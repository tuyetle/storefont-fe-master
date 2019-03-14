import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import LPHighlightProject from '~/components/LandingPageComponents/LPHighlightProject/LPHighlightProject';
import {
  makeGetNewHighlightProjects,
  makeGetFeaturedHighlightProjects,
} from './HighlightProjectSelector';

const HighlightProject = ({ newProjects, featuredProjects }) => (
  <LPHighlightProject
    newProjects={newProjects}
    featuredProjects={featuredProjects}
  />
);

HighlightProject.propTypes = {
  newProjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    picture: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
  })),
  featuredProjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    picture: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
  })),
};

HighlightProject.defaultProps = {
  newProjects: [],
  featuredProjects: [],
};

const mapStateToProps = createStructuredSelector({
  newProjects: makeGetNewHighlightProjects(),
  featuredProjects: makeGetFeaturedHighlightProjects(),
});

export default connect(mapStateToProps)(HighlightProject);
