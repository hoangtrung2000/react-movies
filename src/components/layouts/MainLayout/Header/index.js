import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../../../assets/tmovie.png';
import styles from './Header.module.scss';

const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
];

const cx = classNames.bind(styles);
function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  useEffect(() => {
    const handleShrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTo > 100
      ) {
        headerRef.current.classList.add(cx('shrink'));
      } else {
        headerRef.current.classList.remove(cx('shrink'));
      }
    };

    window.addEventListener('scroll', handleShrinkHeader);

    return () => {
      window.removeEventListener('scroll', handleShrinkHeader);
    };
  }, []);

  const active = headerNav.findIndex((e) => e.path === pathname);

  return (
    <div ref={headerRef} className={cx('header')}>
      <div className={cx('header-wrapper', 'container')}>
        <div className={cx('logo')}>
          <img src={logo} alt="logo" />
          <Link to="./">tMovie</Link>
        </div>
        <ul className={cx('header-nav')}>
          {headerNav.map((link, index) => (
            <li
              key={index}
              className={cx(`${index === active ? 'active' : ''}`)}
            >
              <Link to={link.path}>{link.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
