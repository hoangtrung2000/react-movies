import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import bg from '../../../../assets/footer-bg.jpg';
import logo from '../../../../assets/logo2.png';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx('footer')} style={{ backgroundImage: `url(${bg})` }}>
      <div className={cx('content', 'container')}>
        <div className={cx('content-logo')}>
          <div className={cx('logo')}>
            <Link to="/">
              {' '}
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className={cx('content-menus')}>
          <div className={cx('menu')}>
            <Link to="/">Live</Link>
            <Link to="/">FQA</Link>
          </div>
          <div className={cx('menu')}>
            <Link to="/">You must watch</Link>
            <Link to="/">Top IMDB</Link>
          </div>
          <div className={cx('menu')}>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
