import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

import { NUMBER_OF_LINES_WILL_SHOW_BY_DEFAULT } from '~/config/config';
import styles from './styles';

class DescriptionDisplaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      truncated: false,
    };

    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

    handleTruncate = (truncated) => {
      if (truncated !== this.state.truncated) {
        this.setState({
          truncated,
        });
      }
    }

    toggleLines = (evt) => {
      evt.preventDefault();

      this.setState({
        expanded: !this.state.expanded,
      });
    }

    render() {
      const {
        description,
        more,
        less,
        label,
        lines,
      } = this.props;

      const { expanded, truncated } = this.state;

      return (
        <div className={styles.description}>
          <h4 className={styles.heading}>{label}</h4>
          <div className={styles.content}>
            <Truncate
              lines={!expanded && lines}
              ellipsis={(
                <span className={styles.overlay}>
                  <a href="#" className={styles.anchorClass} onClick={this.toggleLines}>{more}</a>
                </span>
              )}
              onTruncate={this.handleTruncate}
            >
              {description}
            </Truncate>
            {!truncated && expanded && (
              <div className={styles.showLess}>
                <a href="#" className={styles.anchorClass} onClick={this.toggleLines}>{less}</a>
              </div>
            )}
          </div>
        </div>
      );
    }
}

DescriptionDisplaying.propTypes = {
  description: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
  less: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  lines: PropTypes.number,
};

DescriptionDisplaying.defaultProps = {
  lines: NUMBER_OF_LINES_WILL_SHOW_BY_DEFAULT,
};

export default DescriptionDisplaying;
