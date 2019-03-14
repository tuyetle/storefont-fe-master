import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Slider from 'react-slick';
import { css } from 'glamor';
import { CAROUSEL_SPEED } from '~/config/config';
import canUseDOM from '#/services/domHelper';
import LPSection from '~/components/LandingPageComponents/LPSection/LPSection';
import LPHighlightProjectItem from '~/components/LandingPageComponents/LPHighlightProject/LPHighlightProjectItem/LPHighlightProjectItem';
import styles from './styles';

const settings = {
  dots: true,
  dotsClass: 'dot',
  infinite: true,
  speed: CAROUSEL_SPEED,
  arrows: true,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RenderCarousel = items => (
  canUseDOM === false ?
    <div className="slick-initialized slick-slider">
      <div className="slick-list">
        <div className="slick-track">
          {
            items.map(p =>
              (
                <div key={p.id} className={classNames('slick-slide', 'slick-cloned', `${css(styles.projectItem)}`)}>
                  <LPHighlightProjectItem
                    listing={p}
                  />
                </div>
              ))
          }
        </div>
      </div>
      <ul className="dot" />
    </div>
    :
    <Slider {...settings}>
      {
        items.map(p =>
          (
            <div key={p.id}>
              <LPHighlightProjectItem
                listing={p}
              />
            </div>
          ))
      }
    </Slider>
);

class LPHighlightProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
  }

    toggle = (tab) => {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab,
        });
      }
    }

    render() {
      const { t, newProjects, featuredProjects } = this.props;
      if (newProjects.length === 0 || featuredProjects.length === 0) {
        return (<div />);
      }
      return (
        <LPSection title={t('project')} className={`${css(styles.project)}`}>
          <Nav className="justify-content-center">
            <NavItem>
              <NavLink
                className={classNames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                {t('common:newest')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classNames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                {t('common:feature')}
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              {RenderCarousel(newProjects)}
            </TabPane>
            <TabPane tabId="2">
              {RenderCarousel(featuredProjects)}
            </TabPane>
          </TabContent>
        </LPSection>
      );
    }
}

LPHighlightProject.propTypes = {
  newProjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    picture: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
  })).isRequired,
  featuredProjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    picture: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
  })).isRequired,
  t: PropTypes.func.isRequired,
};

LPHighlightProject.defaultProps = {

};

export default translate(['landingPage'])(LPHighlightProject);
