import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

export const MODAL_NAME = 'informationModal';

const InformationModal = ({ t, data, configUI }) => {
  const text = configUI.shouldTranslateText ? t(data.text) : data.text;
  return (
    <p className="text-center">{text}</p>
  );
};

InformationModal.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    text: PropTypes.string,
  }),
  configUI: PropTypes.shape({
    shouldTranslateText: PropTypes.bool,
  }),
};

InformationModal.defaultProps = {
  configUI: { shouldTranslateText: false },
  data: {
    text: 'common:completedTransferLead',
  },
};

export default translate(['common'])(InformationModal);
