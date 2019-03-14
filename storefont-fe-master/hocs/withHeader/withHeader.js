import React, { PureComponent } from 'react';
import Header from '~/containers/Header/Header';

function withHeader(WrappedComponent) {
  class WithHeader extends PureComponent {
    render() {
      return (
        <div>
          <Header
            showMenu
            showCreateListingButton
            containerClassName="container-fluid"
          />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  return WithHeader;
}

export default withHeader;
