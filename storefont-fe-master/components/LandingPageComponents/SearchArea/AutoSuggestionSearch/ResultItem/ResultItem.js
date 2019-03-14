import React from 'react';
import PropTypes from 'prop-types';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { css } from 'glamor';
import styles from './styles';

const ResultItem = (props) => {
  const renderSuggestion = (text, query) => {
    const matches = match(text, query);
    const parts = parse(text, matches);

    return (
      parts.map((part, index) => {
        const className = part.highlight ? css(styles.resultImgHighlight) : null;

        return (
          <span className={css(className)} key={+index}>{part.text}</span>
        );
      })
    );
  };

  return (
    <div className={css(styles.resultItem)}>
      { props.imgSrc &&
      <img alt="Icon" className={css(styles.resultImg)} src={props.imgSrc} />
      }
      <span className={css(styles.resultText)}>
        {renderSuggestion(props.resultText, props.query)}
      </span>
    </div>
  );
};

ResultItem.propTypes = {
  resultText: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  query: PropTypes.string,
};

ResultItem.defaultProps = {
  imgSrc: null,
  query: null,
};

export default ResultItem;
