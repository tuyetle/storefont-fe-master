import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import styles from './styles';

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    const { dropdownOpen } = this.state;
    const openClass = dropdownOpen ? `${styles.open}` : null;
    const caretIconClass = this.props.showCaret ? `${styles.caretIcon}` : null;

    return (
      <div className={`${styles.Dropdown} ${this.props.className}`}>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            onClick={this.toggle}
            data-toggle="dropdown"
            aria-haspopup
            tag={this.props.toggleTag}
            className={`${styles.buttonBox} ${caretIconClass}`}
          >
            {this.props.label}
          </DropdownToggle>
          <DropdownMenu className={`${openClass} pull-right`}>
            {this.props.children}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

DropdownButton.propTypes = {
  label: PropTypes.node.isRequired,
  className: PropTypes.string,
  showCaret: PropTypes.bool,
  children: PropTypes.node.isRequired,
  toggleTag: PropTypes.string,
};

DropdownButton.defaultProps = {
  className: null,
  showCaret: true,
  toggleTag: null,
};
export default DropdownButton;
