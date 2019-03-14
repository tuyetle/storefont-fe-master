import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Mobile, NotMobile } from '~/config/media';
import classNames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Collapse } from 'reactstrap';
import styles from './styles';

class LPSeoLinks extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.seoLinks[0].name,
      openTab: null,
    };
  }

  toggle = (e) => {
    this.setState({
      openTab: e.target.value === this.state.openTab ? null : e.target.value,
    });
  }

  selectTab = (evt) => {
    const activeTab = evt.target.attributes.rel;
    this.setState({ activeTab: activeTab.value });
  }

  renderOther = () => {
    const { seoLinks } = this.props;
    const { activeTab } = this.state;

    return (
      <NotMobile>
        <div className={classNames(`${styles.seo}`)}>
          <section className={classNames(`container ${styles.seoLinks}`)}>
            <Nav tabs className={`${styles.tab}`}>
              {seoLinks.map((seoLink, index) => (
                <NavItem key={+index}>
                  <NavLink
                    rel={seoLink.name}
                    className={classNames({ active: activeTab === seoLink.name })}
                    onClick={this.selectTab}
                  >
                    {seoLink.displayName}
                    <span />
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <TabContent activeTab={activeTab} className={`${styles.tabContent}`}>
              {seoLinks.map(seoLink => (
                <TabPane tabId={seoLink.name} key={seoLink.name}>
                  <Row>
                    {seoLink.links.map((link, index) => (
                      <Col sm="3" key={+index}>
                        <a
                          className={`${styles.link}`}
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
              ))}
            </TabContent>
          </section>
        </div>
      </NotMobile>
    );
  }

  renderMobile = () => {
    const { seoLinks } = this.props;

    return (
      <Mobile>
        <section className={classNames(`${styles.seo}`)}>
          <div className={classNames(`container ${styles.seoLinks}`)}>
            <Nav className={`${styles.accordion}`}>
              {seoLinks.map((seoLink, index) => (
                <NavItem key={+index}>
                  <button
                    onClick={this.toggle}
                    value={seoLink.name}
                    className={classNames(`${styles.buttonLink}`, this.state.openTab === seoLink.name ? 'active' : '')}
                  >
                    {seoLink.displayName}
                    <i className={classNames(`${styles.icon}`)} value={seoLink.name} />
                  </button>
                  <Collapse
                    isOpen={this.state.openTab === seoLink.name}
                    className={classNames(`${styles.tabContent}`)}
                  >
                    <Row>
                      <Col sm="12">
                        <Nav className={`${styles.accordionList}`}>
                          {seoLink.links.map((link, i) => (
                            <NavItem key={+i}>
                              <a
                                className={`${styles.link}`}
                                href={link.url}
                              >
                                {link.name}
                              </a>
                            </NavItem>
                          ))}
                        </Nav>
                      </Col>
                    </Row>
                  </Collapse>
                </NavItem>
              ))}
            </Nav>
          </div>
        </section>
      </Mobile>
    );
  }

  render() {
    return (
      <Fragment>
        {
          this.renderMobile()
        }
        {
          this.renderOther()
        }
      </Fragment>
    );
  }
}

LPSeoLinks.propTypes = {
  seoLinks: PropTypes.array.isRequired,
};

export default LPSeoLinks;
