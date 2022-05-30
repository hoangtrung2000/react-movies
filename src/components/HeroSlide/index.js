import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import styles from './HeroSlide.module.scss';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Button, { OutlineButton } from '../Button';

const cx = classNames.bind(styles);

function HeroSlide() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params, // enhanced object literals
        });
        setMovieItems(response.results.slice(0, 4));
      } catch {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  return (
    <div className={cx('hero-slide')}>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={cx(`${isActive ? 'active' : ''}`)}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const HeroSlideItem = (props) => {
  let history = useNavigate();

  const item = props.item;
  const background = apiConfig.orginalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );

  return (
    <div
      className={cx('item', `${props.className}`)}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={cx('content', 'container')}>
        <div className={cx('content-info')}>
          <h2 className={cx('title')}>{item.title}</h2>
          <div className={cx('overview')}>{item.overview}</div>
          <div className={cx('btns')}>
            <Button onClick={() => history('/movie/' + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={() => console.log('trailer')}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className={cx('content-poster')}>
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
