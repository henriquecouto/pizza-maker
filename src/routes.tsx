import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from 'constants/routes';
import { Home } from 'pages';
import { DoughSelector, IngredientsSelector } from 'components/ui';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.home.root} element={<Home />}>
        <Route path={routes.home.root} element={<DoughSelector />} />
        <Route
          path={routes.home.ingredients}
          element={<IngredientsSelector />}
        />
        <Route path={routes.home.size} element={<h1>step 3</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
