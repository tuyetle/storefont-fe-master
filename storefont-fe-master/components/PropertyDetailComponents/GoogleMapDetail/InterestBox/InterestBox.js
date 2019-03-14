import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { css } from 'glamor';
import markerIcons from '../Markers/MarkerIcons';
import styles from './styles';

const InterestBoxLine = ({
  key, icon, title, number,
}) => {
  const Icon = markerIcons[icon];
  return (
    <div className={classNames(`${styles.InterestBoxLine}`)} key={key}>
      <span className={classNames(`${styles.InterestBoxLineIcon}`)}>
        <img src={Icon} alt="icon" />
      </span>
      <span className={classNames(`${styles.InterestBoxLineTitle}`)}>
        {title}
      </span>
      <span className={classNames(`${styles.InterestBoxLineNumber}`)}> ({number})</span>
    </div>
  );
};

InterestBoxLine.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

InterestBoxLine.defaultProps = {
  icon: '',
  title: '',
  number: '',
};

class InterestBox extends Component {
  constructor(props) {
    super(props);
    this._convertToMap = this._convertToMap.bind(this);
  }

  _convertToMap() {
    // TODO move to config.
    const items = {
      hospital: { icon: 'markerhospital', title: this.props.t('common:hospital'), number: 0 },
      school: { icon: 'markerschool', title: this.props.t('common:school'), number: 0 },
      bank: { icon: 'markerbank', title: this.props.t('common:bank'), number: 0 },
      shopping: { icon: 'markershopping', title: this.props.t('common:shopping'), number: 0 },
      restaurant: { icon: 'markerrestaurant', title: this.props.t('common:restaurant'), number: 0 },
    };

    this.props.pointsOfInterest.forEach((item) => {
      items[item.type].number += 1;
    });

    return items;
  }

  render() {
    // calculate the duplicate and canculator the number.
    const points = this._convertToMap();
    const items = Object.keys(points).map((key) => {
      const point = points[key];

      return (
        <div className={key === 'hospital' ? 'col-3' : 'col-2'} key={key}>
          <InterestBoxLine
            icon={point.icon}
            title={point.title}
            number={point.number}
          />
        </div>
      );
    });

    return (
      <div className={css(styles.InterestBox)}>
        <div className="row justify-content-center">
          {items}
        </div>
      </div>
    );
  }
}

InterestBox.propTypes = {
  pointsOfInterest: PropTypes.array,
  t: PropTypes.func.isRequired,
};

InterestBox.defaultProps = {
  pointsOfInterest: [],
};

export default InterestBox;
