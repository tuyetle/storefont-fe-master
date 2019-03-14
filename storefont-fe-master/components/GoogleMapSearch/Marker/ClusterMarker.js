import React, { Component } from 'react';
import { noop, isFunction } from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';

export class ClusterMarker extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (isFunction(this.props.onClick)) {
      this.props.onClick({ ...this.props });
    }
  }

  render() {
    return (
      <div
        className={styles.markerCluster}
        onClick={this.onClick}
        role="button"
        tabIndex={-1}
      >
        <div
          className={styles.text}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

ClusterMarker.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
ClusterMarker.defaultProps = {
  text: '0',
  onClick: noop,
};

export default ClusterMarker;
