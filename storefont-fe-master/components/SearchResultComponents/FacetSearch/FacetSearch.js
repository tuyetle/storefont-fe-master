import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const handleClick = (e) => {
  e.preventDefault();
  e.target.classList.toggle(styles.navDropDownToogleOpen);
  e.target.nextSibling.classList.toggle(styles.dropDownItemsOpen);
};

// nav item with nav link
const navItem = (item, key, onSelectFacetSearchItem) => (
  <li key={key} className={styles.navItem}>
    <button
      className={styles.navItemButton}
      onClick={onSelectFacetSearchItem}
    >
      {item.name}
    </button>
  </li>
);

// nav list
const navList = (items, onSelectFacetSearchItem) =>
  items.map((item, index) => navLink(item, index, onSelectFacetSearchItem));

// nav dropdown
const navDropdown = (item, key, onSelectFacetSearchItem) => (
  <li key={key} className={styles.navItem}>
    <button
      className={styles.navDropDownToogle}
      onClick={handleClick}
    >
      {item.name}
    </button>
    <ul className={styles.dropDownItems}>
      {navList(item.children, onSelectFacetSearchItem)}
    </ul>
  </li>
);

// nav link
const navLink = (item, idx, onSelectFacetSearchItem) => {
  if (item.children) {
    return navDropdown(item, idx, onSelectFacetSearchItem);
  }
  return navItem(item, idx, onSelectFacetSearchItem);
};

class FacetSearch extends PureComponent {
  render() {
    const { items, onSelectFacetSearchItem } = this.props;

    return (
      <nav>
        <ul className={styles.sidebarNav}>
          {
            items && items.length > 0 && items.map((item, i) => (
              <Fragment key={+i}>
                <li className={styles.navItemHeader}>{item.title}</li>
                {
                  navList(item.children, onSelectFacetSearchItem)
                }
              </Fragment>
            ))
          }
        </ul>
      </nav>
    );
  }
}

FacetSearch.propTypes = {
  items: PropTypes.array.isRequired,
  onSelectFacetSearchItem: PropTypes.func.isRequired,
};

FacetSearch.defaultProps = {
  onSelectFacetSearchItem: null,
};

export default FacetSearch;
