import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import KeyCode from '~/const/keyCode';
import { TRANSACTIONAL_TYPE_OPTIONS } from '~/config/config';
import RadioGroup from '~/components/common/RadioGroup/RadioGroup';
import ResultItem from '~/components/LandingPageComponents/SearchArea/AutoSuggestionSearch/ResultItem/ResultItem';
import AutoSuggestionSearch from '~/components/LandingPageComponents/SearchArea/AutoSuggestionSearch/AutoSuggestionSearch';
import iconLocation from '#/static/assets/img/icon-location.png';
import iconProject from '#/static/assets/img/icon-project.png';
import iconPostNew from '#/static/assets/img/icon-post-new.png';
import styles from './styles';

const IconType = [
  { type: 'location', icon: iconLocation },
  { type: 'project', icon: iconProject },
  { type: 'listing', icon: iconPostNew },
];

const getIconType = type => IconType.find(item => item.type === type).icon;

export class SearchArea extends PureComponent {
  constructor(props) {
    super(props);
    this.props.selectSuggetionTypeHandler(TRANSACTIONAL_TYPE_OPTIONS[0].value);
  }

    onSuggestionTypeSelected = (e) => {
      this.props.selectSuggetionTypeHandler(e.target.value);
    }

    onSuggestionSelected = (event, { suggestion, method }) => {
      this.props.selectSuggetionHandler(suggestion.id);
      if (method === KeyCode.Click) {
        this.props.searchHandler(suggestion);
      }
    };

    onChangeHandler = (event, { method }) => {
      if (method === KeyCode.Type) {
        this.props.selectSuggetionHandler(0);
      }
    };

    onKeyDownHandler = (event) => {
      if (event.key === KeyCode.Enter) {
        this.props.searchHandler();
      }
    };

    getSuggestionValue = suggestion => suggestion.resultText

    getSectionSuggestions = (section) => {
      const listItems = section.properties;
      return listItems.map(item => ({ ...item, type: section.type }));
    }

    renderSuggestion = (suggestion, { query }) =>
      (<ResultItem {...suggestion} query={query} />)

    renderSectionTitle = (section) => {
      const IconItem = getIconType(section.type);
      return (
        <div><span className={`${styles.icon}`}><img className={`${styles.icon}`} src={IconItem} alt="" /></span>{section.title}</div>
      );
    }

    render() {
      const {
        t, keyword, suggestions, getSuggestionHandler,
      } = this.props;

      const transactionalTypeOptions = TRANSACTIONAL_TYPE_OPTIONS.map(option => ({
        value: option.value,
        label: t(option.label),
      }));

      return (
        <div className={`center-block ${styles.searchArea}`}>
          <div className={`d-flex justify-content-center ${styles.wrapperSeachingCategory}`}>
            <RadioGroup
              name="transactionalType"
              defaultValue={transactionalTypeOptions[0].value}
              component={RadioGroup}
              options={transactionalTypeOptions}
              onChange={this.onSuggestionTypeSelected}
              className={`${styles.radioGroup}`}
            />
          </div>
          <AutoSuggestionSearch
            placeholder={t('placeholder')}
            keyword={keyword}
            suggestions={suggestions}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            renderSectionTitle={this.renderSectionTitle}
            getSectionSuggestions={this.getSectionSuggestions}
            getSuggestions={getSuggestionHandler}
            onChangeHandler={this.onChangeHandler}
            onKeyDownHandler={this.onKeyDownHandler}
            onSuggestionSelected={this.onSuggestionSelected}
          />
        </div>
      );
    }
}

SearchArea.propTypes = {
  keyword: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
  getSuggestionHandler: PropTypes.func.isRequired,
  selectSuggetionHandler: PropTypes.func.isRequired,
  selectSuggetionTypeHandler: PropTypes.func.isRequired,
  searchHandler: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

SearchArea.defaultProps = {
};

export default translate(['common'])(SearchArea);
