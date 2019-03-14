import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { CAROUSEL_GALLARY_SPEED } from '~/config/config';
import styles from './styles';

class ImageCarousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slideFull: null,
      SlideNav: null,
    };
  }

  componentDidMount() {
    this.setState({
      slideFull: this.slider1,
      SlideNav: this.slider2,
    });
  }

  render() {
    const { t, images } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: CAROUSEL_GALLARY_SPEED,
      arrows: true,
      slidesToShow: 1,
      autoplay: false,
      slidesToScroll: 1,
      swipeToSlide: true,
    };

    const settingsNav = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      arrows: true,
      swipeToSlide: true,
      focusOnSelect: true,
      speed: CAROUSEL_GALLARY_SPEED,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            arrows: false,
            swipeToSlide: true,
            focusOnSelect: true,
          },
        },
      ],
    };

    return (
      <div className={styles.imageCarouselInner}>
        <Slider
          {...settings}
          asNavFor={this.state.SlideNav}
          ref={slider => (this.slider1 = slider)}
          className="slider-property"
        >
          {
            images.map((image, index) =>
              (<div key={+index}>
                <img alt="" src={image} />
                <div className={styles.captionText}>
                  {`${index + 1}/ ${images.length}`}
                  <span className="imageText">{t('common:captionPicture')}</span>
                </div>
              </div>
              ))

          }
        </Slider>
        <Slider
          {...settingsNav}
          asNavFor={this.state.slideFull}
          ref={slider => (this.slider2 = slider)}
          className="slider-property-nav"
        >
          {
            images.map((image, index) =>
              (<div key={+index}>
                <img alt="" src={image} />
              </div>))
          }
        </Slider>
      </div>
    );
  }
}

ImageCarousel.propTypes = {
  t: PropTypes.func,
  images: PropTypes.array.isRequired,
};

ImageCarousel.defaultProps = {
  t: null,
};

export default translate(['common'])(ImageCarousel);
