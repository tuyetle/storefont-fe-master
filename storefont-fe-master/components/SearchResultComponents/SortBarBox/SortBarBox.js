import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';
import { translate } from 'react-i18next';
import DropdownButton from '~/components/common/DropdownButton/DropdownButton';
import { SORT_RUSULT_OPTIONS } from '~/config/config';
import styles from './styles';

export class SortBarBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: SORT_RUSULT_OPTIONS[0].name,
    };
  }
  selectHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
    this.props.onSortRusultChanged(e.target.value);
  };
  render() {
    return (
      <DropdownButton toggleTag="a" className={`${styles.contain}`} label={this.props.t(this.state.value)}>
        <section className={styles.sortBox}>
          {
            SORT_RUSULT_OPTIONS.map((opt, i) => (
              <DropdownItem key={+i} onClick={this.selectHandler} value={opt.name}>
                {this.props.t(opt.name)}
              </DropdownItem>
            ))
          }
        </section>
      </DropdownButton>
    );
  }
}

SortBarBox.propTypes = {
  t: PropTypes.func.isRequired,
  onSortRusultChanged: PropTypes.func,
};

SortBarBox.defaultProps = {
  onSortRusultChanged: null,
};
export default translate(['searchResult'])(SortBarBox);
