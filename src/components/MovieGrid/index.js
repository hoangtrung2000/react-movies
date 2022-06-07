import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './MovieGrid.module.scss';
import tmdbApi, {
  movieType,
  tvType,
  category as cate,
} from '../../api/tmdbApi';
import MovieCard from '../MovieCard';
import { OutlineButton } from '../Button';
import Input from '../Input';

const cx = classNames.bind(styles);

function MovieGird({ category }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case cate.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.on_the_air, { params });
            break;
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [category, keyword]);

  const handleLoadMore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (category) {
        case cate.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.on_the_air, { params });
          break;
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={category} keyword={keyword} />
      </div>
      <div className={cx('movie-grid')}>
        {items.map((item, index) => (
          <MovieCard key={index} item={item} category={category} />
        ))}
      </div>
      {page < totalPage ? (
        <div className={cx('loadmore')}>
          <OutlineButton className="small" onClick={handleLoadMore}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
}

const MovieSearch = ({ keyword, category }) => {
  let navigate = useNavigate();
  const [searchKey, setSearchKey] = useState(keyword ? keyword : '');

  const goToSearch = useCallback(() => {
    if (searchKey.trim().length > 0) {
      navigate(`/${cate[category]}/search/${searchKey}`);
      setSearchKey('');
    }
  }, [searchKey, category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener('keyup', enterEvent);

    return () => {
      document.removeEventListener('keyup', enterEvent);
    };
  }, [keyword, goToSearch]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith(' ')) {
      setSearchKey(inputValue);
    }
  };

  return (
    <div className={cx('movie-search')}>
      <Input
        type="text"
        placeholder="Enter your keyword"
        value={searchKey}
        onChange={handleChange}
      />
    </div>
  );
};
export default MovieGird;
