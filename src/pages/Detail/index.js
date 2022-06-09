import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Detail.module.scss';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const cx = classNames.bind(styles);
function Detail() {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className={cx('banner')}
            style={{
              backgroundImage: `url(${apiConfig.orginalImage(
                item.backdrop_path || item.poster_path,
              )})`,
            }}
          ></div>

          <div className={cx('md-3', 'content', 'container')}>
            <div className={cx('content-poster')}>
              <div
                className={cx('content-poster-image')}
                style={{
                  backgroundImage: `url(${apiConfig.orginalImage(
                    item.poster_path || item.backdrop_path,
                  )})`,
                }}
              ></div>
            </div>
            <div className={cx('content-info')}>
              <h1 className={cx('title')}>{item.title || item.name}</h1>
              <div className={cx('genres')}>
                {item.genres &&
                  item.genres.slice(0, 4).map((genre, index) => (
                    <span key={index} className={cx('genres-item')}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className={cx('overview')}>{item.overview}</p>
              <div className={cx('cast')}>
                <div className={cx('section-header')}>
                  <h2>Cast</h2>
                  {/* Cast list */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
