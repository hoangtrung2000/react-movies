import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import bg from '../../../../assets/footer-bg.jpg';
import logo from '../../../../assets/tmovie.png';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx('footer')} style={{ backgroundImage: `url(${bg})` }}>
      <div className={cx('content', 'container')}>
        <div className={cx('content-logo')}>
          <div className={cx('logo')}>
            <img src={logo} alt="" />
            <Link to="/">Reflix</Link>
          </div>
        </div>
        <div className={cx('content-menus')}>
          <div className={cx('menu')}>
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className={cx('menu')}>
            <Link to="/">Live</Link>
            <Link to="/">FQA</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className={cx('menu')}>
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
