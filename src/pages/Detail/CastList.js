import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import styles from './Detail.module.scss';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const cx = classNames.bind(styles);

function CastList() {
  const { category, id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredit = async () => {
      const res = await tmdbApi.credits(category, id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredit();
  }, [category, id]);

  return (
    <div className={cx('casts')}>
      {casts.map((cast, index) => (
        <div key={index} className={cx('casts-item')}>
          <div
            className={cx('casts-item-image')}
            style={{
              backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`,
            }}
          ></div>
          <p className={cx('casts-item-name')}>{cast.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CastList;
