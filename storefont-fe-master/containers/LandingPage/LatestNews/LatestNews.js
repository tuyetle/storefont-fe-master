
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import LPLatestNews from '~/components/LandingPageComponents/LPLatestNews/LPLatestNews';
import { makeGetLatestNews } from './LatestNewsSelector';

class LatestNews extends PureComponent {
  render() {
    if (this.props.news && this.props.news.length > 0) {
      return (
        <LPLatestNews news={this.props.news} />
      );
    }

    return null;
  }
}

LatestNews.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

LatestNews.defaultProps = {
  history: null,
  news: [],
};

const mapStateToProps = createStructuredSelector({
  news: makeGetLatestNews(),
});

export default connect(mapStateToProps)(LatestNews);
