import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

function MyRoutes() {
  return;
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/:category/search/:keyword"
      element={<Catalog title="Movie" />}
    />
    <Route path="/:catagory" element={<Catalog />} />
    <Route path="/:catagory/:id" element={<Detail />} />
  </Routes>;
}

export default MyRoutes;
