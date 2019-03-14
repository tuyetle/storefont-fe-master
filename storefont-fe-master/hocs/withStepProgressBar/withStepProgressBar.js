import React, { PureComponent } from 'react';
import SteppedProgressBar from '~/components/PropertyListing/SteppedProgressBar/SteppedProgressBar';
import stepsConfig from '~/config/steppedProgressBar';

function withStepProgressBar(WrappedComponent, steps = stepsConfig.STEP_LISTING_INFO) {
  class WithStepProgressBar extends PureComponent {
    render() {
      return (
        <div>
          <SteppedProgressBar
            steps={steps}
          />
          <WrappedComponent
            {...this.props}
          />
        </div>
      );
    }
  }

  return WithStepProgressBar;
}

export default withStepProgressBar;
