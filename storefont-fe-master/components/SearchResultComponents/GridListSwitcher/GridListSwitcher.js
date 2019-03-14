import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListViewIcon from '~/static/assets/img/utilityIcons/ic-list-view.svg';
import GridViewIcon from '~/static/assets/img/utilityIcons/ic-grid-view.svg';
import MapIcon from '~/static/assets/img/utilityIcons/ic-map-view.svg';
import ViewOptions from '~/const/ViewOptions';
import styles from './styles';

class GridListSwitcher extends PureComponent {
    onChangeListViewMode = () => {
      this.props.changeModeViewHandler(ViewOptions.List);
    };

    onChangeGridViewMode = () => {
      this.props.changeModeViewHandler(ViewOptions.Grid);
    };

    onChangeMapViewModeChange = (e) => {
      this.props.changeMapViewModeHandler(e.target.checked);
    };

    render() {
      return (
        <div className={`${styles.container}`}>
          <div className="form-inline form-group">
            <div className="col-xs-1">
              <label className="btn" >
                <input
                  type="radio"
                  name="chk1"
                  value={ViewOptions.Grid}
                  onClick={this.onChangeGridViewMode}
                  defaultChecked={this.props.defaultGridViewMode}
                  className={`hidden ${styles.buttonGridView}`}
                />
                <GridViewIcon className={styles.iconView} />
              </label>
            </div>
            <div className="col-xs-1">
              <label className="btn" >
                <input
                  type="radio"
                  name="chk1"
                  value={ViewOptions.List}
                  onClick={this.onChangeListViewMode}
                  defaultChecked={!this.props.defaultGridViewMode}
                  className={`hidden ${styles.buttonListView}`}
                />
                <ListViewIcon className={styles.iconView} />
              </label>
            </div>
            <div className="col-xs-1">
              <label className="btn" >
                <input
                  type="checkbox"
                  value={ViewOptions.List}
                  onClick={this.onChangeMapViewModeChange}
                  className={`hidden ${styles.buttonMapView}`}
                  defaultChecked={!this.props.defaultMapViewMode}
                />
                <MapIcon className={styles.iconView} />
              </label>
            </div>
          </div>
        </div>
      );
    }
}

GridListSwitcher.propTypes = {
  changeModeViewHandler: PropTypes.func.isRequired,
  changeMapViewModeHandler: PropTypes.func.isRequired,
  defaultGridViewMode: PropTypes.bool,
  defaultMapViewMode: PropTypes.bool,
};

GridListSwitcher.defaultProps = {
  defaultMapViewMode: false,
  defaultGridViewMode: true,
};

export default GridListSwitcher;
