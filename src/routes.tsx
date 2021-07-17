import routes from 'constants/routes';
import { Home } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.home.root} element={<Home />}>
        <Route path={routes.home.root} element={<h1>step 1</h1>} />
        <Route path={routes.home.ingredients} element={<h1>step 2</h1>} />
        <Route path={routes.home.size} element={<h1>step 3</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
