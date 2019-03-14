import React, { PureComponent } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import styles from './styles';

const customTheme = {
  container: `${styles.container}`,
  containerOpen: `${styles.containerOpen}`,
  input: `${styles.input}`,
  inputOpen: `${styles.inputOen}`,
  inputFocused: `${styles.inputFocused}`,
  suggestionsContainer: `${styles.suggestionsContainer}`,
  suggestionsContainerOpen: `${styles.suggestionsContainerOpen}`,
  suggestionsList: `${styles.suggestionsList}`,
  suggestion: `${styles.suggestion}`,
  suggestionFirst: `${styles.suggestionFirst}`,
  suggestionHighlighted: `${styles.suggestionHighlighted}`,
  sectionContainer: `${styles.sectionContainer}`,
  sectionContainerFirst: `${styles.sectionContainerFirst}`,
  sectionTitle: `${styles.sectionTitle}`,
};

const NUMBER_CHARS_FETCH_REQUEST = 3;
const DELAY_KEYSTROKE = 250;

export class AutoSuggestionSearch extends PureComponent {
  constructor(props) {
    super(props);

    this.delayKeystroke = new Date().getTime();
    this.state = { value: '' };

    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
  }

    onSuggestionsFetchRequested = ({ value }) => {
      if (value && value.length > NUMBER_CHARS_FETCH_REQUEST) {
        const deplay = (new Date().getTime()) - this.delayKeystroke;
        if (deplay > DELAY_KEYSTROKE) {
          this.delayKeystroke = new Date().getTime();
          this.props.getSuggestions(value);
        }
      }
    };

    onSuggestionsClearRequested = (value) => {
      if (value && value.length > NUMBER_CHARS_FETCH_REQUEST) {
        const deplay = (new Date().getTime()) - this.delayKeystroke;
        if (deplay > DELAY_KEYSTROKE) {
          this.delayKeystroke = new Date().getTime();
          this.props.getSuggestions();
        }
      }
    };

    onChange = (event, { newValue, method }) => {
      this.setState({ value: newValue });
      this.props.onChangeHandler(event, { newValue, method });
    };

    onKeyDownHandler = (event, obj) => {
      this.props.onKeyDownHandler(event, obj);
    };

    renderInputComponent = inputProps => (
      <div className="input-group">
        <input {...inputProps} type="text" className={`form-control ${styles.input}`} aria-describedby="btnGroupAddon2" />
        <button type="button" className="btn">
          <i className="fa fa-search" />
        </button>
      </div>
    );

    render() {
      const {
        t,
        renderSuggestion,
        renderSectionTitle,
        getSectionSuggestions,
        getSuggestionValue,
        suggestions,
      } = this.props;

      const { value } = this.state;

      const inputProps = {
        placeholder: this.props.placeholder,
        onChange: this.onChange,
        value,
        onKeyDown: this.onKeyDownHandler,
      };

      const noSuggestions = !(value.trim() === '') && suggestions.length === 0;
      const hasSuggestion = !noSuggestions ? styles.hasSuggestion : '';

      return (
        <div>
          <Autosuggest
            theme={customTheme}
            multiSection={this.props.multiSection}
            suggestions={suggestions}
            onSuggestionSelected={this.props.onSuggestionSelected}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            getSuggestionValue={getSuggestionValue}
            inputProps={inputProps}
            alwaysRenderSuggestions={false}
            focusInputOnSuggestionClick
          />
          <div className={`${hasSuggestion} ${styles.noSuggestions}`}>
            {t('dataNotFound')}
          </div>
        </div>
      );
    }
}

AutoSuggestionSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  multiSection: PropTypes.bool,
  onChangeHandler: PropTypes.func,
  onKeyDownHandler: PropTypes.func,
  renderSuggestion: PropTypes.func,
  renderSectionTitle: PropTypes.func,
  getSuggestionValue: PropTypes.func,
  getSectionSuggestions: PropTypes.func,
  getSuggestions: PropTypes.func,
  onSuggestionSelected: PropTypes.func,
  t: PropTypes.func.isRequired,
};

AutoSuggestionSearch.defaultProps = {
  placeholder: '',
  multiSection: true,
  onChangeHandler: null,
  onKeyDownHandler: null,
  renderSuggestion: null,
  renderSectionTitle: null,
  getSuggestionValue: null,
  getSectionSuggestions: null,
  getSuggestions: null,
  onSuggestionSelected: null,
};

export default translate(['common'])(AutoSuggestionSearch);
