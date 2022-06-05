import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './MovieCard.module.scss';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Button from '../Button';

const cx = classNames.bind(styles);

function MovieCard(props) {
  const item = props.item;
  const link = '/' + category[props.category] + '/' + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div
        className={cx('movie-card')}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Button className={cx('btn')}>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
}

export default MovieCard;
