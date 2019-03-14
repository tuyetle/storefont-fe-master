import React, { Fragment } from 'react';
import { Mobile } from '~/config/media';
import LPMrBanner from '~/components/LandingPageComponents/LPMrBanner/LPMrBanner';
import IntroduceLandingPageContainer from './IntroduceLandingPageContainer/IntroduceLandingPageContainer';
import HighlightProperty from './HighlightProperty/HighlightProperty';
import HighlightProject from './HighlightProject/HighlightProject';
import LatestNews from './LatestNews/LatestNews';
import SeoLinks from './SeoLinks/SeoLinks';

const LandingPage = () => (
  <Fragment>
    <IntroduceLandingPageContainer />
    <LPMrBanner />
    <HighlightProperty />
    <HighlightProject />
    <Mobile>
      <LPMrBanner />
    </Mobile>
    <LatestNews />
    <SeoLinks />
  </Fragment>
);

export default LandingPage;
