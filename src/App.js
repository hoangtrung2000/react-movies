import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { publicRouters } from './routes';
import { MainLayout } from './components/layouts';
function App() {
  return (
    <Routes>
      {publicRouters.map((route, index) => {
        const Layout = route.layout || MainLayout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
