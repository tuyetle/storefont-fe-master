import React, { PureComponent } from 'react';
import { Creatable } from 'react-select';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import SVGSearch from '~/static/assets/img/ic_search.svg';
import styles from './styles';

class SearchingTagComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { multiValue: props.selectedSuggestion };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onChangeHandler(value) {
    this.setState({ multiValue: value });
    const { fieldApi: { setValue, setTouched } } = this.props;
    if (isFunction(setValue)) {
      setTouched(true);
      setValue(value);
    }
  }

  onInputChange(value) {
    this.props.getSuggestions(value);
  }

  render() {
    const { multiValue } = this.state;
    const {
      suggestions,
      promptText,
      noResultsText,
      placeholder,
      loadingPlaceholder,
    } = this.props;

    return (
      <div className={`${styles.wrapper}`}>
        <SVGSearch />
        <Creatable
          multi
          options={suggestions}
          onChange={this.onChangeHandler}
          onInputChange={this.onInputChange}
          value={multiValue}
          promptTextCreator={label => `${promptText} ${label}`}
          noResultsText={noResultsText}
          placeholder={placeholder}
          loadingPlaceholder={loadingPlaceholder}
          arrowRenderer={() => {}}
        />
      </div>
    );
  }
}

SearchingTagComponent.propTypes = {
  suggestions: PropTypes.array,
  promptText: PropTypes.string,
  noResultsText: PropTypes.string,
  placeholder: PropTypes.string,
  loadingPlaceholder: PropTypes.string,
  getSuggestions: PropTypes.func.isRequired,
  selectedSuggestion: PropTypes.object,

  fieldApi: PropTypes.object.isRequired,
};

SearchingTagComponent.defaultProps = {
  suggestions: [],
  promptText: '',
  noResultsText: '',
  placeholder: '',
  loadingPlaceholder: '',
  selectedSuggestion: undefined,
};

export default SearchingTagComponent;
