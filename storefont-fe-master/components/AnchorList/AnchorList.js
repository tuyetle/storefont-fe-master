import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles';

class AnchorList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { active: null };

    this.activateTab = this.activeTab.bind(this);
  }

  activeTab(e) {
    e.stopPropagation();
    this.setState({
      active: e.target.value === this.state.active ? null : e.target.value,
    });
  }

  render() {
    const { routerLocation, anchors, className } = this.props;
    return (
      <div className={classNames(className, `${styles.wrapper}`)}>
        {
          anchors.map(({ label, id }) => {
            const url = routerLocation === null ? '' : routerLocation;
            return (
              <span className={classNames(`${styles.item}`)} key={label}>
                <a
                  onClick={this.activateTab}
                  value={id}
                  role="button"
                  className={this.state.active === id ? 'active' : ''}
                  href={`${url}#${id}`}
                >
                  {label}
                </a>
              </span>
            );
          })
        }
      </div>
    );
  }
}

AnchorList.propTypes = {
  routerLocation: PropTypes.string,
  anchors: PropTypes.array,
  className: PropTypes.string,
};

AnchorList.defaultProps = {
  routerLocation: null,
  anchors: [],
  className: null,
};

export default AnchorList;
