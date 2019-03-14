import React, { PureComponent } from 'react';
import { NotMobile } from '~/config/media';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import Sticky from 'react-sticky-el';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';
import ContactForm from '~/components/PropertyDetailComponents/ContactForm/ContactForm';
import LPMrBanner from '~/components/LandingPageComponents/LPMrBanner/LPMrBanner';
import DescriptionDisplaying from '~/components/PropertyDetailComponents/DescriptionDisplaying/DescriptionDisplaying';
import MainAttributes from '~/components/PropertyDetailComponents/AttributeValues/MainAttributes';
import AttributeValues from '~/components/PropertyDetailComponents/AttributeValues/AttributeValues';
import ImageCarousel from '~/components/PropertyDetailComponents/ImageCarousel/ImageCarousel';
import PropertySuggestions from '~/components/PropertyDetailComponents/PropertySuggestions/PropertySuggestions';
import GoogleMapDetail from '~/components/PropertyDetailComponents/GoogleMapDetail/GoogleMapDetail';
import HeaderPropertyDetail from '~/components/PropertyDetailComponents/HeaderPropertyDetail/HeaderPropertyDetail';
import AnchorList from '~/components/AnchorList/AnchorList';
import FloatingHeader from '~/components/PropertyDetailComponents/FloatingHeader/FloatingHeader';
import propertyDetailAnchorConfig from '~/config/anchorConfig';
import breadcrumbOptions from '#/mockdata/BreadcrumbProperty';
import styles from './styles';

class WrapperPropertyDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowButtonContact: false,
    };
  }

  onRequestContactChanged = (fieldName, val) => {
    const newState = { ...this.state };
    newState[fieldName] = val;
    this.setState(newState);
  }

  onFixedToggle = () => {
    this.setState({
      isShowButtonContact: !this.state.isShowButtonContact,
    });
  }

  render() {
    const {
      t, data, postContact, saveListing, routerLocation, postContactResult,
    } = this.props;

    const translatedBcOptions = breadcrumbOptions.map((option) => {
      const mappedOption = { ...option };
      mappedOption.label = t(option.i18nKey);
      return mappedOption;
    });

    const anchors = _.values(propertyDetailAnchorConfig);
    const requestContact = {
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      description: this.state.description,
    };

    return (
      <div className={styles.wrapperPropertyDetail}>
        <div className={`${styles.contentPropertyDetail}`}>
          <div className={styles.showDesktop}>
            <Sticky stickyClassName={`${styles.floatingHeaderSticky}`} hideOnBoundaryHit={false} >
              <div className={styles.floatingHeader}>
                <FloatingHeader
                  title={data.title}
                  address={data.address}
                  priceText={data.price}
                  transactionType={t(`common:${data.transactionType}`)}
                  attributes={data.attributeValue.mainAttributes}
                  isShowButtonContact={this.state.isShowButtonContact}
                  postContact={postContact}
                  postContactResult={postContactResult}
                  requestContact={requestContact}
                  onRequestContactChanged={this.onRequestContactChanged}
                  t={t}
                />
              </div>
            </Sticky>
          </div>
          <div className="container">
            <div className="row">
              <div className={classNames('col-12')}>
                <Breadcrumb
                  options={translatedBcOptions}
                />
                <HeaderPropertyDetail
                  title={data.title}
                  address={data.address}
                  transactionType={t(`common:${data.transactionType}`)}
                  createdDate={data.createdDate}
                  expiredDate={data.expiredDate}
                />
                <MainAttributes
                  priceText={data.price}
                  attributes={data.attributeValue.mainAttributes}
                  t={t}
                />
              </div>
            </div>
            <div className="row">
              <div className={classNames('col-12 col-sm-12 col-md-9')}>
                <div className={styles.imageCarousel}>
                  <ImageCarousel
                    images={data.images}
                  />
                </div>
              </div>
              <NotMobile>
                <div className={classNames('col-12 col-sm-12 col-md-3')}>
                  <ContactForm
                    contact={data.contact}
                    postContact={postContact}
                    postContactResult={postContactResult}
                    onRequestContactChanged={this.onRequestContactChanged}
                    requestContact={requestContact}
                  />
                  <div className={styles.showDesktop}>
                    <div className={styles.buttonContactStickyWrap}>
                      <Sticky onFixedToggle={this.onFixedToggle} />
                    </div>
                  </div>
                </div>
              </NotMobile>
            </div>
            <div className="row">
              <div className={classNames('col-12')}>
                <div id={propertyDetailAnchorConfig.description.id} />
                <div className={styles.showDesktop}>
                  <div className={styles.AnchorListPropertyDetail}>
                    <AnchorList
                      routerLocation={routerLocation}
                      anchors={anchors}
                    />
                  </div>
                </div>
                <DescriptionDisplaying
                  description={data.description}
                  more={t('common:readMore')}
                  less={t('common:showLess')}
                  label={t('common:propertyDescription')}
                />
                <AttributeValues
                  shortDescriptionAttributeLabel={t('common:shortDescription')}
                  shortDescriptionAttributes={data.attributeValue.shortDescriptionAttributes}
                  secondaryAttributeLabel={t('common:secondaryFeatures')}
                  secondaryAttributes={data.attributeValue.secondaryAttributes}
                  utilitiesAttributeLabel={t('common:utilities')}
                  utilitiesAttributes={data.attributeValue.utilities}
                  t={t}
                />
              </div>
            </div>
            <div id={propertyDetailAnchorConfig.location.id} />
            <h4 className={styles.heading}>{propertyDetailAnchorConfig.location.label}</h4>
          </div>
          <div className="mt-4">
            <GoogleMapDetail
              pointsOfInterest={data.pointsOfInterest}
              location={data.location}
              t={t}
            />
          </div>
          <LPMrBanner />
          <div className="container">
            <div className={styles.showMobile}>
              <div className="row">
                <div className="col-12">
                  <ContactForm
                    contact={data.contact}
                    postContact={postContact}
                    postContactResult={postContactResult}
                    onRequestContactChanged={this.onRequestContactChanged}
                    requestContact={requestContact}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <PropertySuggestions
                label={t('common:propertySuggestions')}
                properties={data.suggestions}
                saveListing={saveListing}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WrapperPropertyDetail.propTypes = {
  t: PropTypes.func,
  data: PropTypes.shape({
    description: PropTypes.string,
    suggestions: PropTypes.array,
    images: PropTypes.array,
    transactionType: PropTypes.string,
    createdDate: PropTypes.instanceOf(Date).isRequired,
    expiredDate: PropTypes.instanceOf(Date).isRequired,
    priceText: PropTypes.number,
  }),
  postContact: PropTypes.func,
  saveListing: PropTypes.func,
  routerLocation: PropTypes.string,
  postContactResult: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
  }),
};

WrapperPropertyDetail.defaultProps = {
  t: null,
  data: {},
  postContact() {},
  saveListing() {},
  routerLocation: '',
  postContactResult: null,
};

export default translate(['propertyDetail', 'common'])(WrapperPropertyDetail);
