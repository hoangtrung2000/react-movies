import React from 'react';
import classNames from 'classnames/bind';

import styles from './PageHeader.module.scss';
import bg from '../../assets/footer-bg.jpg';
const cx = classNames.bind(styles);
function PageHeader({ children }) {
  return (
    <div
      className={cx('page-header')}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2>{children}</h2>
    </div>
  );
}

export default PageHeader;
