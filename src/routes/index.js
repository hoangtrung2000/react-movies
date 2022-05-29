import Home from '../pages/Home';
import Catalog from '../pages/Catalog';

export const publicRouters = [
  { path: '/', component: Home },
  { path: '/:category', component: Catalog },
];
export const privateRouters = [];
