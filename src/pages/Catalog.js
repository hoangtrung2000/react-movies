import React from 'react';
import { useParams } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import { category as cate } from '../api/tmdbApi';
import MovieGird from '../components/MovieGrid';
function Catalog() {
  const { category } = useParams();

  return (
    <div>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGird category={category} />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
