import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import businessActions from '~/actions/BusinessActions';
import {
  POST_CONTACT,
  SAVE_LISTING,
} from '~/actions/BusinessActionTypes';
import WrapperPropertyDetail from '~/components/PropertyDetailComponents/WrapperPropertyDetail/WrapperPropertyDetail.js';
import { makeSelectProperty, getPostContactResultSelector } from './PropertyDetailSelector';

class PropertyDetail extends Component {
    onListingSaved = (listing) => {
      this.props.saveListing({ listingId: listing.id });
    };

    render() {
      const {
        property, postContact, location, postContactResult,
      } = this.props;

      if (!property) {
        return (<div />);
      }

      return (
        <WrapperPropertyDetail
          data={property}
          postContact={postContact}
          saveListing={this.onListingSaved}
          routerLocation={location}
          postContactResult={postContactResult}
        />
      );
    }
}

PropertyDetail.propTypes = {
  property: PropTypes.shape({
    description: PropTypes.string,
    suggestions: PropTypes.array,
    images: PropTypes.array,
    transactionType: PropTypes.string,
    createdDate: PropTypes.instanceOf(Date).isRequired,
    expiredDate: PropTypes.instanceOf(Date).isRequired,
  }),
  postContact: PropTypes.func,
  saveListing: PropTypes.func,
  location: PropTypes.string,
  postContactResult: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
  }),
};

PropertyDetail.defaultProps = {
  property: null,
  postContact() {},
  saveListing() {},
  location: '',
  postContactResult: null,
};

const mapStateToProps = createStructuredSelector({
  property: makeSelectProperty(),
  postContactResult: getPostContactResultSelector(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      postContact: businessActions[POST_CONTACT],
      saveListing: businessActions[SAVE_LISTING],
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetail);
