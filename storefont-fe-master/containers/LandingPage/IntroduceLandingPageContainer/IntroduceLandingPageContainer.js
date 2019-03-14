import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { noop } from 'lodash';
// import { Router } from '~/routes';

import IntroduceLandingPage from '~/components/LandingPageComponents/IntroduceLandingPage/IntroduceLandingPage';
import businessActions from '~/actions/BusinessActions';
import UIActions from '~/actions/UIActions';
import { GET_SUGGESTION, RESET_SUGGESTION, SET_SEARCHING_CONDITIONS } from '~/actions/BusinessActionTypes';
// import { SEARCHING_RESULT } from '~/config/routerConfig';

import { makeGetSuggestion } from './IntroduceLandingPageSelector';

const FREE_TEXT = 'freetext';

class IntroduceLandingPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { keyword: '' };
    this.suggestionType = 0;
    this.suggestionId = 0;
  }

  componentDidMount() {
    this.props.resetSugesstion();
  }

  getSuggestions = (keyword) => {
    this.setState({
      keyword,
    });
    this.props.getSugesstion({ keyword });
  };

  selectSuggetionTypeHandler = (suggestionType) => {
    this.suggestionType = suggestionType;
  };

  selectSuggetionHandler = (suggestionId) => {
    this.suggestionId = suggestionId;
  };

  searchHandler = (suggestion) => {
    let { keyword } = this.state;
    let type = FREE_TEXT;
    if (suggestion && suggestion.resultText) {
      keyword = suggestion.resultText;
      ({ type } = suggestion);
    }

    // Router.pushRoute(SEARCHING_RESULT, {
    //   type,
    //   id: this.suggestionId,
    //   transactionalType: this.suggestionType,
    //   keyword,
    // });
    const payload = {
      type,
      id: this.suggestionId,
      transactionalType: this.suggestionType,
      keyword,
    };
    this.props.setSearchingConditions(payload);
  };

  render() {
    return (
      <IntroduceLandingPage
        keyword={this.state.keyword}
        suggestions={this.props.suggestions.data}
        getSuggestionHandler={this.getSuggestions}
        selectSuggetionHandler={this.selectSuggetionHandler}
        selectSuggetionTypeHandler={this.selectSuggetionTypeHandler}
        searchHandler={this.searchHandler}
      />
    );
  }
}

IntroduceLandingPageContainer.propTypes = {
  suggestions: PropTypes.object.isRequired,
  getSugesstion: PropTypes.func,
  resetSugesstion: PropTypes.func,
  setSearchingConditions: PropTypes.func,
};

IntroduceLandingPageContainer.defaultProps = {
  suggestions: {},
  getSugesstion: noop,
  resetSugesstion: noop,
};

const mapStateToProps = createStructuredSelector({
  suggestions: makeGetSuggestion(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getSugesstion: businessActions[GET_SUGGESTION],
    setSearchingConditions: businessActions[SET_SEARCHING_CONDITIONS],
    setNextPath: UIActions.setNextPath,
    resetSugesstion: businessActions[RESET_SUGGESTION],
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IntroduceLandingPageContainer);
