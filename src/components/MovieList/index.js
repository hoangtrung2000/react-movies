import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import styles from './MovieList.module.scss';
import Button from '../Button';
import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const cx = classNames.bind(styles);

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.type, props.id);
      }
      setItems(response.results);
    };
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('movie-list')}>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView="auto">
        {items.map((item, index) => (
          <SwiperSlide className={cx('swiper-slide-replace')} key={index}>
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
