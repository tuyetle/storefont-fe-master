import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Link } from '~/shared/routes';
import footerConfig from '~/config/footerConfig';
import RingierImg from './img/ringierdigital-logo-145x24.png';
import MuaBanNhaDatImg from './img/ic-chungnhan.jpg';
import styles from './styles';

const classHiddenLine = 'd-none d-md-block';

export const LPFooter = ({ t }) => (
  <section className={`${styles.footer}`}>
    <div className="container">
      <div className={`${styles.links}`}>
        <span className={`${styles.item}`}>
          <Link route={footerConfig.about.link} replace >
            <a>{t(`${footerConfig.about.label}`)}</a>
          </Link>
        </span>
        <span className={classHiddenLine}>|</span> <span className={`${styles.item}`}>
          <Link route={footerConfig.faq.link} replace >
            <a>{t(`${footerConfig.faq.label}`)}</a>
          </Link>
        </span>
        <span className={classHiddenLine}>|</span> <span className={`${styles.item}`}>
          <Link route={footerConfig.rules.link} replace >
            <a>{t(`${footerConfig.rules.label}`)}</a>
          </Link>
        </span>
        <span className={classHiddenLine}>|</span> <span className={`${styles.item}`}>
          <Link route={footerConfig.regulation.link} replace >
            <a>{t(`${footerConfig.regulation.label}`)}</a>
          </Link>
        </span>
        <span className={classHiddenLine}>|</span> <span className={`${styles.item}`}>
          <Link route={footerConfig.contact.link} replace >
            <a>{t(`${footerConfig.contact.label}`)}</a>
          </Link>
        </span>
        <span className={classHiddenLine}>|</span> <span className={`${styles.item}`}>
          <Link route={footerConfig.recruitment.link} replace >
            <a>{t(`${footerConfig.recruitment.label}`)}</a>
          </Link>
        </span>
        <span className={classHiddenLine}>|</span> <span className={`${styles.item}`}>
          <Link route={footerConfig.prices.link} replace >
            <a>{t(`${footerConfig.prices.label}`)}</a>
          </Link>
        </span>
        <span className={classHiddenLine}>|</span> <span className={`${styles.item}`}>
          <Link route={footerConfig.sitemap.link} replace >
            <a>{t(`${footerConfig.sitemap.label}`)}</a>
          </Link>
        </span>
      </div>
      <div>
        <p className="text-center">
          {t(`${footerConfig.introCompany.content}`)}
        </p>
        <p className="text-center">{t(`${footerConfig.introCompany.companyName}`)}</p>
        <p className="text-center">{t(`${footerConfig.introCompany.numBusiness}`)}</p>
        <div className={`text-center ${styles.socialIcons}`}>
          <a href="https://www.facebook.com/MuaBanNhaDat" className={`${styles.wraper}`}>
            <i className={`fa fa-circle-thin ${styles.cicle}`} aria-hidden="true" />
            <i className={`fa fa-facebook ${styles.socialIcon} ${styles.fb}`} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/company/muabannhadat?trk=biz-companies-cym" className={`${styles.wraper}`}>
            <i className={`fa fa-circle-thin ${styles.cicle}`} aria-hidden="true" />
            <i className={`fa fa-linkedin ${styles.socialIcon} ${styles.in}`} aria-hidden="true" />
          </a>
          <a href="https://plus.google.com/+muabannhadat" className={`${styles.wraper}`}>
            <i className={`fa fa-circle-thin ${styles.cicle}`} aria-hidden="true" />
            <i className={`fa fa-google-plus ${styles.socialIcon} ${styles.gp}`} aria-hidden="true" />
          </a>
        </div>
        <p className="text-center">
          <a href="http://online.gov.vn/WebsiteDisplay.aspx?DocId=19652">
            <img alt="MuaBanNhaDat" src={MuaBanNhaDatImg} width="80px" height="30px" />
          </a>
          <img alt="Ringier" className={classNames(`${styles.ringerLogo}`)} src={RingierImg} width="128px" />
        </p>
      </div>
    </div>
  </section>
);

LPFooter.propTypes = {
  t: PropTypes.func.isRequired,
};

LPFooter.defaultProps = {
};
export default translate(['lPFooter'])(LPFooter);
