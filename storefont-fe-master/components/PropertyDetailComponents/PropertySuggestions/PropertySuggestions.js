import React from 'react';
import { Mobile, NotMobile } from '~/config/media';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Slider from 'react-slick';
import { CAROUSEL_SPEED } from '~/config/config';
import ProductReview from './ProductView/ProductView';
import styles from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: CAROUSEL_SPEED,
  arrows: true,
  autoplay: true,
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PropertySuggestions = (props) => {
  if (props.properties.length === 0) return null;

  return (
    <div className={classnames('col-12', `${styles.suggestions}`)}>
      <h4 className={styles.heading}>{props.label}</h4>
      <NotMobile>
        <Slider {...settings}>
          {
            props.properties.map(property => (
              <div key={property.id} className={styles.property}>
                <ProductReview
                  listing={property}
                  onListingSaved={props.saveListing}
                />
              </div>
            ))
          }
        </Slider>
      </NotMobile>
      <Mobile>
        {
          props.properties.slice(0, 3).map(property => (
            <div key={property.id} className={styles.property}>
              <ProductReview
                listing={property}
                onListingSaved={props.saveListing}
              />
            </div>
          ))
        }
      </Mobile>
    </div>
  );
};

PropertySuggestions.propTypes = {
  label: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired,
  saveListing: PropTypes.func.isRequired,
};

export default PropertySuggestions;
