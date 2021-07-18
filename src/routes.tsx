import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from 'constants/routes';
import { Home, FinishOrder, Root } from 'pages';
import {
  DoughSelector,
  IngredientsSelector,
  SizeSelector,
} from 'components/ui';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.root} element={<Root />}>
        <Route path={routes.home.root} element={<Home />}>
          <Route path={routes.home.root} element={<DoughSelector />} />
          <Route
            path={routes.home.ingredients}
            element={<IngredientsSelector />}
          />
          <Route path={routes.home.size} element={<SizeSelector />} />
        </Route>
        <Route path={routes.finish} element={<FinishOrder />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
