import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import BrCrumb from 'antd/lib/breadcrumb';
import { css } from 'glamor';

import styles from './styles';

const Breadcrumb = ({ options, routes, params }) => {
  const BrCrumbItem = BrCrumb.Item;
  let BreadcrumbComponent;
  const breadcrumbStyle = css(styles.breadcrumb);

  if (_.isArray(options)) {
    const listItem = options.map((option) => {
      let item = option.label;

      if (_.isString(option.href)) {
        item = (<a className={breadcrumbStyle} href={option.href}>{option.label}</a>);
      }

      return (
        <BrCrumbItem key={option.label}>{item}</BrCrumbItem>
      );
    });

    BreadcrumbComponent = (
      <BrCrumb>
        {listItem}
      </BrCrumb>
    );
  } else if (_.isObject(routes)) {
    BreadcrumbComponent = (
      <BrCrumb className={breadcrumbStyle} routes={routes} params={params} />);
  }


  return BreadcrumbComponent;
};

Breadcrumb.propTypes = {
  options: PropTypes.array,
};

export default Breadcrumb;
