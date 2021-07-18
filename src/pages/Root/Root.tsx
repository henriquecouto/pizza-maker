import { Outlet } from 'react-router-dom';
import { Header } from 'components/ui';

export const Root = () => (
  <>
    <Header />
    <Outlet />
  </>
);
