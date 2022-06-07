import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      className={cx('input')}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange ? (e) => onChange(e) : null}
    />
  );
}

export default Input;
