import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

export const publicRouters = [
  { path: '/', component: Home },
  { path: '/:category/search/:keyword', component: Catalog },
  { path: '/:category', component: Catalog },
  { path: '/:catagory/:id', component: Detail },
];
export const privateRouters = [];
