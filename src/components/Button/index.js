import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button(props) {
  return (
    <button
      className={cx('btn', `${props.className}`)}
      onClick={props.onClick ? () => props.onClick() : null} //onClick={() => handle}
    >
      {props.children}
    </button>
  );
}

export const OutlineButton = (props) => {
  return (
    <Button
      className={cx('btn-outline', `${props.className}`)}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func, //Typechecking
};

export default Button;
