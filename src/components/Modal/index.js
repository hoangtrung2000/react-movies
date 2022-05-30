import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Modal.moulde.scsss';

const cx = classNames.bind(styles);
function Modal(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={cx(`modal ${active ? 'active' : ''}`)}>
      {props.children}
    </div>
  );
}

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('active');
    if (props.onClose) {
      props.onClose();
    }
  };
  return (
    <div ref={contentRef} className={cx('modal-content')}>
      {props.children}
      <div className={cx('modal-content-close')} onClick={closeModal}></div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export default Modal;
