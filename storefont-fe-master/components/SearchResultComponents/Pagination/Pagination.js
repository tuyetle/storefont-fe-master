import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'antd/lib/pagination';
import styles from './styles';

const PaginationComponent = ({
  onClickHandler, pageSize, currentPage, total,
}) => {
  const onChange = (page) => {
    onClickHandler(page);
  };

  return (
    <div className={`form-inline ${styles.container}`}>
      <Pagination
        onChange={onChange}
        pageSize={pageSize}
        current={currentPage}
        total={total}
      />
    </div>
  );
};

PaginationComponent.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

PaginationComponent.defaultProps = {
};

export default PaginationComponent;
